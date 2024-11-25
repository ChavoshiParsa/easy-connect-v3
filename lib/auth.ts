import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compareSync } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from './db';
import { FormSchema } from './schemas';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  pages: {
    newUser: 'sign-up',
    signIn: '/sign-in',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'mail@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsedCredentials = FormSchema.safeParse(credentials);

        if (!parsedCredentials.success) return null;
        const { email, password } = parsedCredentials.data;

        try {
          const existingUser = await db.user.findUnique({
            where: { email: email.toLowerCase().trim() },
          });

          if (!existingUser) return null;
          const passwordsMatch = compareSync(password, existingUser.password);

          if (!passwordsMatch) return null;

          return existingUser;
        } catch (error) {
          console.error('Failed to fetch user:', error);
          throw new Error('Failed to fetch user.');
        }
      },
    }),
  ],
};
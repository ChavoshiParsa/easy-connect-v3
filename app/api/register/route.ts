import { db } from '@/lib/db';
import { hashSync } from 'bcrypt';
import { NextResponse } from 'next/server';
import { omit } from 'lodash';
import z from 'zod';

const userSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters long'),
});

export async function POST(req: Request) {
  try {
    console.log(req);
    const body = await req.json();
    const result = userSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ errors: result.error.flatten() }, { status: 400 });
    }

    const { email, password } = result.data;

    // check if email already exists
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) return NextResponse.json({ user: null, message: 'user_exist' }, { status: 409 });

    const hashedPass = hashSync(password, 10);
    const newUser = await db.user.create({ data: { email, password: hashedPass } });
    const safeUser = omit(newUser, ['password']);
    console.log(safeUser);

    return NextResponse.json({ user: safeUser }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

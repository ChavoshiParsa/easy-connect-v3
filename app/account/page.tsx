import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/auth-options';
import AuthLayout from '@/components/layout/auth/AuthLayout';

export type AuthPageMode = 'sign-in' | 'sign-up';

export default async function AuthPage({ searchParams }: { searchParams: Promise<{ page?: AuthPageMode | string }> }) {
  const { page = 'sign-in' } = await searchParams;

  if (!['sign-in', 'sign-up'].includes(page)) {
    redirect('/account?page=sign-in');
  }

  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/home');
  }

  return <AuthLayout initialPage={page as AuthPageMode} />;
}

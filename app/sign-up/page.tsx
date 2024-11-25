import SignUpForm from '@/components/auth/SignUpForm';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);

  if (session && session.user) redirect('/home');

  return <SignUpForm />;
}
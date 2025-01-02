import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import Home from '@/components/layout/home/Home';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) redirect('/account?page=sign-in');

  return <Home />;
}

import LogoutButton from '@/components/layout/LogoutButton';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) redirect('/sign-in');

  return (
    <div className="flex items-center justify-center gap-2 p-4">
      <h1>This is Home Page</h1>
      <p>your username is {session.user?.email}</p>
      <LogoutButton />
    </div>
  );
}
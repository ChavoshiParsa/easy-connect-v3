import Sidebar from '@/components/layout/sidebar/Sidebar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/auth-options';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) redirect('/auth?page=sign-in');

  return (
    <div className="relative flex h-full w-full items-center justify-start">
      <Sidebar />
      {children}
    </div>
  );
}

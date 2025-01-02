'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <Button className="bg-destructive text-destructive-foreground" onClick={handleLogout}>
      Logout
    </Button>
  );
}

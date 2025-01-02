'use client';

import { Button } from '@/components/ui/button';
import { handleLogout } from '@/lib/utils';

export default function LogoutButton() {
  return (
    <Button className="bg-destructive text-destructive-foreground" onClick={handleLogout}>
      Logout
    </Button>
  );
}

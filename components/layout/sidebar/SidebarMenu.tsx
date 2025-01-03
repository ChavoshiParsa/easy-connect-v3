import { Bookmark, Contact, Home, Settings2, UserPen } from 'lucide-react';
import SidebarMenuItem from './SidebarMenuItem';
import { TooltipProvider } from '@/components/ui/tooltip';

const menuItems = [
  { title: 'home', href: '/home', icon: Home },
  { title: 'profile', href: '/profile', icon: UserPen },
  { title: 'preferences', href: '/preferences', icon: Settings2 },
  { title: 'saved_messages', href: '/saved-messages', icon: Bookmark },
  { title: 'contacts', href: '/contacts', icon: Contact },
];

export default function SidebarMenu() {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <TooltipProvider>
        {menuItems.map(({ title, href, icon }) => (
          <SidebarMenuItem key={title} title={title} href={href} icon={icon} />
        ))}
      </TooltipProvider>
    </div>
  );
}

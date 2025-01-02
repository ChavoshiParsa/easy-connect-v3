import { Bookmark, Contact, Home, Settings2, UserPen } from 'lucide-react';
import SidebarMenuItem from './SidebarMenuItem';

const menuItems = [
  { title: 'home', href: '/home', icon: Home },
  { title: 'profile', href: '/profile', icon: UserPen },
  { title: 'preferences', href: '/preferences', icon: Settings2 },
  { title: 'saved_messages', href: '/saved-messages', icon: Bookmark },
  { title: 'contacts', href: '/contacts', icon: Contact },
];

export default function SidebarMenu() {
  return (
    <div className="flex w-full flex-col items-center gap-1">
      {menuItems.map(({ title, href, icon }, index) => (
        <SidebarMenuItem key={index} title={title} href={href} icon={icon} />
      ))}
    </div>
  );
}

'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useElementWidth } from '@/hooks/useElementWidth';
import { isSidebarOpenAtom } from '@/lib/store';
import { cn } from '@/lib/utils';
import { useAtomValue } from 'jotai';
import ChatList from './chat-list/ChatList';
import ChatScreen from './chat-screen/ChatScreen';

type Props = {
  userId?: string;
};

export default function Home({ userId }: Props) {
  const [mainRef, divWidth] = useElementWidth<HTMLDivElement>();
  const isSidebarOpen = useAtomValue(isSidebarOpenAtom);

  const isDivUnder724 = divWidth < 724 && isSidebarOpen;

  return (
    <main className="flex h-full w-full xs:ms-14 xs:w-[calc(100%-3.5rem)] md:m-0 md:w-full" ref={mainRef}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          className={cn(isDivUnder724 ? (userId ? 'hidden' : 'block') : userId ? 'hidden md:block' : 'block')}
          minSize={40}
          defaultSize={40}
        >
          <ChatList />
        </ResizablePanel>
        <ResizableHandle className={cn(isDivUnder724 ? 'hidden' : 'hidden md:flex')} withHandle />
        <ResizablePanel
          className={cn(isDivUnder724 ? (userId ? 'block' : 'hidden') : userId ? 'block' : 'hidden md:block')}
          minSize={40}
          defaultSize={60}
        >
          <ChatScreen userId={userId} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}

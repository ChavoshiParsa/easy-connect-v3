'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useElementWidth } from '@/hooks/useElementWidth';
import { isSidebarOpenAtom } from '@/lib/store';
import { cn } from '@/lib/utils';
import { useAtomValue } from 'jotai';
import { useLocale } from 'next-intl';
import ChatList from './chat-list/ChatList';
import ChatScreen from './chat-screen/ChatScreen';

type Props = {
  userId?: string;
};

export default function Home({ userId }: Props) {
  const [divRef, divWidth] = useElementWidth<HTMLDivElement>();
  const isSidebarOpen = useAtomValue(isSidebarOpenAtom);

  const locale = useLocale();
  const isRtl = locale === 'pr';

  const isDivUnder724 = divWidth < 724 && isSidebarOpen;

  return (
    <div
      className={cn('xs:w-[calc(100%-3.5rem)] flex h-full w-full md:m-0 md:w-full', isRtl ? 'xs:mr-14' : 'xs:ml-14')}
      ref={divRef}
    >
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          className={cn(isDivUnder724 ? (userId ? 'hidden' : 'block') : userId ? 'hidden md:block' : 'block')}
          minSize={45}
        >
          <ChatList />
        </ResizablePanel>

        <ResizableHandle className={cn(isDivUnder724 ? 'hidden' : 'hidden md:flex')} withHandle />

        <ResizablePanel
          className={cn(isDivUnder724 ? (userId ? 'block' : 'hidden') : userId ? 'block' : 'hidden md:block')}
          minSize={45}
        >
          <ChatScreen userId={userId} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

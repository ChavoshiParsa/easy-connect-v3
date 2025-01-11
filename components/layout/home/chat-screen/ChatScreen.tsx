import { messageItems } from '@/types/constants';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import Message from './Message';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  userId?: string;
};

export default function ChatScreen({ userId }: Props) {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [isMessageEndInView, setIsMessageEndInView] = useState(true);

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMessageEndInView(entry.isIntersecting);
      },
      { threshold: 1.0 }
    );

    if (messageEndRef.current) {
      observer.observe(messageEndRef.current);
    }

    return () => {
      if (messageEndRef.current) {
        observer.unobserve(messageEndRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeout);
  }, [messageItems.length]);

  if (!userId)
    return (
      <div className="flex size-full items-center justify-center bg-zinc-100 dark:bg-zinc-900">
        <h2 className="animate-pulse text-xl font-medium">Select a Chat</h2>
      </div>
    );

  return (
    <div className="relative flex size-full flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-950">
      <ChatHeader />
      <div className="no-scrollbar -mb-1.5 mt-auto flex w-full overflow-y-auto p-2">
        <div className="flex h-fit w-full flex-col justify-end gap-1.5">
          {messageItems.map((item) => (
            <Message key={item.messageId} {...item} />
          ))}
          <div ref={messageEndRef} />
        </div>
      </div>
      {!isMessageEndInView && (
        <Button
          className="absolute bottom-[72px] end-2 size-11 rounded-full bg-zinc-100 opacity-90 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900"
          variant="outline"
          size="icon"
          onClick={scrollToBottom}
        >
          <ChevronDown />
        </Button>
      )}
      <ChatInput />
    </div>
  );
}

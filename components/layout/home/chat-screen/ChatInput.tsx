import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useApp } from '@/hooks/useApp';
import { cn } from '@/lib/utils';
import { SendHorizontal } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

export default function ChatInput() {
  const t = useTranslations('ChatScreen');
  const { isRtl } = useApp();

  const submitFormRef = useRef<HTMLButtonElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState('');

  async function sendMessageHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function textareaChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
    // is typing ...
  }

  function keyDownHandler(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitFormRef.current?.click();
    }
  }

  return (
    <form
      className="z-20 flex w-full gap-2 border-t border-zinc-200 bg-zinc-100 p-2 dark:border-zinc-800 dark:bg-zinc-950"
      onSubmit={sendMessageHandler}
    >
      <Textarea
        className="max-h-12 min-h-12 resize-none break-words py-3 text-sm"
        ref={textAreaRef}
        placeholder={t('write_message')}
        name="message-field"
        value={message}
        onChange={textareaChangeHandler}
        onKeyDown={keyDownHandler}
        autoComplete="off"
        required
        // disabled={isLoading}
      />
      <Button
        className="min-h-12 min-w-12 bg-zinc-100 hover:bg-sky-400 dark:bg-zinc-950 dark:hover:bg-sky-500"
        variant="outline"
        size="icon"
        ref={submitFormRef}
      >
        <SendHorizontal className={cn(isRtl ? 'rotate-180' : 'rotate-0')} />
      </Button>
    </form>
  );
}

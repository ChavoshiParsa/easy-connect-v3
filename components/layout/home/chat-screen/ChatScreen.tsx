type Props = {
  userId?: string;
};
export default function ChatScreen({ userId }: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-700">
      {userId ? <h2>Chat Screen</h2> : <h2>Select a Chat</h2>}
    </div>
  );
}

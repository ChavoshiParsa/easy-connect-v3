import Sidebar from './sidebar/Sidebar';
import ChatList from './chat-list/ChatList';
import ChatScreen from './chat-screen/ChatScreen';

export default function Home() {
  return (
    <div className="flex h-full w-full gap-0.5">
      <Sidebar />
      {/* <ChatList /> */}
      {/* <ChatScreen /> */}
    </div>
  );
}

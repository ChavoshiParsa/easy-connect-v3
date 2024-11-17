'use client';

import { socket } from '@/socket';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <div>
      <h1>Socket is {isConnected ? 'connected' : 'not connected'}</h1>
    </div>
  );
}

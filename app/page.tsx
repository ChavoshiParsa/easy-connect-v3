import SettingActionButtons from '@/components/common/SettingActionButtons';
import { useApp } from '@/hooks/useApp';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function LandingPage() {
  const { appName } = useApp();
  const t = useTranslations('LandingPage');

  return (
    <div className="flex size-full flex-col items-center justify-between p-4">
      <nav className="flex w-full items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Link
            className="text-nowrap rounded bg-indigo-600 px-4 py-2 text-center text-white hover:bg-indigo-700"
            href="auth?page=sign-in"
          >
            {t('sign_in')}
          </Link>
          <Link
            className="text-nowrap rounded bg-sky-600 px-4 py-2 text-center text-white hover:bg-sky-700"
            href="auth?page=sign-up"
          >
            {t('sign_up')}
          </Link>
        </div>
        <SettingActionButtons />
      </nav>
      <div className="flex size-full flex-col items-center justify-center space-y-8">
        <h1 className="text-5xl font-bold">{appName}</h1>
        <h2 className="text-3xl font-medium">{t('welcome')}</h2>
      </div>
    </div>
  );
}

/*
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState('');

  function onConnect() {
    setIsConnected(true);
  }

  function onDisconnect() {
    setIsConnected(false);
  }

  function onMessage(message: string) {
    setMessage(message);
  }

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessage);
    };
  }, []);
*/

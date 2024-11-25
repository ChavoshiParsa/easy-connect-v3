import LocaleSelector from '@/components/layout/LocaleSelector';
import { ModeToggle } from '@/components/layout/ModeToggle';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function LandingPage() {
  const t = useTranslations('LandingPage');

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center justify-center gap-2">
        <ModeToggle />
        <LocaleSelector />
      </div>
      <div className="flex flex-col items-start space-y-1">
        <h1>{t('easy_connect')}</h1>
        <h2>{t('welcome')}</h2>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Link
          className="text-nowrap rounded bg-indigo-600 px-4 py-2 text-center text-white hover:bg-indigo-700"
          href="sign-in"
        >
          {t('sign_in')}
        </Link>
        <Link
          className="text-nowrap rounded bg-sky-600 px-4 py-2 text-center text-white hover:bg-sky-700"
          href="sign-up"
        >
          {t('sign_up')}
        </Link>
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

/*  
    <Button onClick={() => setUserLocale(locale === 'pr' ? 'en' : 'pr')}>{locale}</Button>
      {mounted && (
        <Button className="dark:bg-red-300" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme}
        </Button>
      )} 
*/

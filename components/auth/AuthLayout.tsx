'use client';

import { AuthPageMode } from '@/app/account/page';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import LoginForm from './LoginForm';
import LoginNavbar from './LoginNavbar';

export default function AnimatedAuthLayout({ initialPage }: { initialPage: AuthPageMode }) {
  const isSignInPage = initialPage === 'sign-in';

  return (
    <main
      key={isSignInPage ? 'sign-in' : 'sign-up'}
      className={cn('flex size-full items-center', isSignInPage ? 'flex-row' : 'flex-row-reverse')}
    >
      <AuthImage isSignInPage={isSignInPage} />
      <AuthSection isSignInPage={isSignInPage} />
    </main>
  );
}

function AuthImage({ isSignInPage }: { isSignInPage: boolean }) {
  const locale = useLocale();
  const f = locale === 'pr' ? 1 : -1;

  return (
    <motion.aside
      className="z-10 h-full w-0 md:w-7/12"
      initial={{ x: isSignInPage ? `${f * 100}%` : `${f * -100}%`, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: isSignInPage ? `${f * -100}%` : `${f * 100}%`, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <div className="relative size-full">
        <Image
          className="object-cover object-center"
          fill
          src={isSignInPage ? '/images/city.jpg' : '/images/mountain.jpg'}
          alt={isSignInPage ? 'City view' : 'Mountain view'}
          priority
        />
      </div>
    </motion.aside>
  );
}

function AuthSection({ isSignInPage }: { isSignInPage: boolean }) {
  const pageKey = isSignInPage ? 'sign_in' : 'sign_up';
  const locale = useLocale();
  const f = locale === 'pr' ? 1 : -1;

  return (
    <motion.section
      className="flex h-full w-full flex-col items-center justify-start space-y-24 p-2 md:w-5/12 md:p-6"
      initial={{ x: isSignInPage ? `${f * -100}%` : `${f * 100}%`, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: isSignInPage ? `${f * 100}%` : `${f * -100}%`, opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <LoginNavbar page={pageKey} />
      <div className="flex h-full w-full flex-col items-center space-y-5 md:items-start">
        <LoginForm pageMode={isSignInPage ? 'sign-in' : 'sign-up'} />
      </div>
    </motion.section>
  );
}

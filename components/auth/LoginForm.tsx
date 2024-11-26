'use client';

import { FormSchema, schemaWithTranslation } from '@/types/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import IconInput from './IconInput';
import { AuthPageMode } from '@/app/account/page';
import apiClient from '@/lib/api-client';
import axios from 'axios';

export default function LoginForm({ pageMode }: { pageMode: AuthPageMode }) {
  const isSignInForm = pageMode === 'sign-in';
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const t = useTranslations('LoginPage');

  useEffect(() => {
    router.refresh();
  }, [router]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(schemaWithTranslation(t)),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const { email, password } = values;
    setLoading(true);
    try {
      if (!isSignInForm) {
        await apiClient.post('register', { email, password });
      }
      const signInData = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (signInData?.ok) {
        toast.success(t(isSignInForm ? 'success_sign_in' : 'success_sign_up'));
        router.push('/home');
      } else if (signInData?.error) {
        toast.error(t(signInData.error));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(t(error.response?.data.message));
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(`${error}`);
      }
    }
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <IconInput type="email" placeholder={t('email')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <IconInput type="password" placeholder={t('password')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="mt-8 w-full bg-indigo-500 py-6 text-lg font-bold text-white transition hover:bg-indigo-600 active:scale-[.97] dark:bg-indigo-700 dark:hover:bg-indigo-800"
          type="submit"
          disabled={loading}
        >
          {!loading ? t(isSignInForm ? 'sign_in' : 'sign_up') : <LoaderCircle className="animate-spin" />}
        </Button>
      </form>
      <p className="mt-2 text-sm text-gray-600">
        {t(isSignInForm ? 'no_account' : 'already_account')}{' '}
        <Link
          className="cursor-pointer bg-transparent font-bold text-blue-500 hover:underline"
          href={`/account?page=${!isSignInForm ? 'sign-in' : 'sign-up'}`}
        >
          {t(!isSignInForm ? 'sign_in' : 'sign_up')}
        </Link>
      </p>
    </Form>
  );
}

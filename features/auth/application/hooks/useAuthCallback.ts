'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { authAtom } from '../atoms/authAtom';
import { authApi } from '../../infrastructure/api/authApi';

export function useAuthCallback() {
  const [, setAuthState] = useAtom(authAtom);
  const router = useRouter();

  useEffect(() => {
    setAuthState({ status: 'LOADING' });

    authApi
      .fetchMe()
      .then((result) => {
        if (!result) {
          setAuthState({ status: 'UNAUTHENTICATED' });
          router.replace('/login');
          return;
        }
        const { user, is_registered } = result;
        if (!is_registered) {
          setAuthState({ status: 'TEMPORARY_AUTH', user });
          router.replace('/terms');
        } else {
          setAuthState({ status: 'AUTHENTICATED', user });
          router.replace('/');
        }
      })
      .catch(() => {
        setAuthState({ status: 'UNAUTHENTICATED' });
        router.replace('/login');
      });
  }, [setAuthState, router]);
}

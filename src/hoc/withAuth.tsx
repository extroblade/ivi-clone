import { useRouter } from 'next/navigation';
import React from 'react';

import { useAppSelector } from '@/hooks';
import { selectAuth } from '@/store';

export const withAuth = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  return (props: T) => {
    const { user } = useAppSelector(selectAuth);
    const router = useRouter();

    if (!user) {
      router.push('/login');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

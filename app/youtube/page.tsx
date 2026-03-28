'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/application/hooks/useAuth';
import { useVideoList } from '@/features/youtube/application/hooks/useVideoList';
import VideoList from '@/features/youtube/ui/components/VideoList';
import { videoFeedPageStyles as s } from '@/features/youtube/ui/videoFeedPageStyles';

export default function YoutubePage() {
  const { authState } = useAuth();
  const { state, page, setPage } = useVideoList();
  const router = useRouter();

  useEffect(() => {
    if (authState.status === 'UNAUTHENTICATED') {
      router.replace('/login');
    }
  }, [authState.status, router]);

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.header}>
          <h1 className={s.title}>주식 종목 영상</h1>
        </div>
        <VideoList state={state} page={page} onPageChange={setPage} />
      </div>
    </div>
  );
}

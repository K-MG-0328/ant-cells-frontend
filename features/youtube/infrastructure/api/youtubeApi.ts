import { httpClient } from '@/infrastructure/http/httpClient';
import { VideoListResponse } from '../../domain/model/videoListResponse';

export const youtubeApi = {
  getList: (page: number, size: number) =>
    httpClient.get<VideoListResponse>(`/youtube/list?page=${page}&size=${size}`),
};

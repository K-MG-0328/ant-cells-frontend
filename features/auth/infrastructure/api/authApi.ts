import { httpClient } from '@/infrastructure/http/httpClient';
import { env } from '@/infrastructure/config/env';
import { AuthUser } from '../../domain/model/authUser';

export interface MeResponse {
  user: AuthUser;
  is_registered: boolean;
}

export const authApi = {
  getKakaoOAuthUrl: (): string =>
    `${env.apiBaseUrl}${env.kakaoLoginPath}`,

  fetchMe: () =>
    httpClient.get<MeResponse>('/authentication/me'),
};

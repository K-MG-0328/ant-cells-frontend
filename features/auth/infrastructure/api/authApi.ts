import { env } from '@/infrastructure/config/env';
import { AuthUser } from '../../domain/model/authUser';

export interface MeResponse {
  user: AuthUser;
  is_registered: boolean;
}

export const authApi = {
  getKakaoOAuthUrl: (): string =>
    `${env.apiBaseUrl}${env.kakaoLoginPath}`,

  fetchMe: async (): Promise<MeResponse> => {
    const response = await fetch(`${env.apiBaseUrl}/authentication/me`, {
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }
    return response.json();
  },
};

import {PushApplication} from '@aerogear/unifiedpush-admin-client';
import {findApplicationsMock} from './find-app-mock';

export const deleteApplicationMock = jest.fn(
  (filter: Record<string, string>): PushApplication[] => {
    return findApplicationsMock(filter);
  }
);

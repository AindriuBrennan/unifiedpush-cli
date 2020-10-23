import {PushApplication} from '@aerogear/unifiedpush-admin-client';

export const createApplicationMock = (name: string) => ({
  execute: async (): Promise<PushApplication> => ({
    pushApplicationID: 'new-app-push-id',
    name,
    masterSecret: 'Shhhhhhh!',
    developer: 'Test Developer 1',
  }),
});

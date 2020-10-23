import {Variant} from '@aerogear/unifiedpush-admin-client';
import {findVariantsMock} from './find-mock';

export const deleteVariantsMock = jest.fn(
  (appId: string, filter: Record<string, string>): Variant[] => {
    return findVariantsMock(appId, filter);
  }
);

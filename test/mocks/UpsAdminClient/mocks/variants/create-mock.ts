import {Variant} from '@aerogear/unifiedpush-admin-client';

export const createVariantsMock = jest.fn(
  (appId: string, def: Record<string, string>): Variant =>
    ({...def, variantID: 'TEST-ID', developer: 'TEST-DEVELOPER'} as Variant)
);

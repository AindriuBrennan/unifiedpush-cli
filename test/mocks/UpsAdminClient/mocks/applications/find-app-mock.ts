import {PushApplication} from '@aerogear/unifiedpush-admin-client';
import {utils} from '../../../../utils/Utils';
import {mockData} from '../../../../mockData';

export const findApplicationsMock = jest.fn(
  ({
    filter,
    page,
  }: {
    filter?: PushApplication;
    page?: number;
  }): PushApplication[] => utils.applyPushApplicationFilter(mockData, filter)
);

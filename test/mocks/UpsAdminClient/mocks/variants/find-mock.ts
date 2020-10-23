import {Variant} from '@aerogear/unifiedpush-admin-client';
import {utils} from '../../../../utils/Utils';
import {mockData} from '../../../../mockData';

export const findVariantsMock = jest.fn(
  (appId: string, filter?: Record<string, string>): Variant[] =>
    utils.applyVariantFilter(
      mockData.find(app => app.pushApplicationID === appId)!.variants!,
      filter
    ) || []
);

import {
  PushApplication,
  Variant,
  PushApplicationFilter,
} from '@aerogear/unifiedpush-admin-client';
import {mockData} from '../mockData';
import {utils} from '../utils/Utils';
import {VariantFilter} from '@aerogear/unifiedpush-admin-client/dist/src/commands/variants/Variant';
import mock = jest.mock;

const findApplicationsMock = jest.fn(
  ({
    filter,
    page,
  }: {
    filter?: PushApplication;
    page?: number;
  }): PushApplication[] => utils.applyPushApplicationFilter(mockData, filter)
);

const createApplicationMock = jest.fn(
  (name: string): PushApplication => {
    return {
      id: 'new-app-id',
      pushApplicationID: 'new-app-push-id',
      name,
      masterSecret: 'Shhhhhhh!',
      developer: 'Test Developer 1',
    } as PushApplication;
  }
);

const deleteApplicationMock = jest.fn(
  (filter: Record<string, string>): PushApplication[] => {
    return findApplicationsMock(filter);
  }
);

const findVariantsMock = jest.fn(
  (appId: string, filter?: Record<string, string>): Variant[] =>
    utils.applyVariantFilter(
      mockData.find(app => app.pushApplicationID === appId)!.variants!,
      filter
    ) || []
);
const createVariantsMock = jest.fn(
  (appId: string, def: Record<string, string>): Variant =>
    ({...def, variantID: 'TEST-ID', developer: 'TEST-DEVELOPER'} as Variant)
);

const deleteVariantsMock = jest.fn(
  (appId: string, filter: Record<string, string>): Variant[] => {
    return findVariantsMock(appId, filter);
  }
);

// tslint:disable-next-line:variable-name
export const AdminClientMock = {
  applications: {
    find: findApplicationsMock,
    create: createApplicationMock,
    delete: deleteApplicationMock,
  },
  variants: {
    find: findVariantsMock,
    create: createVariantsMock,
    delete: deleteVariantsMock,
  },
};

function init() {
  return AdminClientMock;
}

function mockClear() {
  findApplicationsMock.mockClear();
  findVariantsMock.mockClear();
  createVariantsMock.mockClear();
  createApplicationMock.mockClear();
}

// tslint:disable-next-line:variable-name
export const UnifiedPushAdminClientMock = {
  init,
  mockClear,
};

jest.mock('@aerogear/unifiedpush-admin-client', () => {
  return {
    UnifiedPushAdminClient: UnifiedPushAdminClientMock.init,
  };
});

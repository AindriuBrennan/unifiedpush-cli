import {
  createApplicationMock,
  findApplicationsMock,
  deleteApplicationMock,
  findVariantsMock,
  createVariantsMock,
  deleteVariantsMock,
} from './mocks';

function mockClear() {
  findApplicationsMock.mockClear();
  findVariantsMock.mockClear();
  createVariantsMock.mockClear();
  deleteApplicationMock.mockClear();
  deleteVariantsMock.mockClear();
}

// tslint:disable-next-line:variable-name
export const UnifiedPushAdminClientMock = {
  mockClear,
};

jest.mock('@aerogear/unifiedpush-admin-client', () => {
  return {
    UpsAdminClient: jest.fn().mockImplementation(() => {
      return {
        applications: {
          create: createApplicationMock,
        },
      };
    }),
  };
});

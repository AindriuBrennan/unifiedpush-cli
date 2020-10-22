/* eslint-disable @typescript-eslint/ban-ts-ignore */
import {Arguments} from 'yargs';
import {UnifiedPushAdminClientMock, ConsoleMock} from '../../mocks';
import {handler} from '../../../src/cmds/app-cmds/delete';
import * as inquirer from 'inquirer';

jest.mock('inquirer', () => ({
  prompt: jest
    .fn()
    .mockReturnValueOnce({confirm: true})
    .mockReturnValue({confirm: false}),
}));

beforeEach(() => {
  ConsoleMock.init();
  //Clear all instances and calls to constructor and all methods:
  UnifiedPushAdminClientMock.mockClear();
  ConsoleMock.mockClear();
  const promptMock = (inquirer.prompt as unknown) as jest.Mock<
    typeof inquirer.prompt
  >;
  promptMock.mockClear();
});

afterEach(() => {
  ConsoleMock.uninstall();
});

describe('Delete Application', () => {
  it('Should delete all applications from UPS', async () => {
    // @ts-ignore
    await handler({
      url: 'http://localhost:9999',
      appId: [''],
      _: [''],
      $0: '',
    } as Arguments);
    expect(ConsoleMock.log).toHaveBeenCalled();
    expect(ConsoleMock.log).toHaveBeenCalledWith('All applications deleted');
  });

  it('Should fail deletion', async () => {
    // @ts-ignore
    await handler({
      url: 'http://localhost:9999',
      appId: [''],
      _: [''],
      $0: '',
    } as Arguments);
    expect(ConsoleMock.log).not.toHaveBeenCalled();
  });
});

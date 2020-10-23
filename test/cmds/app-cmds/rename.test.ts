import {Arguments} from 'yargs';
import {UnifiedPushAdminClientMock, ConsoleMock} from '../../mocks';
import {handler} from '../../../src/cmds/app-cmds/rename';
import * as inquirer from 'inquirer';

jest.mock('inquirer', () => ({
  prompt: jest
    .fn()
    .mockReturnValueOnce({confirm: true})
    .mockReturnValue({confirm: false}),
}));

beforeEach(() => {
  ConsoleMock.init();
  // Clear all instances and calls to constructor and all methods:
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

describe('Rename Application', () => {
  it('Should rename a specified Application', async () => {
    await handler({
      url: 'http://localhost:9999',
      appId: '2:2',
      name: 'NewName',
      _: [] as string[],
      $0: '',
    });
    expect(ConsoleMock.log).toHaveBeenCalled();
    expect(ConsoleMock.log).toHaveBeenCalledWith(
      'Application renamed successfully'
    );
  });
});

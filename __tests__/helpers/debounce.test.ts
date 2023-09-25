import { debounce } from '@/shared/helpers/debounce';

jest.useFakeTimers();

describe('remaining amount', () => {
  let func: jest.Mock;
  let debouncedFunc: () => any;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });
  it('should be called once', async () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }

    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
});

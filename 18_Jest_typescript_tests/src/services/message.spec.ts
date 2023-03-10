import { Message } from './message';

const createSut = () => {
  return new Message();
};

describe('Message', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('test')).toBe(undefined);
  });

  it('should call console.log one', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Mensagem enviada:"', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'test');
  });
});

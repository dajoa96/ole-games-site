import { SafeIframeUrlPipe } from './safe-iframe-url.pipe';

describe('SafeIframeUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeIframeUrlPipe();
    expect(pipe).toBeTruthy();
  });
});

import { TwitterTimePipe } from './twitter-time.pipe';

describe('TwitterTimePipe', () => {
  it('create an instance', () => {
    const pipe = new TwitterTimePipe();
    expect(pipe).toBeTruthy();
  });
});

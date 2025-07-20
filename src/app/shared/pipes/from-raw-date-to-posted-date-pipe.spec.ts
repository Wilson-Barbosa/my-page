import { FromRawDateToPostedDatePipe } from './from-raw-date-to-posted-date-pipe';

describe('FromRawDateToPostedDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FromRawDateToPostedDatePipe();
    expect(pipe).toBeTruthy();
  });
});

import { formatRating } from './util-formatters';

describe('utilFormatters', () => {
  it('should work', () => {
    expect(formatRating(1.999)).toEqual('2.00');
  });
});

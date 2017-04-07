/* eslint-env jest */

const getDisplayName = require('../');

describe('getDisplayName', () => {
  it('should return argument', () => {
    expect(getDisplayName('test')).toBe('test');
  });
});

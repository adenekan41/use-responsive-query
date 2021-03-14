import useResponsiveQuery from '../src/use-responsive-query';

/**
 * Use Responsive Query
 */
describe('Use Responsive Query', () => {
  it('works if true is truthy', () => {
    const isLarge = useResponsiveQuery('(max-width: 778px)');
    expect(true).toBeTruthy();
  });
});

/* -------------------------------------------------------------------------- */
/*                            External Depednecies                            */
/* -------------------------------------------------------------------------- */

import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

/* -------------------------- Internal Dependencie -------------------------- */
import useResponsiveQuery from '../src/use-responsive-query';

/**
 * Use Responsive Query
 */
let container: any = null;
describe('Use Responsive Query', () => {
  beforeEach(() => {
    window.matchMedia = jest.fn();
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('works if window match media is truthy', async () => {
    await act(async () => {
      render(useResponsiveQuery('md'), container);
    });
    expect(window.matchMedia).toBeCalled();
  });
});

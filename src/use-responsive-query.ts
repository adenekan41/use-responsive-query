/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { useState, useEffect, useRef } from 'react';
import isEqual from 'lodash.isequal';

type MediaQueryOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ReturnType = boolean | Error;

const queryConfig: object = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

/**
 * A utility function to Check if a set of strings is a valid query.
 * @param queryString
 * @returns {Boolean}
 */
export const queryCheck = (queryString: string): boolean => {
  const queryRegex = /(^\(.*\))/;
  return queryRegex.test(queryString);
};

const useResponsiveQuery = (
  query: MediaQueryOptions | string,
  config: object = queryConfig
): ReturnType => {
  const [matches, setMatches] = useState<boolean>(false);
  const parsedQuery = useRef<string | null>(null);

  /**
   * Check if query is valid and user passed the correct variable
   */
  useEffect(() => {
    const checkConfigMatch = Object.keys(config).includes(query?.trim());

    /**
     * Check if the configuration options is not equal to the initals
     * and we have a missing body
     */
    if (!isEqual(queryConfig, config) && !checkConfigMatch) {
      throw new Error(
        `⚠️ [UseResponsiveQuery]: You need to pass your configurations in this format {${Object.keys(
          queryConfig
        ).join()}}`
      );
    }

    /**
     * Check if the set of query is not a media match
     * type of string
     */
    if (!queryCheck(query) && !checkConfigMatch) {
      throw new Error(
        `⚠️ [UseResponsiveQuery]: You need to pass a valid media query argument e.g (min-width: 990px) or pass a query config like ${Object.keys(
          queryConfig
        ).join()}`
      );
    }

    /**
     * Check if the AddListner event can add an even listner if not use the
     * deprecated method for other browsers
     */
    if (checkConfigMatch) {
      parsedQuery.current = `(max-width: ${
        config[query as keyof typeof config]
      })`;
    } else {
      parsedQuery.current = query;
    }

    const media: MediaQueryList = window.matchMedia(parsedQuery.current);
    const listener = (): void => setMatches(media.matches);

    if (media.matches !== matches) setMatches(media.matches);

    /**
     * Check if the AddListner event can add an even listner if not use the
     * deprecated method for other browsers
     */
    if (media.addEventListener) {
      media.addEventListener(`change`, listener);
      return () => media.removeEventListener(`change`, listener);
    }
    // Deprecated 'MediaQueryList' API, <Safari 14, IE, <Edge 16
    else {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query, config, setMatches]);

  return matches;
};

export default useResponsiveQuery;

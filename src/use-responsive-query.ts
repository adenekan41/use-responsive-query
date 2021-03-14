/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { useState, useEffect, useRef } from 'react';

type MediaQueryOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ReturnType = boolean | Error;

interface QueryConfigs {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const QueryConfig = {
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
  config: QueryConfigs = QueryConfig
): ReturnType => {
  const [matches, setMatches] = useState<boolean>(false);
  const parsedQuery = useRef<string | null>(null);
  /**
   * Check if query is valid and user passed the correct variable
   */
  useEffect(() => {
    /**
     * Check if the set of query is not a media match
     * type of string
     */
    if (!queryCheck(query) && !Object.keys(config).includes(query?.trim())) {
      throw new Error(
        `⚠️ [UseResponsiveQuery]: You need to pass a valid media query argument e.g (min-width: 990px) or pass a query config like ${Object.keys(
          config
        ).join()}`
      );
    }

    if (Object.keys(config).includes(query?.trim())) {
      parsedQuery.current = `(max-width: ${
        config[query as keyof typeof config]
      })`;
    } else {
      parsedQuery.current = query;
    }

    const media: MediaQueryList = window.matchMedia(parsedQuery.current);

    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addEventListener('change', () => listener);
    return () => media.removeEventListener('change', () => listener);
  }, [matches, query]);

  return matches;
};

export default useResponsiveQuery;

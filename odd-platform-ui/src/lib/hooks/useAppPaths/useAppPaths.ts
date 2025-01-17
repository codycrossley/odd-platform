import React from 'react';
import { useIsEmbeddedPath } from './useIsEmbeddedPath';
import { useTermsPaths } from './useTermsPaths';
import { useDataEntityPaths } from './useDataEntityPaths';
import {
  BaseRoutes,
  ActivityRoutes,
  SearchRoutes,
  AlertsRoutes,
  ManagementRoutes,
  TermsRoutes,
  DataEntityRoutes,
} from './shared';

const useAppPaths = () => {
  const { updatePath, isPathEmbedded } = useIsEmbeddedPath();
  const termsPaths = useTermsPaths();
  const dataEntityPaths = useDataEntityPaths();

  const getNonExactPath = (path: string) => updatePath(`${path}/*`);
  const getNonExactParamPath = (path: string) => `${path}/*`;

  const basePath = updatePath('');

  // search
  const baseSearchPath = () => `${SearchRoutes.search}`;
  const searchPath = (searchId: string = SearchRoutes.searchIdParam) =>
    updatePath(`${baseSearchPath()}/${searchId}`);

  // Activity
  const activityPath = (query?: string) =>
    updatePath(`${ActivityRoutes.activity}${query ? `?${query}` : ''}`);

  // Management
  const integrationPath = (integrationId: string) =>
    updatePath(
      `${ManagementRoutes.management}/${ManagementRoutes.integrations}/${integrationId}`
    );

  return React.useMemo(
    () => ({
      isPathEmbedded,
      BaseRoutes,
      ActivityRoutes,
      SearchRoutes,
      AlertsRoutes,
      ManagementRoutes,
      TermsRoutes,
      DataEntityRoutes,
      basePath,
      updatePath,
      getNonExactPath,
      getNonExactParamPath,
      searchPath,
      activityPath,
      integrationPath,
      ...termsPaths,
      ...dataEntityPaths,
    }),
    [isPathEmbedded, termsPaths, dataEntityPaths]
  );
};

export default useAppPaths;

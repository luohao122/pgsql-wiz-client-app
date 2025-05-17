import { Suspense, type FC } from "react";
import { useRoutes, type RouteObject } from "react-router-dom";

import Landing from "./features/landing/landing";
import ProtectedRoute from "./shared/components/protected-route";
import Datasource from "./features/datasources/datasource";

import Dashboard from "./features/dashboard/dashboard";
import Charts from "./features/charts/charts";
import ChartCreation from "./features/charts/chart-creation";

const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <Suspense>
          <Landing />
        </Suspense>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <Suspense>
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: "/datasources",
      element: (
        <Suspense>
          <ProtectedRoute>
            <Datasource />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: "/charts",
      element: (
        <Suspense>
          <ProtectedRoute>
            <Charts />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: "/charts/create",
      element: (
        <Suspense>
          <ProtectedRoute>
            <ChartCreation />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: "/charts/edit/:chartId",
      element: (
        <Suspense>
          <ProtectedRoute>
            <ChartCreation />
          </ProtectedRoute>
        </Suspense>
      ),
    },
  ];

  return useRoutes(routes);
};

export default AppRouter;

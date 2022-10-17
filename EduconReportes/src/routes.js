import { useRoutes, Navigate } from 'react-router-dom';
// import { DashboardTheme } from './components/DashboardTheme';
import { DashboardLayout } from './components/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { EstatusIngreso } from './pages/EstausIngreso';
// import { RecuperaPassword } from './pages/RecuperaPassword';

export const Router = () =>
  useRoutes([
    {
      path: '/',
      element: <Navigate to="/app/estatusIngreso" />
      // children: [
      //     { path: "/", element: <Navigate to="/ordenes" replace /> },
      //     { path: "ordenes", element: <Orders /> },
      //     { path: "usuarios", element: <Usuarios />},
      //     { path: "almacenes", element: <Almacenes />},
      // ]
    },
    {
      path: 'app',
      element: <DashboardLayout />,
      children: [
        { path: 'estatusIngreso', element: <EstatusIngreso /> },
        { path: 'dashboard', element: <Dashboard /> }
      ]
    }
  ]);

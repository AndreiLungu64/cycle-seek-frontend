import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'

import Dashboard from './pages/Dashboard'
import Chart from './pages/Chart'
import Trades from './pages/Trades'
import Navbar from './components/Navbar'

function Layout() {
    return <>
        <Navbar />
        <Outlet />
    </>
}

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <div>404 Not Found</div>,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "/chart", element: <Chart /> },
            { path: "/trades", element: <Trades /> }
        ]
    }
])
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}

export default App



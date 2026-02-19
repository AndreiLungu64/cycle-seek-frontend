import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/Dashboard'
import Charts from './pages/Charts'
import Trades from './pages/Trades'
import Navbar from './components/Navbar'

function Layout() {
    return <>
        <Navbar />
        <Outlet />
    </>
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <div>404 Not Found</div>,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "/chart", element: <Charts /> },
            { path: "/trades", element: <Trades /> }
        ]
    }
])
function App() {
    return <RouterProvider router={router} />
}

export default App



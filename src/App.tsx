import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/Dashboard'
import Chart from './pages/Chart'
import Trades from './pages/Trades'

const router = createBrowserRouter([
    { path: "/", element: <Dashboard />, errorElement: <div>404 Not Found</div> },
    { path: "/chart", element: <Chart /> },
    { path: "/trades", element: <Trades /> }
])
function App() {
    return <RouterProvider router={router} />
}

export default App



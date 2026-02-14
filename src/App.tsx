import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/Dashboard'

const router = createBrowserRouter([
    { path: "/", element: <Dashboard />, errorElement: <div>404 Not Found</div> },
    { path: "/chart", element: <Dashboard /> },
    { path: "/trades", element: <Dashboard /> }
])
function App() {
    return <RouterProvider router={router} />
}

export default App



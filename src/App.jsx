import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    {
        element: <Outlet />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/courses",
                element: <Courses />,
            },
            {
                path: "/courses/:id",
                element: <CourseDetails />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

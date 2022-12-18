import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AddBlog from "../Pages/Dashboard/AddBlog";
import BlogList from "../Pages/Dashboard/BlogList";
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from "../Pages/Main/Home";
import ReadingHistory from "../Pages/Main/ReadingHistory";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reading-history",
        element: <ReadingHistory />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlogList />
      },
      {
        path: "/add-blog",
        element: <AddBlog />
      },
    ],
  }, 
  
]);

export default routes;
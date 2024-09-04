import { createHashRouter } from "react-router-dom";

import Root from "./Root";
import Home from "@/pages/Home";
import ErrorPage from "@/pages/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Home />,
      }
    ],
  },
]);

export default router;

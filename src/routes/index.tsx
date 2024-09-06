import { createHashRouter } from "react-router-dom";

import Root from "./Root";
import Home from "@/pages/Home";
import Sketches from "@/pages/Sketches";
import ErrorPage from "@/pages/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sketches",
        element: <Sketches />
      },
      {
        path: "*",
        element: <Home />
      }
    ],
  },
]);

export default router;

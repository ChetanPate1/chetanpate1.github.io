import { createHashRouter } from "react-router-dom";

import Root from "./Root";
import Home from "@/pages/Home";
import Sketches from "@/pages/Sketches";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import ErrorPage from "@/pages/ErrorPage";
import Tutorial from "@/pages/experiments/Tutorial";

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
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/experience/tutorial",
        element: <Tutorial />
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

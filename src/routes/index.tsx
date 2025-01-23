import { createHashRouter } from "react-router-dom";

import Root from "./Root";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Sketches from "@/pages/Sketches";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Experiments from "@/pages/Experiments";
import Tutorial from "@/pages/experiments/Tutorial";
import CharacterPicker from "@/pages/experiments/CharacterPicker";
import ParallaxCards from '@/pages/experiments/ParallaxCards';
import StripeAnimation from "@/pages/experiments/StripeAnimation";

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
        path: "/experiments",
        element: <Experiments />
      },
      {
        path: "/experiments/tutorial",
        element: <Tutorial />
      },
      {
        path: "/experiments/character-picker",
        element: <CharacterPicker />
      },
      {
        path: "/experiments/parallax-cards",
        element: <ParallaxCards />
      },
      {
        path: '/experiments/stripe-animation',
        element: <StripeAnimation />
      },
      {
        path: "/sketches",
        element: <Sketches />
      },
      {
        path: "*",
        element: <Home />
      }
    ]
  }
]);

export default router;

// Core
import { useState } from 'react';
// Third party
import { RouterProvider } from 'react-router-dom';
// Local
import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

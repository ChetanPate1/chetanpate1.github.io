// Third Party
import { useRouteError } from "react-router-dom";

interface RouteError {
   data: string;
   error: {
      columnNumber: number;
      fileName: string;
      lineNumber: number;
      message: string;
      stack: string;
   };
   internal: boolean;
   status: number;
   statusText: string;
}

const ErrorPage = () => {
   const error = useRouteError() as RouteError;

   return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-4">
         <h1>404</h1>
         <p>{error.statusText || error.error.message}</p>
      </div>
   );
};

export default ErrorPage;
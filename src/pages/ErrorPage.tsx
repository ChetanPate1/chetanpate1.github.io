// Third Party
import { useRouteError } from "react-router-dom";

type ErrorType = {
   statusText: string;
   message: string;
};

const ErrorPage = () => {
   const error: ErrorType = useRouteError();

   return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-4">
         <h1>404</h1>
         <p>{error.statusText || error.message}</p>
      </div>
   );
};

export default ErrorPage;
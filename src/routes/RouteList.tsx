import { useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Albums from "../pages/Albums";
import Photos from "../pages/Photos";
import Display from "../pages/Display";

export const RouteList = () => {
   return useRoutes([
      { path: '*', element: <NotFound /> },
      { path: '/', element: <Albums /> },
      { path: '/photos/', element: <Photos /> },
      { path: '/display/:id', element: <Display /> },
   ])
}
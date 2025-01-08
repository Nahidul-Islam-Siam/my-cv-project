import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    chgildren: [ 
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/shop",
            element: <Home />,
        },
        {
            path: "/product",
            element: <Home />,
        },
        {
            path: "/contact",
            element: <Home />,
        },
       
    ]
        
  },
]);


export default router
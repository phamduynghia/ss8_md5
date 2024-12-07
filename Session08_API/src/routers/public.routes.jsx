import { createBrowserRouter } from "react-router-dom";
import DemoFetchAPI from "../component/DemoFetchAPI";
import Product from "../component/Product";
import ProductDetail from "../component/ProductDetail";
import Login from "../component/Login";
import ListCart from "../component/ListCart";

const publicRouters = createBrowserRouter([
  {
    path: "/",
    element: <DemoFetchAPI />,
    children: [
      {
        path: "/products",
        element: <Product />,
      },
    ],
  },
  {
    path: "/productDetail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <ListCart />,
  },
]);
export default publicRouters;

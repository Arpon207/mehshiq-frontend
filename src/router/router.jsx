import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import Collections from "../pages/Collections/Collections";
import ProductPage from "../pages/ProuductPage/ProductPage";
import Test from "../pages/Test/Test";

const Layout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/collections/:id",
        element: <ProductPage />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

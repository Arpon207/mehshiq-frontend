import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import Collections from "../pages/Collections/Collections";
import ProductPage from "../pages/ProuductPage/ProductPage";
import Test from "../pages/Test/Test";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import Products from "../components/Collections/Products/Products";
import { useEffect } from "react";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  console.log(window.scrollY);
  return (
    <div className="main-layout">
      <nav>
        <Navbar />
      </nav>
      <div className="layout-outlet">
        <Outlet />
      </div>
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
        children: [
          {
            path: "/collections",
            element: <Products />,
          },
          {
            path: "/collections/:category",
            element: <Products />,
          },
        ],
      },
      {
        path: "/collections/:category/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

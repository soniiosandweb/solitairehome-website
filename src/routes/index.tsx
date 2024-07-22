import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import { Property } from "../pages/Property";
import { homePage } from "../constants";
import { Location } from "../pages/Location";
import Privacy from "../pages/Privacy";
import TermsOfUse from "../pages/TermsOfUse";

export const router = createBrowserRouter(
  [
    {
      path: "/home",
      element: <Navigate to="/" replace />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:location",
      element: <Location />,
    },
    {
      path: "/:location/:property",
      element: <Property />,
    },
    {
      path: "/privacy-policy",
      element: <Privacy />,
    },
    {
      path: "/terms-and-conditions",
      element: <TermsOfUse />,
    },
  ],
  {
    basename: homePage, // Set your custom root location here
  }
);

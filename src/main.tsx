import React from "react";
import ReactDOM from "react-dom/client";
import NotFound from "./NotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./style.css";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import LoggIn from "./pages/LoggIn";
import Protected from "./pages/Protected";
import UserProfile from "./pages/UserProfile";
import Layout from "./pages/Layout";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import Signup from "./pages/Signup";
import Step1 from "./pages/step1";
import Step2 from "./pages/step2";
import Step3 from "./pages/step3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,

    children: [
      {
        path: "loggin",
        element: <LoggIn />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "home",
        element: <Home />,
      },
      {
        path: "protected",

        element: <Protected />,
      },
      {
        path: "userprofile/:id",

        element: <UserProfile />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "settings",
            element: <Settings />,
          },

          {
            path: "stats",
            element: <Stats />,
          },
        ],
      },

      {
        path: "signup",
        element: <Signup />,
        children: [
          {
            path: "step1",
            element: <Step1 />,
          },

          {
            path: "step2",
            element: <Step2 />,
          },
          {
            path: "step3",
            element: <Step3 />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./components/home/Home.tsx";
import NavBar from "./components/navbar/NavBar.tsx";
import RegisterForm from "./components/register/Register.tsx";
import Signin from "./components/sign/Signin.tsx";
import { UserProvider } from "./features/context/UserContext.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: NavBar,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
      },
      {
        path: "/contact",
      },
      {
        path: "/docs",
      },
    ],
  },
  {
    path: "/sign-in",
    Component: Signin,
  },
  {
    path: "/register",
    Component: RegisterForm,
  },
]);

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>,
);

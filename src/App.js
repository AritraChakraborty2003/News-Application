import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Search />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

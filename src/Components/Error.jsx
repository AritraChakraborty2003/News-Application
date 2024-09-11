import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center space-y-5">
      <h1 className="text-[10vmin] font-bold">Oops!!!</h1>
      <h2 className="text-[8vmin] font-bold">Something went wrong...</h2>
      <h3 className="text-[7vmin] font-bold">
        {err.status}&nbsp;:&nbsp;{err.statusText}
      </h3>
    </div>
  );
};

export default Error;

import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const Error = useRouteError();

  return (
    <div>
      <h1>
        {Error.statusText} {Error.status}
      </h1>
      <h1>{Error.error.message}</h1>
    </div>
  );
};

export default Error;

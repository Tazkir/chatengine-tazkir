import React, { useEffect } from "react";
import Router from "next/router";

const RedirectDMs = () => {
  useEffect(() => {
    Router.push("/docs/react/v1/context_api");
  }, []);

  return <div />;
};

export default RedirectDMs;

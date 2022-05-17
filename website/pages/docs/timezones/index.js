import React, { useEffect } from "react";
import Router from "next/router";

const RedirectDMs = () => {
  useEffect(() => {
    Router.push("/docs/react/v1/timezones");
  }, []);

  return <div />;
};

export default RedirectDMs;

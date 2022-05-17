import React, { useEffect } from "react";
import Router from "next/router";

const RedirectDMs = () => {
  useEffect(() => {
    Router.push("/docs/react/v1/customize_ui/components");
  }, []);

  return <div />;
};

export default RedirectDMs;

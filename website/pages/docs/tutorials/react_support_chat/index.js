import React, { useEffect } from "react";
import Router from "next/router";

const RedirectDMs = () => {
  useEffect(() => {
    Router.push("/docs/react/v1/tutorials/react_support_chat");
  }, []);

  return <div />;
};

export default RedirectDMs;

import React, { useEffect } from "react";
import Router from "next/router";

const RedirectDMs = () => {
  useEffect(() => {
    Router.push("/docs/react/v1/tutorials/nextjs_chat_app");
  }, []);

  return <div />;
};

export default RedirectDMs;

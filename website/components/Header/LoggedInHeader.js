import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { logout } from "../../actions/Accounts";

import AccountModal from "../AccountModal";

import { useRouter } from "next/router";

import Demo from "../Demo";

import { Menu } from "antd";

const LoggedInHeader = (props) => {
  const router = useRouter();
  const didMountRef = useRef(false);
  const [current, setCurrent] = useState(
    window.location.pathname.split("/")[1]
  );

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      setInterval(() => {
        setCurrent(window.location.pathname.split("/")[1]);
      }, 1000);
    }
  });

  return (
    <div>
      <Menu
        style={{ height: "64px", lineHeight: "64px" }}
        selectedKeys={[current]}
        theme="dark"
        mode="horizontal"
      >
        <Menu.Item
          key="home"
          onClick={() => {
            router.push(`/`);
            setCurrent("home");
          }}
          style={{ marginLeft: "12px" }}
        >
          <img
            alt="chat-engine-logo"
            src="https://chat-engine-assets.s3.amazonaws.com/temp-logo-min.png"
            style={{
              height: "40px",
              cursor: "pointer",
              float: "left",
              position: "relative",
              top: "10px",
            }}
          />

          <div
            style={{
              color: "white",
              cursor: "pointer",
              fontSize: "18px",
              display: "inline-block",
              paddingLeft: "12px",
              position: "relative",
              top: "2px",
              float: "left",
            }}
          >
            Chat Engine
          </div>
        </Menu.Item>

        <Menu.Item
          key="pricing"
          style={{ position: "absolute", right: "373px" }}
          onClick={() => {
            router.push(`/pricing`);
            setCurrent("pricing");
          }}
        >
          Pricing
        </Menu.Item>

        <Menu.Item
          key="docs"
          style={{ position: "absolute", right: "301px" }}
          onClick={() => {
            router.push(`/docs`);
            setCurrent("docs");
          }}
        >
          Docs
        </Menu.Item>

        <Menu.Item
          key="projects"
          style={{ position: "absolute", right: "188px" }}
          onClick={() => {
            router.push(`/projects`);
            setCurrent("projects");
          }}
        >
          My Projects
        </Menu.Item>

        <Menu.Item
          key="account"
          style={{ position: "absolute", right: "96px" }}
        >
          <AccountModal />
        </Menu.Item>

        <Menu.Item
          key="logout"
          id="logout-tab"
          style={{ position: "absolute", right: "0px" }}
          onClick={() => {
            props.logout(() => {});
            setCurrent("logout");
          }}
        >
          Sign Out
        </Menu.Item>
      </Menu>

      <div style={{ position: "absolute", right: "472px", top: "19px" }}>
        <Demo />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { accounts: state.accounts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHeader);

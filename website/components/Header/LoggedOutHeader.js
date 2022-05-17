import React from "react";

import { LogInModal, SignUpModal } from "../Auth";

import { Row, Col, Button, Menu, Dropdown } from "antd";

import { MenuOutlined } from "@ant-design/icons";

import { useRouter } from "next/router";

import Demo from "../Demo";

const LoggedOutHeader = (props) => {
  const router = useRouter();

  function renderMenu() {
    return (
      <div>
        <Menu>
          <Menu.Item>
            <LogInModal />
          </Menu.Item>

          <Menu.Item>
            <SignUpModal />
          </Menu.Item>

          <Menu.Item onClick={() => router.push("/pricing")}>Pricing</Menu.Item>

          <Menu.Item onClick={() => router.push("/docs")}>Docs</Menu.Item>

          <Menu.Item>
            <Demo />
          </Menu.Item>
        </Menu>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "88px",
        backgroundColor: "#2f54eb",
        width: "100%",
        position: "relative",
      }}
    >
      <Row style={{ height: "88px" }}>
        <Col xs={1} sm={3} />

        <Col xs={22} sm={0}>
          <div style={{ width: "100%", paddingTop: "18px" }}>
            <img
              alt="chat-engine-logo"
              onClick={() => router.push(`/`)}
              src="https://chat-engine-assets.s3.amazonaws.com/temp-logo-min.png"
              style={{
                height: "44px",
                paddingRight: "12px",
                marginBottom: "18px",
                cursor: "pointer",
              }}
            />

            <div
              onClick={() => router.push(`/`)}
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
                display: "inline-block",
              }}
            >
              Chat Engine
            </div>

            <div
              style={{
                color: "white",
                float: "right",
                cursor: "pointer",
                fontSize: "18px",
                paddingTop: "14px",
              }}
            >
              <Dropdown overlay={renderMenu()} placement="bottomRight">
                <Button
                  style={{
                    backgroundColor: "rgb(47, 84, 235)",
                    border: "1px solid rgb(47, 84, 235)",
                    color: "white",
                  }}
                >
                  <MenuOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
        </Col>

        <Col xs={0} sm={18}>
          <div style={{ width: "100%", paddingTop: "18px" }}>
            <img
              alt="chat-engine-logo"
              onClick={() => router.push(`/`)}
              src="https://chat-engine-assets.s3.amazonaws.com/temp-logo-min.png"
              style={{
                height: "44px",
                paddingRight: "12px",
                marginBottom: "18px",
                cursor: "pointer",
              }}
            />

            <div
              onClick={() => router.push(`/`)}
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
                display: "inline-block",
              }}
            >
              Chat Engine
            </div>

            <div
              style={{
                color: "white",
                float: "right",
                cursor: "pointer",
                fontSize: "18px",
                paddingTop: "14px",
              }}
            >
              <SignUpModal />
            </div>

            <div
              style={{
                color: "white",
                float: "right",
                cursor: "pointer",
                fontSize: "18px",
                paddingTop: "14px",
                position: "relative",
                right: "24px",
              }}
            >
              <LogInModal />
            </div>

            <div
              onClick={() => router.push("/pricing")}
              style={{
                color: "white",
                float: "right",
                cursor: "pointer",
                fontSize: "18px",
                paddingTop: "14px",
                position: "relative",
                right: "48px",
              }}
            >
              Pricing
            </div>

            <div
              onClick={() => router.push("/docs")}
              style={{
                color: "white",
                float: "right",
                cursor: "pointer",
                fontSize: "18px",
                paddingTop: "14px",
                position: "relative",
                right: "72px",
              }}
            >
              Docs
            </div>

            <div style={{ position: "absolute", right: "306px", top: "33px" }}>
              <Demo />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoggedOutHeader;

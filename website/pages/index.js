import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Footer from "../components/Footer";

import { Row, Col, Button, Carousel } from "antd";

import { CodeBlock, dracula } from "react-code-blocks";

import {
  ApiOutlined,
  BookOutlined,
  CloudServerOutlined,
  CommentOutlined,
  DollarCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

export default function Home() {
  return (
    <div id="home-section">
      <Head>
        <title>Chat Engine | Simple APIs & UI Kits</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Chat Engine gives you free, easy NPM components and APIs for your website or app. Build in minutes not days!"
        />
      </Head>

      <Row
        style={{
          paddingTop: "6vw",
          paddingBottom: "10vw",
          backgroundColor: "#2f54eb",
        }}
      >
        <Col xs={1} sm={3} />

        <Col xs={22} sm={18}>
          <h1
            style={{
              color: "white",
              fontSize: "52px",
              fontWeight: "600",
              maxWidth: "700px",
            }}
          >
            The #1 Chat Tool for Freelancers and Startups
          </h1>

          <div style={{ paddingBottom: "24px", maxWidth: "550px" }}>
            <h2 style={{ color: "white" }}>
              <i>Developer friendly</i> 👨‍💻 Easy to understand, great tutorials,
              demos, and docs.
            </h2>
            <br />
            <h2 style={{ color: "white" }}>
              <i>Cheap, fair pricing</i> 💰 It's free forever, with simple and
              small upgrades.
            </h2>
          </div>

          <Button
            size="large"
            onClick={() => window.open("/docs/getting_started")}
            style={{
              border: "1px solid white",
              color: "#2f54eb",
              marginTop: "2px",
              marginRight: "12px",
            }}
          >
            Documentation
          </Button>

          <Button
            size="large"
            onClick={() =>
              window.open(
                "https://www.youtube.com/playlist?list=PLGbbmLEXc-6q38wDrv5TZO6VsVqMteazX"
              )
            }
            style={{
              backgroundColor: "#2f54eb",
              border: "1px solid white",
              color: "white",
              marginTop: "2px",
            }}
          >
            Project Tutorials
          </Button>
        </Col>

        <Col xs={1} sm={3} />
      </Row>

      <Row style={{ paddingTop: "148px", paddingBottom: "124px" }}>
        <Col xs={1} sm={3} />

        <Col xs={22} sm={18}>
          <Row>
            <Col
              xs={24}
              sm={11}
              style={{ textAlign: "right", paddingRight: "12px" }}
            >
              <h2 style={{ fontSize: "36px" }}>Cool Project Tutorials 🤩</h2>

              <h2 style={{ fontWeight: "300" }}>
                YouTube tutorials will show you how to clone popular chat apps.
                Watch how to recreate <a>Messenger</a>, <a>Microsoft Teams</a>,{" "}
                <a>Intercom</a> and <a>Slack</a>. Like and comment for more!
              </h2>
            </Col>

            <Col
              xs={24}
              sm={13}
              style={{ paddingBottom: "24px", paddingLeft: "12px" }}
            >
              <Carousel autoplay={true}>
                <a href="https://www.youtube.com/watch?v=jcOKU9f86XE&list=PLGbbmLEXc-6q38wDrv5TZO6VsVqMteazX&index=3&t=494s">
                  <Image
                    src="/images/tutorials/team-chat-engine-tutorial-min.png"
                    height={290}
                    width={510}
                    className="tutorial-thumb"
                    alt="teams-chat-engine-tutorial"
                  />
                </a>
                <a href="https://www.youtube.com/watch?v=Bv9Js3QLOLY&list=PLGbbmLEXc-6q38wDrv5TZO6VsVqMteazX&index=2">
                  <Image
                    src="/images/tutorials/messenger-chat-engine-tutorial-min.png"
                    height={290}
                    width={510}
                    className="tutorial-thumb"
                    alt="messenger-chat-engine-tutorial"
                  />
                </a>
                <a href="https://www.youtube.com/watch?v=59pumSluRj4&list=PLGbbmLEXc-6q38wDrv5TZO6VsVqMteazX&index=4">
                  <Image
                    src="/images/tutorials/support-engine-tutorial-min.png"
                    className="tutorial-thumb"
                    height={290}
                    width={510}
                    alt="intercom-chat-engine-tutorial"
                  />
                </a>
                <a href="https://www.youtube.com/watch?v=59pumSluRj4&list=PLGbbmLEXc-6q38wDrv5TZO6VsVqMteazX&index=3">
                  <Image
                    src="/images/tutorials/slack-chat-engine-tutorial-min.png"
                    height={290}
                    width={510}
                    className="tutorial-thumb"
                    alt="slack-chat-engine-tutorial"
                  />
                </a>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        style={{
          paddingTop: "124px",
          paddingBottom: "124px",
          backgroundColor: "rgb(47, 84, 235)",
        }}
      >
        <Col xs={1} sm={3} />

        <Col xs={22} sm={18}>
          <Row>
            <Col xs={24} style={{ textAlign: "center", paddingRight: "12px" }}>
              <h2 style={{ fontSize: "36px", color: "white" }}>
                Watch or Read the Docs 📚 🍿
              </h2>

              <h2 style={{ fontWeight: "300", color: "white" }}>
                Here we explain all the concepts of Chat Engine.
                <br />
                Engage with us directly in the comments or on our Support Chat!
              </h2>

              <Link href="/docs/getting_started">
                <Button
                  size="large"
                  type="primary"
                  style={{
                    marginTop: "12px",
                    backgroundColor: "rgb(47, 84, 235)",
                    color: "white",
                    border: "1px solid white",
                  }}
                >
                  Documentation
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ paddingTop: "148px", paddingBottom: "124px" }}>
        <Col xs={1} sm={3} />

        <Col xs={22} sm={18}>
          <Row>
            <Col
              xs={24}
              sm={11}
              style={{ textAlign: "right", paddingRight: "12px" }}
            >
              <h2 style={{ fontSize: "36px" }}>Start with 12 lines of code!</h2>

              <h2 style={{ fontWeight: "300" }}>
                Our Docs make it very easy to get start. Just run{" "}
                <span style={styles.codeLine}>yarn add react-chat-engine</span>{" "}
                and pass your <span style={styles.codeLine}>projectID</span>,{" "}
                <span style={styles.codeLine}>userName</span>, and{" "}
                <span style={styles.codeLine}>userSecret</span> as props.
              </h2>

              <Link href="/docs/getting_started">
                <Button
                  size="large"
                  type="primary"
                  style={{ marginTop: "12px" }}
                >
                  Getting Started
                </Button>
              </Link>
            </Col>

            <Col
              xs={24}
              sm={13}
              style={{ paddingBottom: "24px", paddingLeft: "12px" }}
            >
              <CodeBlock
                text={code}
                language="jsx"
                showLineNumbers={true}
                theme={dracula}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <div style={{ backgroundColor: "#2f54eb" }}>
        <Row style={{ padding: "124px 0px 42px 0px" }}>
          <Col xs={1} sm={3} />

          <Col xs={22} sm={18}>
            <h1 style={{ color: "white", paddingBottom: "24px" }}>
              Perfect for any website or app
            </h1>

            <Row>
              <Col xs={24} sm={24} md={8} style={{ paddingBottom: "12px" }}>
                {renderPointer("/docs/customize_ui", "Customizable UI", () => {
                  return (
                    <CommentOutlined
                      style={{
                        fontSize: "55px",
                        marginBottom: "12px",
                        color: "white",
                      }}
                    />
                  );
                })}

                {renderPointer(
                  "/docs/server_rest",
                  "Syncs with your server",
                  () => {
                    return (
                      <ApiOutlined
                        style={{
                          fontSize: "55px",
                          marginBottom: "12px",
                          color: "white",
                        }}
                      />
                    );
                  }
                )}
              </Col>

              <Col xs={24} sm={24} md={8} style={{ paddingBottom: "12px" }}>
                {renderPointer("/docs", "Great Documentation", () => {
                  return (
                    <BookOutlined
                      style={{
                        fontSize: "55px",
                        marginBottom: "12px",
                        color: "white",
                      }}
                    />
                  );
                })}

                <div onClick={() => window.open("https://rest.chatengine.io/")}>
                  {renderPointer("/", "Complete Rest API", () => {
                    return (
                      <CloudServerOutlined
                        style={{
                          fontSize: "55px",
                          marginBottom: "12px",
                          color: "white",
                        }}
                      />
                    );
                  })}
                </div>
              </Col>

              <Col xs={24} sm={24} md={8} style={{ paddingBottom: "12px" }}>
                {renderPointer(
                  "/docs/getting_started",
                  "Quick and easy to add",
                  () => {
                    return (
                      <ClockCircleOutlined
                        style={{
                          fontSize: "55px",
                          marginBottom: "12px",
                          color: "white",
                        }}
                      />
                    );
                  }
                )}

                {renderPointer("/pricing", "Starts free, stays cheap", () => {
                  return (
                    <DollarCircleOutlined
                      style={{
                        fontSize: "55px",
                        marginBottom: "12px",
                        color: "white",
                      }}
                    />
                  );
                })}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  codeLine: {
    padding: "3px",
    fontSize: "16px",
    backgroundColor: "rgba(230, 230, 230, 1)",
    fontFamily: 'Menlo, Monaco, "Courier New", Courier, monospace',
  },
};

const code = `import React from 'react';\nimport { ChatEngine } from 'react-chat-engine';\n\nexport function App() {\n\treturn (\n\t\t<ChatEngine\n\t\t\tprojectID='XXXX-XXX-XXX-XXX-XXXX'\n\t\t\tuserName='adam'\n\t\t\tuserSecret='pass1234'\n\t\t/>\n\t);\n}`;

function renderPointer(link, text, renderIcon) {
  return (
    <div>
      {renderIcon && renderIcon()}

      <h2>
        {link ? (
          <Link href={link}>
            <span
              style={{ fontWeight: "500", color: "white", cursor: "pointer" }}
            >
              {text}
            </span>
          </Link>
        ) : (
          <span>{text}</span>
        )}
      </h2>
    </div>
  );
}

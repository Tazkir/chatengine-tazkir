import React, { Component } from "react";

import { styles } from "../../../_styles";
import DocsLayout from "../_layout";

import { Row, Col } from "antd";

import Link from "next/link";
import Head from "next/head";

import { CodeBlock, dracula } from "react-code-blocks";

const code = `import React from 'react';\nimport { ChatEngine } from 'react-chat-engine';\n\nfunction App() {\n\treturn (\n\t\t<ChatEngine\n\t\t\tprojectID='00000000-0000-0000-0000-000000000000'\n\t\t\tuserName='adam'\n\t\t\tuserSecret='pass1234'\n\t\t/>\n\t);\n}\n\nexport default App;`;

export default class QuickStart extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Quick Start | Chat Engine Docs</title>
          <meta
            name="description"
            content="Get a React Chat experience up and running in minutes with Chat Engine."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Quick Start</h1>

            <h2 style={{ color: "#595959" }}>
              Learn to build a complete group chat app.
            </h2>

            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <div style={styles.body}>What you're building</div>

              <img
                alt="what-chat-engine-will-build"
                src="https://chat-engine-assets.s3.amazonaws.com/what-we-will-build.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body}>
              In this section, we'll show you how to setup your first Chat
              Engine application.
            </div>

            <div style={styles.body}>
              All you need to do is create a project, install a Chat Engine
              component, and declare it in your application.
            </div>

            <div style={styles.title} id="create_project">
              Create a Chat Engine Project
            </div>

            <div style={styles.body}>
              Let’s go to Chat Engine and get your API keys.
            </div>

            <div style={styles.bulletPoint}>
              1. Register at{" "}
              <a
                href="https://chatengine.io"
                onClick={() => this.openLink("https://chatengine.io")}
              >
                chatengine.io
              </a>
            </div>
            <div style={styles.bulletPoint}>
              2. Click "New Project" and add a project title
            </div>
            <div style={styles.bulletPoint}>
              3. Create your first User, I’ll call my user Adam
            </div>
            <div style={styles.bulletPoint}>
              4. Remember the <b>Project ID</b> and the <b>Username + Secret</b>{" "}
              of a user. You will need it later.
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.body}>For Example:</div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/chat-engine-collect-info.png"
              style={{ width: "100%", paddingBottom: "22px" }}
            />

            <div style={styles.title} id="add_to_project">
              Add Chat Engine to your Application
            </div>

            <div style={styles.body}>
              Install Chat Engine to your app by running:
            </div>

            <div style={styles.body}>
              <span style={styles.codeLine}>npm install react-chat-engine</span>{" "}
              or <span style={styles.codeLine}>yarn add react-chat-engine</span>
            </div>

            <div style={styles.body}>
              Add Chat Engine into your app by importing and declaring the{" "}
              <span style={styles.codeLine}>{"<ChatEngine />"}</span> component.
            </div>

            <div style={styles.body}>
              <b>IMPORTANT:</b> Replace{" "}
              <span style={styles.codeLine}>projectID</span> with your Project's
              ID, replace <span style={styles.codeLine}>userName</span> with
              your User’s username, and replace{" "}
              <span style={styles.codeLine}>userSecret</span> with your user’s
              secret.
            </div>

            <CodeBlock
              text={code}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
            />

            <div style={{ height: "22px" }} />

            <div style={styles.body}>
              Add a Chat in the bottom left and BOOM! You have a serverless chat
              app!
            </div>

            <div style={styles.body}>You should see something like this:</div>

            <img
              alt="starter-chat-engine-ui"
              src="https://chat-engine-assets.s3.amazonaws.com/StarterChatEngineUI.png"
              style={{ width: "100%", border: "1px solid #e8e8e8" }}
            />

            <div style={{ height: "22px" }} />

            <div style={styles.title}>Happy chatting!</div>

            <div style={{ height: "56px" }} />
          </Col>

          <Col xs={0} sm={4} md={8} style={styles.docsColumn}>
            <div style={{ paddingLeft: "24px", fontSize: "16px" }}>
              <div>
                <Link
                  href="#create_project"
                  onClick={() => window.location.replace("#create_project")}
                >
                  Create a Chat Engine Project
                </Link>
              </div>
              <div>
                <Link
                  href="#add_to_project"
                  onClick={() => window.location.replace("#add_to_project")}
                >
                  Add Chat Engine to a Project
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

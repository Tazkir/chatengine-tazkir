import React from "react";

import Head from "next/head";

import { Row, Col } from "antd";

import YouTubeBanner from "../../../../_YouTubeBanner";
import DocsLayout from "../../_layout";

const ReactSupportChat = () => {
  return (
    <DocsLayout>
      <Head>
        <title>Support Chat | Chat Engine Docs</title>
        <meta
          name="description"
          content="Build Customer Support for your React website today - with Chat Engine APIs and the SDK."
        />
      </Head>

      <Row>
        <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
          <h1>Build Customer Support with ReactJS</h1>

          <h2 style={{ color: "#595959" }}>
            Put the "custom" in Customer Support 😂{" "}
          </h2>

          <div
            style={{
              padding: "12px",
              backgroundColor: "#e8e8e8",
              paddingBottom: "12px",
              marginBottom: "12px",
            }}
          >
            <div style={styles.body}>
              <b>What we'll be building...</b>
            </div>
            <img
              alt="support-chat-by-chat-engine"
              src="https://camo.githubusercontent.com/1a02f4007a95568cba08586cef8488d4b70dfd204388a4de0358e9d68f0d478d/68747470733a2f2f636861742d656e67696e652d6173736574732e73332e616d617a6f6e6177732e636f6d2f7475746f7269616c732f72656163742d737570706f72742d656e67696e652f737570706f72742d656e67696e652d64656d6f2e676966"
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ height: "32px" }} />

          <div style={styles.body}>
            Let's build this exact Support Chat experience so you can put it
            into your webstite!
          </div>

          <div style={styles.body}>
            You'll learn about React Animations, the Chat Engine framework, and
            more.
          </div>

          <div style={styles.body}>
            I highly recommend watching this YouTube video for understanding 👇
          </div>

          <div style={{ height: "24px" }} />

          <YouTubeBanner
            embedID="59pumSluRj4"
            title="Build Support Chat with YouTube"
            description="This react chat app will focus on customer support and impress users when they visit your website. This React Support Chat tutorial will teach you about React, APIs, Sockets, DOM, Animations, and Chat Engine while you build this project."
          />

          <div style={{ height: "32px" }} />

          <div style={styles.title}>
            <b>NOTE: </b>All the Code is right below 👇👇
          </div>

          <div style={styles.body}>
            For simplicity, I wrote out all the code and broke it up into 7
            steps.
          </div>

          <div style={styles.body}>
            Just in case your get lost, or your code doesn't work.
          </div>

          <div style={styles.body}>Enjoy!</div>

          <div style={styles.title}>1 - Boilerplate Project</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/react-support-engine/tree/1-boilerplate">
              this link here
            </a>{" "}
            to download the project code.
          </div>

          <div style={styles.body}>
            Once downloaded, run <span style={styles.codeLine}>yarn</span> and
            then <span style={styles.codeLine}>yarn start</span>.
          </div>

          <div style={styles.body}>
            Now you should have the starter website up and running.
          </div>

          <div style={styles.title}>2 - Avatar Button</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/react-support-engine/pull/1/files">
              this link here
            </a>{" "}
            to see the code changes for the Avatar implementation.
          </div>

          <div style={styles.body}>
            Now you should have a little Avatar button in the bottom right of
            your website.
          </div>

          <div style={styles.title}>3 - Support Window</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/react-support-engine/pull/2/files">
              this link here
            </a>{" "}
            to see the code changes for the Support Window implementation.
          </div>

          <div style={styles.body}>
            Now you should have the Support Window pop-up every time you click
            the Avatar, and it should hide when you click elsewhere.
          </div>

          <div style={styles.title}>4 - Email Form</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/react-support-engine/pull/3/files">
              this link here
            </a>{" "}
            to see the code changes for the Email form Implementation.
          </div>

          <div style={styles.body}>
            Be sure to run{" "}
            <span style={styles.codeLine}>yarn add @ant-design/icons</span> for
            the needed icons.
          </div>

          <div style={styles.body}>
            Now you should have a pretty email form, where people can enter
            their email address.
          </div>

          <div style={styles.title}>5 - Chat Engine Backend</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/react-support-engine/pull/4files">
              this link here
            </a>{" "}
            to see the code changes for linking Chat Engine's backend to handle
            Users, Chats, and Messages.
          </div>

          <div style={styles.body}>
            Be sure to go to <a href="https://chatengine.io">chatengine.io</a>{" "}
            to create a project, then link the Private-Key in the API header.
          </div>

          <div style={styles.body}>
            Now you should have a hosted backend/chat-server for your Users,
            Chats, and Messages.
          </div>

          <div style={styles.title}>6 - Chat Feed Component</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/react-support-engine/pull/5/files">
              this link here
            </a>{" "}
            to see the code changes for implementing Chat Engine's{" "}
            <span style={styles.codeLine}>{"<ChatFeed />"}</span> component.
          </div>

          <div style={styles.body}>
            Be sure to run{" "}
            <span style={styles.codeLine}>yarn add react-chat-engine</span> too.
          </div>

          <div style={styles.body}>
            Now you should have a pretty Chat Feed thats loads/transitions when
            a user puts in their email address.
          </div>

          <div style={styles.title}>7 - Admin Dashboard Page</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/react-support-engine/pull/6/files">
              this link here
            </a>{" "}
            to see the code changes for implementing Chat Engine's{" "}
            <span style={styles.codeLine}>{"<ChatEngine />"}</span> component
            into the Admin Page.
          </div>

          <div style={styles.body}>
            Be sure to put in your{" "}
            <span style={styles.codeLine}>projectID</span>,{" "}
            <span style={styles.codeLine}>userName</span>, and{" "}
            <span style={styles.codeLine}>userSecret</span> too.
          </div>

          <div style={styles.body}>
            Now you should have an Admin Dashboard where you can interact with
            any support Questions.
          </div>

          <div style={styles.title}>You're done 🎉 </div>

          <div style={styles.body}>
            If you have any questions, requests, or feedback, feel free to leave
            a comment.
          </div>

          <div style={styles.body}>
            Also subscribing / liking the video helps our content efforts a ton
            😃
          </div>

          <div style={styles.body}>
            We hope you enjoyed this content, happy chatting!
          </div>

          <div style={{ height: "56px" }} />
        </Col>
      </Row>
    </DocsLayout>
  );
};

export default ReactSupportChat;

const styles = {
  body: {
    fontSize: "16px",
    paddingBottom: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    paddingBottom: "16px",
  },
  bulletPoint: {
    fontSize: "16px",
    padding: "6px",
  },
  codeLine: {
    padding: "3px",
    fontSize: "14px",
    backgroundColor: "rgba(230, 230, 230, 1)",
    fontFamily: 'Menlo, Monaco, "Courier New", Courier, monospace',
  },
  codeSection: {
    backgroundColor: "rgba(230, 230, 230, 1)",
    fontFamily: 'Menlo, Monaco, "Courier New", Courier, monospace',
    wordWrap: "break-word",
    paddingLeft: "8px",
  },
  docsColumn: {
    padding: "24px 12px",
    maxHeight: "calc(100vh - 88px)",
    overflow: "hidden scroll",
  },
};

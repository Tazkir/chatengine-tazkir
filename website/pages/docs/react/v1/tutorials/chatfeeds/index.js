import React, { Component } from "react";

import { Row, Col } from "antd";

import Link from "next/link";
import Head from "next/head";

import DocsLayout from "../../_layout";

import { CodeBlock, dracula } from "react-code-blocks";

export default class CommunityChatFeed extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Live Chat Feed | Chat Engine Docs</title>
          <meta
            name="description"
            content="Learn how to quickly add a live chat feed to your website with Chat Engine."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Community Chat</h1>

            <h2 style={{ color: "#595959" }}>
              Let users and visitors chat openly.
            </h2>

            <div style={styles.body}>
              Some apps and websites just want free-form communication.
            </div>

            <div style={styles.body}>
              Chat Engine can allow anybody to hop into a chat and start sending
              messages.
            </div>

            <div style={styles.body}>
              This page will show you how to make a free-form chat feed.
            </div>

            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <div style={styles.body}>
                A community chat anybody can hop in on
              </div>

              <img
                alt="what-chat-engine-will-build"
                src="https://chat-engine-assets.s3.amazonaws.com/community-chat-board-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="before_your_begin">
              Before You Begin
            </div>

            <div style={styles.body}>
              I'll assume you have a Chat Engine Account, Project and you've set
              up a <span style={styles.codeLine}>{"<ChatEngine />"}</span> React
              Project.
            </div>

            <div style={styles.body}>
              If not, I recommend you read the{" "}
              <Link href="/docs/getting_started">Getting Started docs</Link>{" "}
              before.
            </div>

            <div style={styles.title} id="create_project">
              Get Chat Auth Info
            </div>

            <div style={styles.body}>
              First, lets go to your project, crate a User and Chat Object.
            </div>

            <div style={styles.body}>
              Then click on Chat Details and get the auth info.
            </div>

            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <div style={styles.body}>Example of Chat Details</div>

              <img
                alt="what-chat-engine-will-build"
                src="https://chat-engine-assets.s3.amazonaws.com/chat-details-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ height: "12px" }} />

            <div style={styles.body}>
              To enter/subscribe-to a chat; you need the <b>Project ID</b>,{" "}
              <b>Chat ID</b>, and <b>Access Key</b>. Then you can send messages
              using a <b>Sender Username</b> alias
            </div>

            <div style={styles.title} id="create_project">
              Create a Chat Socket & Feed
            </div>

            <div style={styles.body}>
              Lets use a Chat Engine Wrapper, Chat Socket, and Chat Feed to send
              messages with a Sender Username.
            </div>

            <CodeBlock
              text={communitChatPage}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
            />

            <div style={{ height: "22px" }} />

            <div style={styles.body}>
              First, the <span style={styles.codeLine}>{"<ChatSocket />"}</span>{" "}
              component needs <span style={styles.codeLine}>projectID</span>,{" "}
              <span style={styles.codeLine}>chatID</span>, and{" "}
              <span style={styles.codeLine}>chatAccessKey</span> to authenticate
              and send with a{" "}
              <span style={styles.codeLine}>senderUsername</span>.
            </div>

            <div style={styles.body}>
              Second, the <span style={styles.codeLine}>{"<ChatFeed />"}</span>{" "}
              just needs the ID of{" "}
              <span style={styles.codeLine}>activeChat</span> to load the
              correct feed.
            </div>

            <div style={styles.body}>
              Last, all Chat Engine components need a{" "}
              <span style={styles.codeLine}>
                {"<ChatEngineWrapper></ChatEngineWrapper>"}
              </span>{" "}
              to work. The wrapper uses React's Context API to link state (like
              auth and connection) across components.
            </div>

            <div style={styles.body}>
              Now you have an open Chat Feed! You may need to restyle some
              stuff. Use the support chat if that's confusing :)
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.title}>Happy chatting!</div>

            <div style={{ height: "56px" }} />
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

const styles = {
  body: {
    fontSize: "16px",
    paddingBottom: "12px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    paddingBottom: "12px",
  },
  bulletPoint: {
    fontSize: "16px",
    padding: "6px",
  },
  codeLine: {
    padding: "3px",
    fontSize: "12px",
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

const communitChatPage = `import React from 'react'

import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'

const HomePage = () => {
    return (
        <ChatEngineWrapper>
            <ChatSocket 
                projectID='00000000-0000-0000-0000-000000000000'
                chatID='123'
                chatAccessKey='ca-00000000-0000-0000-0000-000000000000'
                senderUsername='John Appleseed'
            />

            <ChatFeed activeChat='123' /> 
        </ChatEngineWrapper>
    )
}

export default HomePage`;

import React, { Component } from "react";

import { Row, Col } from "antd";

import { CodeBlock, dracula } from "react-code-blocks";

import Head from "next/head";
import Link from "next/link";

import { DocsLayout } from "../_assets/layout";
import { styles } from "../_assets/styles";
import { ShortCutLink } from "../_assets/shortcuts";
import { Next } from "../_assets/next";

export default class Architecture extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Overview | Chat Engine Docs</title>
          <meta
            name="description"
            content="How Chat Engine works at a high level. Great to get started with!"
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Overview</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              Start at a high-level
            </h2>

            <div style={styles.body}>
              Here, we go over how Chat Engine works as a whole.
            </div>

            <div style={styles.body}>
              All Chat Apps are made of the same four parts
            </div>

            <div style={{ ...{ paddingLeft: 12 }, ...styles.body }}>
              <b>1.</b> Chat UI components to show <br />
              <b>3.</b> Some JavaScript functions for state manegement <br />
              <b>4.</b> A chat server to host chats <br />
              <b>2.</b> A websocket to connect UI and server <br />
            </div>

            <div style={styles.body}>
              (Yes, all apps. WhatsApp, Telegram, Slack and whatever else you
              use!)
            </div>

            <div style={styles.body}>
              In <span style={styles.codeLine}>react-chat-engine-advanced</span>{" "}
              we call these four parts:{" "}
              <b>Components, Sockets, Hooks and Server</b>.
            </div>

            <div style={styles.body}>
              We give you each of them to assemble and customize!
            </div>

            <div style={styles.body}>
              You can see each of them used in this example chat-app here:
            </div>

            <CodeBlock
              text={code}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
            />

            <div style={styles.body}></div>

            <div style={styles.body}>
              Yes, this is all the code you need to make a working Chat App!
            </div>

            <div style={styles.body}>
              In this page, we briefly explain each part, and provide a link to
              their in-depth documentation.
            </div>

            <div style={styles.title} id="server">
              1. Server
            </div>

            <div style={styles.body}>
              Chat Engine Server acts as a complete backend for hosting the chat
              service.
            </div>

            <div style={styles.body}>It can do the following:</div>

            <div style={{ ...{ paddingLeft: 12 }, ...styles.body }}>
              1. Create, Read, Update and Destroy (CRUD) chat data
              <br />
              2. Notify Sockets of new data <br />
              3. Notify other servers of new data (via Webhooks)
            </div>

            <div style={styles.body}>
              You can read more in the Server documentation{" "}
              <Link href="/docs/react/v2/server">here</Link>.
            </div>

            <div style={styles.title} id="hooks">
              2. Hooks
            </div>

            <div style={styles.body}>
              Chat Engine Hooks abstract all the chat-app logic into a single
              function.
            </div>

            <div style={styles.body}>
              Hooks are functions which pass data to Components, Sockets, and
              the Chat Server.
            </div>

            <div style={styles.body}>
              Like when the Socket needs to pass a new Message to Components.
            </div>

            <div style={styles.body}>
              You can read more in the Hooks documentation{" "}
              <Link href="/docs/react/v2/hooks">here</Link>.
            </div>

            <div style={styles.title} id="components">
              3. Components
            </div>

            <div style={styles.body}>
              Chat Engine Components take props, and return UI elements on your
              website.
            </div>

            <div style={styles.body}>
              Additionally, the components have callbacks for when UI events
              occur.
            </div>

            <div style={styles.body}>
              Like when a form is submitted, or a button is clicked.
            </div>

            <div style={styles.body}>
              You can read more in the Components documentation{" "}
              <Link href="/docs/react/v2/components">here</Link>.
            </div>

            <div style={styles.title} id="sockets">
              4. Sockets
            </div>

            <div style={styles.body}>
              Chat Engine Sockets subscribe to the Chat Server, and trigger
              callbacks with new data.
            </div>

            <div style={styles.body}>
              Like when a user gets sent a new message.
            </div>

            <div style={styles.body}>
              You can read more in the Sockets documentation{" "}
              <Link href="/docs/react/v2/sockets">here</Link>.
            </div>

            <div style={styles.title} id="summary">
              Summary
            </div>

            <div style={styles.body}>
              In summary, all Chat Apps are made of four parts. Chat Engine
              gives you these four parts to assemble and customize.
            </div>

            <div style={styles.body}>
              It becomes easy to understand with examples and practice.
            </div>

            <div style={styles.body}>
              Let's dive into the first part,{" "}
              <Link href="/docs/react/v2/components">Components</Link>!
            </div>

            <Next
              href="/docs/react/v2/components"
              title="Next: Components"
              subtitle="What you see on the screen."
            />

            <div style={{ height: "56px" }} />
          </Col>

          <Col
            xs={0}
            sm={4}
            md={8}
            style={{
              ...styles.docsColumn,
              ...{ paddingLeft: "24px", fontSize: "16px" },
            }}
          >
            <ShortCutLink href="#components">1. Components</ShortCutLink>
            <ShortCutLink href="#sockets">2. Sockets</ShortCutLink>
            <ShortCutLink href="#hooks">3. Hooks</ShortCutLink>
            <ShortCutLink addBreak href="#server">
              4. Server
            </ShortCutLink>

            <ShortCutLink href="#summary">Summary</ShortCutLink>
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

const code = `import { MultiChatWindow, MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced';

// 1. SERVER
const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const username = 'Adam_La_Morre';
const secret = 'pass1234';

export const ChatApp = ( ) => {
  // 2. HOOK
  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <>
      {/* 3. COMPONENT */}
      <MultiChatWindow {...chatProps} />
      {/* 4. SOCKET */}
      <MultiChatSocket {...chatProps} />
    </>
  );
};`;

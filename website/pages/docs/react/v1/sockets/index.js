import React, { Component } from "react";

import { Row, Col } from "antd";

import Link from "next/link";
import Head from "next/head";

import { CodeBlock, dracula } from "react-code-blocks";

import YouTubeBanner from "../../../_YouTubeBanner";

import DocsLayout from "../_layout";

export default class ServerRest extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Web-Sockets | Chat Engine Docs</title>
          <meta
            name="description"
            content="Learn more about Chat Engine's websockets and React Socket components."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Sockets</h1>

            <h2 style={{ color: "#595959" }}>
              Subscribe to chat feeds and events with Chat Engine Sockets.
            </h2>

            <YouTubeBanner
              embedID="PHjUIeQWJo8"
              title="Learn Sockets on YouTube!"
              description="Chat Engine uses advanced web-sockets techniques to make building simple for you. In this video, we dive into the source code / implementation. Then we explain the docs so you can build quickly with our Socket and ChatSocket components."
            />

            <div style={{ height: "20px" }} />

            <div style={styles.title}>Introduction</div>

            <div style={styles.body}>
              The Socket and ChatSocket both use websockets under the hood. For
              more info on how we use websockets, go to{" "}
              <Link
                href="/docs/sockets"
                onClick={() =>
                  window.open(
                    "https://rest.chatengine.io/#connect-to-web-socket"
                  )
                }
              >
                the Postman docs on our sockets
              </Link>
              .
            </div>

            <div style={styles.body}>
              There are two sockets of interest: The User Socket (i.e. Socket)
              lets you subscribe to all event relevant to a user. This could be
              new Chats new Messages and new Users. The Chat Socket (i.e.
              ChatSocket) lets you subscribe to one individual Chat.
            </div>

            <div style={styles.title} id="user_socket">
              User Socket
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { Socket } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              The Socket component subscribes to all events relevant to the user
              you assign this Socket to.
            </div>

            <div style={styles.body}>
              To use the Socket, declare it within the Chat Engine Wrapper, and
              pass Project ID + User Name + User Secret as props. Then you're
              done and will receive data when new events eccor to this user.
            </div>

            <div style={styles.body}>
              <b>Here is an example:</b>
            </div>

            <CodeBlock
              theme={dracula}
              text={userSocketCode}
              language="jsx"
              showLineNumbers={true}
            />

            <div style={{ height: "26px" }} />

            <div style={styles.body}>
              This is a basic example, we recommend you add other components
              such as a Chat List and Chat Feed.
            </div>

            <div style={styles.title} id="chat_socket">
              Chat Socket
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { ChatSocket } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              The Chat Socket component subscribes to all events relevant to the
              chat you assign this Socket to.
            </div>

            <div style={styles.body}>
              To use the Chat Socket, declare it within the Chat Engine Wrapper,
              and pass Project ID + Chat ID + Chat Access Key as props. Then
              you're done and will receive data when new events eccor to this
              user.
            </div>

            <div style={styles.body}>
              You can also assign a Sender Username if you want to send messages
              into this chat under an alias.
            </div>

            <div style={styles.body}>
              <b>Here is an example:</b>
            </div>

            <CodeBlock
              theme={dracula}
              text={chatSocketCode}
              language="jsx"
              showLineNumbers={true}
            />

            <div style={{ height: "26px" }} />

            <div style={styles.body}>
              This is a basic example, we recommend you add other components
              such as a Chat Feed.
            </div>

            <div style={{ height: "56px" }} />
          </Col>

          <Col xs={0} sm={4} md={8} style={styles.docsColumn}>
            <div style={{ paddingLeft: "24px", fontSize: "16px" }}>
              <div>
                <Link
                  href="#user_socket"
                  onClick={() => window.location.replace("#user_socket")}
                >
                  User Socket
                </Link>
              </div>
              <div>
                <Link
                  href="#chat_socket"
                  onClick={() => window.location.replace("#chat_socket")}
                >
                  Chat Socket
                </Link>
              </div>
            </div>
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

export const userSocketCode = `import React from 'react'

import { ChatEngineWrapper, Socket } from 'react-chat-engine'

const UserSocketExample = () => {
    return (
        <ChatEngineWrapper>
            <Socket 
                projectID={PROJECT_ID}
                userName={USER_NAME}
                userSecret={USER_SECRET}
            />

            {/* Everything else... */}
        </ChatEngineWrapper>
    )
}

export default UserSocketExample`;

export const chatSocketCode = `import React from 'react'

import { ChatEngineWrapper, ChatSocket } from 'react-chat-engine'

const ChatSocketExample = () => {
    return (
        <ChatEngineWrapper>
            <ChatSocket 
                projectID={PROJECT_ID}
                chatID={CHAT_ID}
                chatAccessKey={ACCESS_KEY}
                senderUsername="Bob Baker"
            />

            {/* Everything else... */}
        </ChatEngineWrapper>
    )
}

export default ChatSocketExample`;

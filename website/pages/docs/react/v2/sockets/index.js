import React, { Component } from "react";

import { Row, Col } from "antd";

import { CodeBlock, dracula } from "react-code-blocks";

import Head from "next/head";
import Link from "next/link";

import { DocsLayout } from "../_assets/layout";
import { styles } from "../_assets/styles";
import { ShortCutLink } from "../_assets/shortcuts";
import { Next } from "../_assets/next";

export default class Components extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Sockets | Chat Engine Docs</title>
          <meta
            name="description"
            content="How Sockets work at a Chat Engine."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Sockets</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              How it Works
            </h2>

            <CodeBlock
              text={exampleCode}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={styles.body} />

            <div style={styles.title} id="what_sockets_do">
              What Sockets Do
            </div>

            <div style={styles.body}>
              In general, sockets subscribe to a server, and listen for when
              events occur. Like a new message or notification.
            </div>

            <div style={styles.body}>
              At Chat Engine, Sockets subscribe to the Chat Server, and listen
              for when chat events occur. Like a new message or chatroom.
            </div>

            <div style={styles.title} id="how_sockets_work">
              How Sockets Work
            </div>

            <div style={styles.body}>
              Since Chat Engine builds the Sockets for you. It's important to
              understand how they work.
            </div>

            <div style={styles.body}>
              Luckily for you, the Chat Engine Socket code is{" "}
              <Link href="https://github.com/chatengine-io/react-chat-engine-components/tree/main/src/sockets">
                Open Source
              </Link>{" "}
              and free to read whenever. However, we will explain how they work.
            </div>

            <div style={styles.body}>
              The lifecycle of a Chat Engine Socket has four steps:
            </div>

            <div style={{ ...{ paddingLeft: 12 }, ...styles.body }}>
              <b>1.</b> Authentication
              <br /> <b>2.</b> Socket Hooks
              <br /> <b>3.</b> Reconnecting
              <br /> <b>4.</b> Disconnecting
            </div>

            <div style={styles.body}>
              Before we go into each step, let's differentiate the two Sockets
              that Chat Engine provides you:{" "}
              <span style={styles.codeLine}>MultiChatSocket</span> and{" "}
              <span style={styles.codeLine}>SingleChatSocket</span>
            </div>

            <div style={styles.title} id="multi_vs_single_socket">
              Multi vs Single Chat Socket
            </div>

            <div style={styles.body}>
              Chat Engine gives you two Socket components:{" "}
              <span style={styles.codeLine}>MultiChatSocket</span> and{" "}
              <span style={styles.codeLine}>SingleChatSocket</span>
            </div>

            <div style={styles.body}>Let's go over what each of them do.</div>

            <div style={styles.body}>
              The <b>"MultiChatSocket"</b> subscribes to all (multiple)
              chatrooms which belong to this user, hence "Multi Chat".
            </div>

            <div style={styles.body}>
              The <b>"SingleChatSocket"</b> subscribes to a single chatroom.
            </div>

            <div style={styles.body}>
              Picking which Socket to use is very easy. The question to ask
              youself is:
            </div>

            <div style={{ ...{ paddingLeft: 12 }, ...styles.body }}>
              <i>
                Do I need to listen to just one chatroom, or all chats which a
                user is in?
              </i>
            </div>

            <div style={styles.body}>
              Both have the same four stages, and we'll document each
              separately.
            </div>

            <Row gutter={24}>
              <Col xs={24} sm={12}>
                <Next
                  href="/docs/react/v2/sockets/multi_chat_socket"
                  title="Next: Multi Chat Socket"
                  subtitle="Connect a User to the server."
                />
              </Col>

              <Col xs={24} sm={12}>
                <Next
                  href="/docs/react/v2/sockets/single_chat_socket"
                  title="Next: Single Chat Socket"
                  subtitle="Connect to one chatroom."
                />
              </Col>
            </Row>

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
            <ShortCutLink href="#what_sockets_do">What Sockets do</ShortCutLink>
            <ShortCutLink addBreak href="#how_sockets_work">
              How Sockets work
            </ShortCutLink>

            <ShortCutLink href="#multi_vs_single_socket">
              Multi vs Single Chat Socket
            </ShortCutLink>
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

const exampleCode = `import { MultiChatSocket } from 'react-chat-engine-advanced';

const ExampleSocket = (props) => {
  return (
    <MultiChatSocket
      projectId={props.projectId}
      username={props.username}
      secret={props.secret}
      onNewMessage={(chatId, message) => console.log("New Message", message)}
    />
  );
};`;

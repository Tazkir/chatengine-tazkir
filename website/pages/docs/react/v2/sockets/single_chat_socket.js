import React, { Component } from "react";

import { Row, Col } from "antd";

import Head from "next/head";
import Link from "next/link";

import { CodeBlock, dracula } from "react-code-blocks";

import { DocsLayout } from "../_assets/layout";
import { styles } from "../_assets/styles";
import { ShortCutLink } from "../_assets/shortcuts";
import { Next } from "../_assets/next";

export default class Components extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Single Chat Socket | Chat Engine Docs</title>
          <meta
            name="description"
            content="How the Single Chat Socket works at a Chat Engine."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Single Chat Socket</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              How it Works
            </h2>

            <div style={styles.body}>
              <span style={styles.codeLine}>{`<SingleChatSocket />`}</span>{" "}
              subscribes to a single chatroom, and listens for any relevant
              events.
            </div>

            <div style={styles.body}>
              Any apps with a single, stand-alone chat feed would use the{" "}
              <span style={styles.codeLine}>SingleChatSocket</span>.
            </div>

            <div style={styles.body}>
              For example, a chat-feed for live events.
            </div>

            <div style={styles.title} id="examples">
              Example Code
            </div>

            <div style={styles.body}>
              Let's go through an example implementation of a{" "}
              <span style={styles.codeLine}>SingleChatSocket</span> with
              authentication and hooks.
            </div>

            <CodeBlock
              text={exampleCode}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={styles.body} />

            <div style={styles.body}>
              In this example, the Chat ID and Access Key are used to
              authenticate into this chat, and console log any events which are
              relevant.
            </div>

            <div style={styles.title} id="authentication">
              Authentication
            </div>

            <div style={styles.body}>
              In order to pickup on messages sent to in a chat, the server needs
              to make sure the cleint has adequate permissions - for Security
              purposes.
            </div>

            <div style={styles.body}>
              The Socket requires three props:{" "}
              <span style={styles.codeLine}>projectId</span>,{" "}
              <span style={styles.codeLine}>chatId</span>, and{" "}
              <span style={styles.codeLine}>chatAccessKey</span>
            </div>

            <div style={styles.body}>
              Authentication flow: The Socket checks if there is a chat (with{" "}
              <span style={styles.codeLine}>chatId</span>) in the project (with{" "}
              <span style={styles.codeLine}>projectId</span>) that has a
              matching <span style={styles.codeLine}>chatAccessKey</span>. If
              there is, then this socket can listen to events in the chat.
            </div>

            <div style={styles.body}>
              Once this step is complete, we can now listen for relevant chat
              events.
            </div>

            <div style={styles.title} id="socket_hooks">
              Socket Hooks
            </div>

            <div style={styles.body}>
              When a relevant event occurs, we can trigger a socket hook with
              the new, relevant data.
            </div>

            <div style={styles.body}>
              Here are all of the Socket Hook props:
            </div>

            <CodeBlock
              text={socketHooks}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={styles.body} />

            <div style={styles.body}>
              (To see what goes into{" "}
              <span style={styles.codeLine}>ChatObject</span>,{" "}
              <span style={styles.codeLine}>MessageObject</span>,{" "}
              <span style={styles.codeLine}>PersonObject</span> please refer to
              the{" "}
              <Link href="/docs/react/v2/server/domain_model">
                domain model documentation
              </Link>
              .)
            </div>

            <div style={styles.title} id="reconnecting">
              Reconnecting
            </div>

            <div style={styles.body}>
              The concept of a reconnecting-websocket is simple: When the socket
              disconnects, for any reason, we reconnect it and fetch any events
              which the Socket might have missed.
            </div>

            <div style={styles.body}>
              All Chat Engine Sockets are reconnecting, so you don't have to do
              any coding!
            </div>

            <div style={styles.title} id="disconnecting">
              Disconnecting
            </div>

            <div style={styles.body}>
              When a Chat Engine Socket disconnects, a basic cleanup occurs on
              the server. The Chat Server removes subscription details from
              caching.
            </div>

            <div style={styles.body}>
              All Chat Engine Sockets have this disconnect sequence, so you
              don't have to do any coding!
            </div>

            <div style={styles.body}>
              Now when these events occur, what should you do with the new data?
            </div>

            <div style={styles.body}>
              We will show you in the next section:{" "}
              <Link href="/docs/react/v2/hooks">Hooks</Link>
            </div>

            <Next
              href="/docs/react/v2/hooks"
              title="Next: Hooks"
              subtitle="Chat app logic and state."
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
            <ShortCutLink addBreak href="#examples">
              Example Code
            </ShortCutLink>

            <ShortCutLink href="#authentication">Authentication</ShortCutLink>
            <ShortCutLink href="#socket_hooks">Socket Hooks</ShortCutLink>
            <ShortCutLink href="#reconnecting">Reconnecting</ShortCutLink>
            <ShortCutLink addBreak href="#disconnecting">
              Disconnecting
            </ShortCutLink>
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

const socketHooks = `{
  onConnect?: () => void;
  onAuthFail?: () => void;
  onEditChat?: (chat: ChatObject) => void;
  onDeleteChat?: (chat: ChatObject) => void;
  onNewMessage?: (chatId: number, message: MessageObject) => void;
  onEditMessage?: (chatId: number, message: MessageObject) => void;
  onDeleteMessage?: (chatId: number, message: MessageObject) => void;
  onIsTyping?: (chatId: number, person: PersonObject) => void;
}`;

const exampleCode = `import React from 'react';

import { SingleChatSocket } from 'react-chat-engine-advanced';

const App: React.FC = () => {
  return (
    <SingleChatSocket
      // Authentication
      projectId='1ed59673-1fd6-46ed-9eb9-56239a6a4f82'
      chatId={1001}
      chatAccessKey='ca-a25d4523-52d6-22ed-9fb2-5f52df5fd5d2'
      // Socket Hooks
      onConnect={() => console.log("auth succeeded")}
      onAuthFail={() => console.log("auth failed")}
      onEditChat={(chat) => console.log("chat edited", chat)}
      onDeleteChat={(chat) => console.log("chat deleted", chat)}
      onNewMessage={(chatId, message) => console.log("message created", chatId, message)}
      onEditMessage={(chatId, message) => console.log("message edited", chatId, message)}
      onDeleteMessage={(chatId, message) => console.log("message deleted", chatId, message)}
      onIsTyping={(chatId, person) => console.log("user is typing", chatId, person)}
    />
  );
};

export default App;
`;

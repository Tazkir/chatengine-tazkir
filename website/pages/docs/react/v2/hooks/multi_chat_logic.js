import React, { Component } from "react";

import { Row, Col } from "antd";

import Head from "next/head";

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
          <title>User Hooks | Chat Engine Docs</title>
          <meta
            name="description"
            content="How the User Hooks works at a Chat Engine."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>User Hooks</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              How it Works
            </h2>

            <div style={styles.body}>
              <span style={styles.codeLine}>useMultiChatLogic</span> takes user
              auth arguments and returns a state management Object.
            </div>

            <div style={styles.body}>
              Note: If you're using a{" "}
              <span style={styles.codeLine}>MultiChatSocket</span>, then use{" "}
              <span style={styles.codeLine}>useMultiChatLogic</span> for your
              state management.
            </div>

            <div style={styles.title} id="examples">
              Example Code
            </div>

            <div style={styles.body}>
              Let's go through an example of adding chat logic to{" "}
              <span style={styles.codeLine}>MultiChatWindow</span> and{" "}
              <span style={styles.codeLine}>MultiChatSocket</span> with{" "}
              <span style={styles.codeLine}>useMultiChatLogic</span>.
            </div>

            <CodeBlock
              text={shortExample}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={styles.body} />

            <div style={styles.body}>
              In this example,{" "}
              <span style={styles.codeLine}>{`<MultiChatWindow />`}</span> and{" "}
              <span style={styles.codeLine}>{`<MultiChatSocket />`}</span> are
              made responsive with{" "}
              <span style={styles.codeLine}>chatProps</span>.
            </div>

            <div style={styles.body}>
              Where <span style={styles.codeLine}>chatProps</span> is the
              state-management Object.
            </div>

            <div style={styles.title} id="authentication">
              Authentication
            </div>

            <div style={styles.body}>
              In order to make API calls as this user, the server needs to
              authenticate the user for Security purposes.
            </div>

            <div style={styles.body}>
              The function requires three arguments:{" "}
              <span style={styles.codeLine}>projectId</span>,{" "}
              <span style={styles.codeLine}>username</span>, and{" "}
              <span style={styles.codeLine}>secret</span>
            </div>

            <div style={styles.body}>
              Authentication flow: The Server checks if there is a user (with{" "}
              <span style={styles.codeLine}>username</span>) in the project
              (with <span style={styles.codeLine}>projectId</span>) that has a
              matching secret. If there is, then the user with authenticated.
            </div>

            <div style={styles.body}>
              (The secret matching is done by hash, we don't store plain-text
              secrets!)
            </div>

            <div style={styles.title} id="export_state_management">
              Export State Management
            </div>

            <div style={styles.body}>
              When the hook is successfully setup, it returns a large
              state-management object.
            </div>

            <div style={styles.body}>
              Below is the state-management Object that{" "}
              <span style={styles.codeLine}>useMultiChatLogic</span>
              returns.
            </div>

            <CodeBlock
              text={useMultiChatLogicReturn}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={styles.body} />

            <div style={styles.body}>
              This may look like a lot, but it's everything needed to manage a
              multi-chat app.
            </div>

            <Next
              href="/docs/react/v2/server"
              title="Next: Chat Server"
              subtitle="How the Chats are hosted."
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
            <ShortCutLink addBreak href="#export_state_management">
              Export State Management
            </ShortCutLink>
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

const useMultiChatLogicReturn = `{
  onConnect,
  onAuthFail,
  onGetChats,
  onNewChat,
  onEditChat,
  onDeleteChat,
  onGetMessages,
  onNewMessage,
  onEditMessage,
  onDeleteMessage,
  projectId,
  username,
  secret,
  chats,
  setChats,
  messages,
  setMessages,
  activeChatId,
  setActiveChatId,
  chat,
  peopleToInvite,
  setPeopleToInvite,
  hasMoreChats,
  setHasMoreChats,
  hasMoreMessages,
  setHasMoreMessages,
  isChatFeedAtBottom,
  setIsChatFeedAtBottom,
  onChatFormSubmit,
  onChatCardClick,
  onChatLoaderShow,
  onMessageLoaderShow,
  onMessageLoaderHide,
  onBottomMessageShow,
  onBottomMessageHide,
  onMessageFormSubmit,
  onInvitePersonClick,
  onRemovePersonClick,
  onDeleteChatClick,
};`;

const shortExample = `import React from 'react';

import { ChatEngine, MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const username = 'Adam_La_Morre';
const secret = 'pass1234';

export const Example = () => {
  // 1. Declare chatProps = useMultiChatLogic
  const chatProps = useMultiChatLogic(projectId, username, secret);
  return (
    <>
      // 2. Pass chatProps into MultiChatWindow
      <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
      // 3. Pass chatProps into MultiChatSocket
      <MultiChatSocket {...chatProps} />
    </>
  );
};`;

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
          <title>Chat Hooks | Chat Engine Docs</title>
          <meta
            name="description"
            content="How the Chat Hooks works at a Chat Engine."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Chat Hooks</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              How it Works
            </h2>

            <div style={styles.body}>
              <span style={styles.codeLine}>useSingleChatLogic</span> takes in
              chat auth arguments and returns a state management Object.
            </div>

            <div style={styles.body}>
              Note: If you're using a{" "}
              <span style={styles.codeLine}>SingleChatSocket</span>, then use{" "}
              <span style={styles.codeLine}>useSingleChatLogic</span> for your
              state management.
            </div>

            <div style={styles.title} id="examples">
              Example Code
            </div>

            <div style={styles.body}>
              Let's go through an example of adding chat logic to{" "}
              <span style={styles.codeLine}>ChatFeed</span> and{" "}
              <span style={styles.codeLine}>SingleChatSocket</span> with{" "}
              <span style={styles.codeLine}>useSingleChatLogic</span>.
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
              <span style={styles.codeLine}>{`<ChatFeed />`}</span> and{" "}
              <span style={styles.codeLine}>{`<SingleChatSocket />`}</span> are
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
              In order to make API calls in this chat, the server needs to
              authenticate the client for Security purposes.
            </div>

            <div style={styles.body}>
              The function requires three arguments:{" "}
              <span style={styles.codeLine}>projectId</span>,{" "}
              <span style={styles.codeLine}>chatId</span>, and{" "}
              <span style={styles.codeLine}>chatAccessKey</span>
            </div>

            <div style={styles.body}>
              Authentication flow: The Server checks if there is a chat (with{" "}
              <span style={styles.codeLine}>chatId</span>) in the project (with{" "}
              <span style={styles.codeLine}>projectId</span>) that has a
              matching <span style={styles.codeLine}>chatAccessKey</span>. If
              there is, then this hook can make API calls to the chat.
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
              <span style={styles.codeLine}>useSingleChatLogic</span>
              returns.
            </div>

            <CodeBlock
              text={useSingleChatLogicReturn}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={styles.body} />

            <div style={styles.body}>
              This may look like a lot, but it's everything needed to manage a
              single chat.
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
            <ShortCutLink href="#authentication">Authentication</ShortCutLink>
            <ShortCutLink addBreak href="#export_state_management">
              Export State Management
            </ShortCutLink>

            <ShortCutLink href="#examples">Example Code</ShortCutLink>
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

const useSingleChatLogicReturn = `{
  onConnect,
  onAuthFail,
  onEditChat,
  onDeleteChat,
  onGetMessages,
  onNewMessage,
  onEditMessage,
  onDeleteMessage,
  projectId, 
  chatId, 
  chatAccessKey,
  activeChatId,
  setActiveChatId,
  chat,
  messages,
  setMessages,
  peopleToInvite,
  setPeopleToInvite,
  hasMoreChats,
  setHasMoreChats,
  hasMoreMessages,
  setHasMoreMessages,
  isChatFeedAtBottom,
  setIsChatFeedAtBottom,
  onChatCardClick,
  onMessageLoaderShow,
  onMessageLoaderHide,
  onBottomMessageShow,
  onBottomMessageHide,
  onMessageFormSubmit,
}`;

const shortExample = `import React from 'react';

import { ChatSocket, ChatFeed, useSingleChatLogic } from 'react-chat-engine-advanced';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const chatId = 1001;
const chatAccessKey = 'ca-a25d4523-52d6-22ed-9fb2-5f52df5fd5d2';
const senderUsername = 'Adam La Morre';

export const Example = () => {
    // 1. Declare chatProps = useSingleChatLogic
    const chatProps = useSingleChatLogic(projectId, chatId, chatAccessKey);
    return (
      <>
        // 2. Pass chatProps into ChatFeed
        <ChatFeed {...chatProps} username={senderUsername} />
        // 3. Pass chatProps into SingleChatSocket
        <SingleChatSocket {...chatProps} />
      </>
    );
};`;

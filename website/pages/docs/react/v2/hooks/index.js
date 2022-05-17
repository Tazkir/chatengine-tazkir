import React, { Component } from "react";

import { Row, Col } from "antd";

import { CodeBlock, dracula } from "react-code-blocks";

import Head from "next/head";
import Link from "next/link";

import { ShortCutLink } from "../_assets/shortcuts";
import { DocsLayout } from "../_assets/layout";
import { styles } from "../_assets/styles";
import { Next } from "../_assets/next";

export default class Hooks extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Hooks | Chat Engine Docs</title>
          <meta
            name="description"
            content="How Chat Engine uses Hooks to manage its state and data."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>React Hooks</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              How it works
            </h2>

            <CodeBlock
              text={exampleCode}
              language="jsx"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={styles.body} />

            <div style={styles.title} id="what_hooks_do">
              What Hooks Do
            </div>

            <div style={styles.body}>
              In general, React hooks abstract state-management into a sharable
              function.
            </div>

            <div style={styles.body}>
              At Chat Engine, Hooks put all the chat-app logic into a function
              which you can import.
            </div>

            <div style={styles.title} id="how_hooks_work">
              How Hooks Work
            </div>

            <div style={styles.body}>
              Since Chat Engine builds the Hooks for you. It's important to
              understand how they work.
            </div>

            <div style={styles.body}>
              Luckily for you, the Chat Engine Hooks code is{" "}
              <Link href="https://github.com/chatengine-io/react-chat-engine-components/tree/main/src/hooks">
                Open Source
              </Link>{" "}
              and free to read whenever. However, we will explain how they work.
            </div>

            <div style={styles.body}>
              Chat Engine Hooks do two things, in the following order:
            </div>

            <div style={{ ...{ paddingLeft: 12 }, ...styles.body }}>
              <b>1.</b> Authenticate the User
              <br /> <b>2.</b> Return a big state management Object
            </div>

            <div style={styles.body}>
              Before we go into each step, let's differentiate the two Hooks
              that Chat Engine provides you:{" "}
              <span style={styles.codeLine}>useMultiChatLogic</span> and{" "}
              <span style={styles.codeLine}>useSingleChatLogic</span>
            </div>

            <div style={styles.title} id="multi_vs_single_chat">
              Multi vs Single Chat Hooks
            </div>

            <div style={styles.body}>
              Chat Engine gives you two Hook functions:{" "}
              <span style={styles.codeLine}>useMultiChatLogic</span> and{" "}
              <span style={styles.codeLine}>useSingleChatLogic</span>
            </div>

            <div style={styles.body}>
              <b>"useMultiChatLogic"</b> handles application logic for a user's
              multiple chats.
            </div>

            <div style={styles.body}>
              <b>"useSingleChatLogic"</b> handles application logic for just one
              chat.
            </div>

            <div style={styles.body}>
              We'll document the specifics for each function separately.
            </div>

            <Row gutter={24}>
              <Col xs={24} sm={12}>
                <Next
                  href="/docs/react/v2/hooks/multi_chat_logic"
                  title="Next: Multi Chat Logic"
                  subtitle="Chat-app logic and state management."
                />
              </Col>

              <Col xs={24} sm={12}>
                <Next
                  href="/docs/react/v2/hooks/single_chat_logic"
                  title="Next: Single Chat Logic"
                  subtitle="Chatroom logic and state management."
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
            <ShortCutLink href="#what_hooks_do">What Hooks do</ShortCutLink>
            <ShortCutLink addBreak href="#how_hooks_work">
              How Hooks work
            </ShortCutLink>

            <ShortCutLink href="#multi_vs_single_chat">
              Multi vs Single Chat Logic
            </ShortCutLink>
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

const exampleCode = `import { useMultiChatLogic } from 'react-chat-engine-advanced';
import { projectId, username, secret } from './userAuth';

const chatProps = useMultiChatLogic(projectId, username, secret);

console.log("Multi Chat", chatProps.chats);
console.log("Currently Active Chat", chatProps.activeChatId);
console.log("Active Chat's Messages", chatProps.messages);`;

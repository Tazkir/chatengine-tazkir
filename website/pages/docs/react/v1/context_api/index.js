import React, { Component } from "react";

import { Row, Col } from "antd";

import { CodeBlock, dracula } from "react-code-blocks";

import Link from "next/link";
import Head from "next/head";

import YouTubeBanner from "../../../_YouTubeBanner";

import DocsLayout from "../_layout";

export default class ContextAPI extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>React Context API | Chat Engine Docs</title>
          <meta
            name="description"
            content="Learn how the Chat Engine SDK uses React's context API so you can customize powerful chat experiences."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Context API</h1>

            <h2 style={{ color: "#595959" }}>
              React Chat Engine runs on{" "}
              <a href="https://reactjs.org/docs/context.html">
                React's context API
              </a>
              .
            </h2>

            <div style={{ marginBottom: "24px" }} />

            <YouTubeBanner
              embedID="ynFbj2AFP7E"
              title="Learn Context API on YouTube!"
              description="Chat Engine's context API lets you access Chat Engine's state data and change it programatically."
            />

            <div style={{ marginBottom: "20px" }} />

            <div style={styles.title}>Introduction</div>

            <div style={styles.body}>
              Simply put, React's context lets components all over your app
              share state. This is needed for{" "}
              <span style={styles.codeLine}>react-chat-engine</span> because
              state from the Chat List is needed all the way in the Feed,
              Message Form and more.
            </div>

            <div style={styles.body}>
              We use the Context API to let all these components share data
              quickly.
            </div>

            <div style={styles.title} id="wrapper">
              Chat Engine Wrapper
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { ChatEngineWrapper } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              To keep things simple, all you need to know about is the Chat
              Engine Wrapper. Wrap your Chat Engine components in this perent
              component, and everything will be using the proper context API.
            </div>

            <div style={styles.body}>
              Under the hood, it's a{" "}
              <Link href="https://reactjs.org/docs/context.html#contextprovider">
                React Context Provider
              </Link>
              .
            </div>

            <div style={styles.body}>
              Additionally, this will let you only pull individual components
              separately, and they'll just load like magic.
            </div>

            <div style={styles.body}>
              <b>Here is an example:</b>
            </div>

            <CodeBlock
              theme={dracula}
              text={wrapperExampleCode}
              language="jsx"
              showLineNumbers={true}
            />

            <div style={{ height: "26px" }} />

            <div style={styles.body}>
              This code snippet rebuilds the entire Chat Engine app from
              scratch. All you do is pull in a Wrapper, use the Socket, List,
              Feed and Settings then you're done.
            </div>

            <div style={styles.body}>
              This is why the Context API is powerful and Chat Engine uses it
              heavily across the app.
            </div>

            <div style={styles.title} id="context">
              Context
            </div>

            <div style={styles.body}>
              If you want to interface with the state of your Chat Engine UI,
              you can import{" "}
              <span style={styles.codeLine}>ChatEngineContext</span>.
            </div>

            <div style={styles.body}>
              Important Node: the component/file you import context from must be
              within the{" "}
              <span style={styles.codeLine}>{`<ChatEngineWrapper />`}</span>{" "}
              component to inherit the context.
            </div>

            <div style={styles.body}>
              Here is an example of a component within the wrapper using the
              context data and functions.
            </div>

            <CodeBlock
              theme={dracula}
              text={importContextExample}
              language="jsx"
              showLineNumbers={true}
            />

            <div style={styles.body}></div>

            <div style={styles.body}>
              The context implementation and all possible values/functions can
              be found{" "}
              <Link href="https://github.com/alamorre/react-chat-engine/blob/master/src/components/Context/index.js">
                here
              </Link>
              .
            </div>

            <div style={styles.title} id="context_functions">
              Context Functions
            </div>

            <div style={styles.body}>
              If you want to programatically change the state of your Chat
              Engine UI, we provide Context Functions!
            </div>

            <div style={styles.body}>
              Context Functions are context setters which change the
              context/state of your entire Chat Engine UI. They're powerful
              enough to transform the app programatically.
            </div>

            <div style={styles.body}>
              Any value pulled in from the context starting with{" "}
              <span style={styles.codeLine}>set*</span> is a context function.
            </div>

            <div style={styles.body}>
              Ideally the names of Context Values and Context Functions are self
              explanatory, if you have any questions on what they mean{" "}
              <Link href="https://github.com/alamorre/react-chat-engine/issues">
                please let me know with a GitHub issue
              </Link>
              .
            </div>

            <div style={{ height: "56px" }} />
          </Col>

          <Col xs={0} sm={4} md={8} style={styles.docsColumn}>
            <div style={{ paddingLeft: "24px", fontSize: "16px" }}>
              <div>
                <Link
                  href="#wrapper"
                  onClick={() => window.location.replace("#wrapper")}
                >
                  Provider (Wrapper)
                </Link>
              </div>
              <div>
                <Link
                  href="#context"
                  onClick={() => window.location.replace("#context")}
                >
                  Context
                </Link>
              </div>
              <div>
                <Link
                  href="#context_functions"
                  onClick={() => window.location.replace("#context_functions")}
                >
                  Context Functions
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
    fontSize: "16px",
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

export const wrapperExampleCode = `import React from 'react'

import { ChatEngineWrapper, Socket, ChatList, ChatFeed, ChatSettings } from 'react-chat-engine'

import { Col } from 'react-grid-system'

const ChatEngine = () => {
    return (
        <ChatEngineWrapper>
            <Socket 
                projectID={PROJECT_ID}
                userName={USER_NAME}
                userSecret={USER_SECRET}
            />

            <Col xs={0} sm={3}>
                <ChatList />
            </Col>

            <Col xs={12} sm={6}>
                <ChatFeed />
            </Col>

            <Col xs={0} sm={3}>
                <ChatSettings />
            </Col>
        </ChatEngineWrapper>
    )
}

export default ChatEngine`;

export const importContextExample = `import React, { useContext } from 'react'

import { ChatEngineContext } from 'react-chat-engine'

const WrappedComponent = () => {
    const {
        connecting, setConnecting,
        conn, setConn,
        creds, setCreds,
        chats, setChats,
        messages, setMessages,
        activeChat, setActiveChat,
        typingCounter, setTypingCounter,
        loadMoreMessages, setLoadMoreMessages,
        isBottomVisible, setIsBottomVisible,
    } = useContext(ChatEngineContext);

    return (
        <div>
            {/* Display and change Chat Engine state */}
        </div>
    )
}

export default WrappedComponent`;

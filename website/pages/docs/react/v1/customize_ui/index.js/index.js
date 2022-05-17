import React, { Component } from "react";

import DocsLayout from "../../_layout";

import { Row, Col } from "antd";

import Head from "next/head";

import { CodeBlock, dracula } from "react-code-blocks";

export default class CustomizeUI extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Customize UI (How to) | Chat Engine Docs</title>
          <meta
            name="description"
            content="Learn about ways to customize the Chat Engine experience for your own website or app!"
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Customize UI</h1>

            <h2 style={{ color: "#595959" }}>
              How Chat Engine lets you customize the experience.
            </h2>

            <div style={styles.body}>
              The entire Chat Engine UI can be customized with two tools.
              Components & Render Functions.
            </div>

            <div style={styles.body}>
              Components are simple, you can render (small or big) chunks of the
              Chat Engine UI - such as the entire Chat Feed or just a Message
              Bubble.
            </div>

            <div style={styles.body}>
              Render Functions are different, they let you <b>replace</b> parts
              of the ChatEngine UI with whatever you want.
            </div>

            <div style={styles.title}>A Funny Example</div>

            <div style={styles.body}>
              All the render functions have a corresponding component! In the
              example below, we import all components and put them back in their
              respestive render (replace) functions.
            </div>

            <div style={styles.body}>
              What you get is the exact same{" "}
              <span styles={styles.codeSection}>{`<ChatEngine />`}</span> UI.
              All Chat Engine components are "replaced by themself" so nothing
              changed!
            </div>

            <div style={styles.body}>
              In the next pages we show you how to use the Render Functions and
              Components, respectively.
            </div>

            <CodeBlock
              theme={dracula}
              text={code}
              language="jsx"
              showLineNumbers={true}
            />

            <div style={{ height: "56px" }} />
          </Col>

          <Col xs={0} sm={4} md={8} style={styles.docsColumn}>
            <div style={{ paddingLeft: "24px", fontSize: "16px" }}>
              {/* <div><Link to='#height' onClick={() => window.location.replace('#height')}>Height</Link></div>
                            <div style={{ height: '12px' }} />
                            <div><Link to='#chat_list' onClick={() => window.location.replace('#chat_list')}>Chat List</Link></div> */}
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

const code = `import React from 'react'

import { 
    ChatEngine, 
    ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings
} from 'react-chat-engine'

const TheSameChatUI = props => {
    return (
        <ChatEngine 
            height='100vh'
            projectID={props.projectID} 
            userName={props.userName} 
            userSecret={props.userSecret} 
            development={props.development} 
            // Customize UI
            renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
            renderChatCard={(chat, index) => <ChatCard key={\`\${index}\`} chat={chat} />}
            renderNewChatForm={(creds) => <NewChatForm creds={creds} />} 
            renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
            renderChatHeader={(chat) => <ChatHeader />}
            renderIceBreaker={(chat) => <IceBreaker />}
            renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
            renderIsTyping={(typers) => <IsTyping />}
            renderConnectionBar={(chat) => <ConnectionBar />}
            renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
            renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
            renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
            renderPeopleSettings={(creds, chat) => <PeopleSettings />}
            renderPhotosSettings={(chat) => <PhotosSettings />}
            renderOptionsSettings={(creds, chat) => <OptionsSettings />}
        />
    )
}

export default TheSameChatUI
`;

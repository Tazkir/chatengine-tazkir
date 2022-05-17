import React, { Component } from "react";

import { Row, Col } from "antd";

import DocsLayout from "../../_layout";

import Head from "next/head";

import { CodeBlock, dracula } from "react-code-blocks";

export default class DirectMessaging extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Direct Messaging | Chat Engine Docs</title>
          <meta
            name="description"
            content="Let your users DM one another today by implementing Chat Engine's chat SDK."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Direct Messaging (1-on-1 chats)</h1>

            <h2 style={{ color: "#595959" }}>
              Let's get your users DM'ing one another.
            </h2>

            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <div style={styles.body}>
                <b>It goes down in the DMs...</b>
              </div>

              <img
                alt="what-chat-engine-will-build"
                src="https://chat-engine-assets.s3.amazonaws.com/down-in-the-dms.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body}>
              Lots of app's want direct (1-on-1) messages and not group chats.
              Luckily, Chat Engine supports both!
            </div>

            <div style={styles.body}>
              In this tutorial, we'll show you how to setup 1-on-1 chats (DMs)
              between your users.
            </div>

            <div style={styles.title} id="create_project">
              Setup a Chat Engine Project
            </div>

            <div style={styles.body}>
              Let’s go to Chat Engine and get your API keys.
            </div>

            <div style={styles.bulletPoint}>
              1. Register at{" "}
              <a
                href="https://chatengine.io"
                onClick={() => this.openLink("https://chatengine.io")}
              >
                chatengine.io
              </a>
            </div>

            <div style={styles.bulletPoint}>
              2. Click "New Project" and add a project title
            </div>

            <div style={styles.bulletPoint}>
              3. Create your first User, I’ll call my user Adam
            </div>

            <div style={styles.bulletPoint}>
              4. Remember the <b>Project ID</b> and the <b>Username + Secret</b>{" "}
              of a user. You will need it later.
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.body}>For Example:</div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/chat-engine-collect-info.png"
              style={{ width: "100%", paddingBottom: "22px" }}
            />

            <div style={styles.body}>
              Install Chat Engine to your app by running:{" "}
              <span style={styles.codeLine}>npm install react-chat-engine</span>{" "}
              or <span style={styles.codeLine}>yarn add react-chat-engine</span>
            </div>

            <div style={styles.body}>
              Now, instantiate it in you App wherever needed and pass
              "projectID", "userName" and "userSecret".
            </div>

            <CodeBlock
              text={startCode}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
            />

            <div style={{ height: "22px" }} />

            <div style={styles.body}>
              Now we have Chat Engine setup, but it allows group chats too.
            </div>

            <div style={styles.title} id="create_project">
              Enforcing Direct Messaging
            </div>

            <div style={styles.body}>
              If we want to create direct messages, we need to let a user chose
              a user's username and create (or get) a private chat between them.
            </div>

            <div style={styles.body}>
              Chat Engine has a{" "}
              <span style={styles.codeLine}>getOrCreateChat</span> function
              which takes an Object with "usernames" and finds a chat between
              these users, or creates a new one. Similar to how iMessage or
              Facebook Messenger works!
            </div>

            <div style={styles.body}>
              So, let's create a username field, a submit button, and Get or
              Create a Chat with these usernames (the caller's username is
              optional).
            </div>

            <div style={styles.body}>
              <b>Once complete, your code will look something like this:</b>
            </div>

            <CodeBlock
              text={directMessagesCode}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
            />

            <div style={{ height: "22px" }} />

            <div style={styles.body}>
              Now, let's run that app and see what we have.
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
                <b>Now you can type a username and start DM'ing them :)</b>
              </div>

              <img
                alt="chat-engine-direct-messages-tutorial"
                src="https://chat-engine-assets.s3.amazonaws.com/DMs-done-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.title}>Now you got DMs, happy chatting!</div>

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
    fontSize: "14px",
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

const startCode = `import React from 'react';

 import { ChatEngine } from 'react-chat-engine';
 function App() {
 \treturn (
 \t\t<ChatEngine
 \t\t\tprojectID='00000000-0000-0000-0000-000000000000'
 \t\t\tuserName='adam'
 \t\t\tuserSecret='pass1234'
 \t\t/>
 \t);
 }
 
 export default App;`;

const directMessagesCode = `import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = () => {
\tconst [username, setUsername] = useState('')

\tfunction createDirectChat(creds) {
\t\tgetOrCreateChat(
\t\t\tcreds,
\t\t\t{ is_direct_chat: true, usernames: [username] },
\t\t\t() => setUsername('')
\t\t)
\t}

\tfunction renderChatForm(creds) {
\t\treturn (
\t\t\t<div>
\t\t\t\t<input 
\t\t\t\t\tplaceholder='Username' 
\t\t\t\t\tvalue={username} 
\t\t\t\t\tonChange={(e) => setUsername(e.target.value)} 
\t\t\t\t/>
\t\t\t\t<button onClick={() => createDirectChat(creds)}>
\t\t\t\t\tCreate
\t\t\t\t</button>
\t\t\t</div>
\t\t)
\t}

\treturn (
\t\t<ChatEngine
\t\t\theight='100vh'
\t\t\tuserName='adam'
\t\t\tuserSecret='pass1234'
\t\t\tprojectID='00000000-0000-0000-0000-000000000000'
\t\t\trenderNewChatForm={(creds) => renderChatForm(creds)}
\t\t/>
\t)
}

export default DirectChatPage;`;

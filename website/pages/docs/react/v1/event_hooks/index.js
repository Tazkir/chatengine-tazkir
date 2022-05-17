import React, { Component } from "react";

import { Row, Col } from "antd";

import Link from "next/link";
import Head from "next/head";

import { CodeBlock, dracula } from "react-code-blocks";

import YouTubeBanner from "../../../_YouTubeBanner";

import DocsLayout from "../_layout";

const code = `import React from 'react';\nimport { ChatEngine } from 'react-chat-engine';\n\nfunction App() {\n\treturn (\n\t\t<ChatEngine\n\t\t\tprojectID='00000000-0000-0000-0000-000000000000'\n\t\t\tuserName='adam'\n\t\t\tuserSecret='pass1234'\n\t\t\t// Event Hooks Here\n\t\t\tonConnect={(creds) => console.log(creds)}\n\t\t\tonFailAuth={(props) => console.log(props)}\n\t\t\tonNewChat={(chat) => console.log(chat)}\n\t\t\tonEditChat={(chat) => console.log(chat)}\n\t\t\tonDeleteChat={(chat) => console.log(chat)}\n\t\t\tonNewMessage={(chatId, message) => console.log(chatId, message)}\n\t\t\tonEditMessage={(chatId, message) => console.log(chatId, message)}\n\t\t\tonDeleteMessage={(chatId, message) => console.log(chatId, message)}\n\t\t/>\n\t);\n}\n\nexport default App;`;

export default class Hooks extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Event Hooks | Chat Engine Docs</title>
          <meta
            name="description"
            content="Learn how to run your code whenever certain chat events happen in Chat Engine."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Event Hooks</h1>

            <h2 style={{ color: "#595959" }}>
              Connect Chat Engine into your web app.
            </h2>

            <YouTubeBanner
              embedID="2-JImsGtrQk"
              title="Learn Event Hooks on YouTube!"
              description="Chat Engine event hooks let you run any code whenever events occur in Chat Engine. Learn to customize your website's experience with Chat Engine and our event hooks!"
            />

            <div style={{ height: "20px" }} />

            <div style={styles.body}>
              All of the event hooks can be passed in as props into the{" "}
              <span style={styles.codeLine}>{`<ChatEngine />`}</span> component.
            </div>

            <CodeBlock
              theme={dracula}
              text={code}
              language="jsx"
              showLineNumbers={true}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="on_connect">
              On Connect (Auth Success)
            </div>

            <div style={styles.body}>
              On Connect{" "}
              <span style={styles.codeLine}>{`onConnect={(creds) => {}}`}</span>{" "}
              is triggered when the{" "}
              <span style={styles.codeLine}>{`<ChatEngine />`}</span> instance
              is connected and the user is online.
            </div>

            <div style={styles.title} id="on_fail_auth">
              On Fail Auth
            </div>

            <div style={styles.body}>
              On Fail Auth{" "}
              <span
                style={styles.codeLine}
              >{`onFailAuth={(props) => {}}`}</span>{" "}
              is triggered when the{" "}
              <span style={styles.codeLine}>projectID</span>,{" "}
              <span style={styles.codeLine}>userName</span>, or{" "}
              <span style={styles.codeLine}>userSecret</span> prop is incorrect
              - hence auth has failed.
            </div>

            <div style={styles.title} id="on_get_chats">
              On Get Chats
            </div>

            <div style={styles.body}>
              On Get Chats{" "}
              <span
                style={styles.codeLine}
              >{`onGetChats={(chats) => {}}`}</span>{" "}
              is triggered when the Get Chats API ca completed.
            </div>

            <div style={styles.title} id="on_new_chat">
              On New Chat
            </div>

            <div style={styles.body}>
              On New Chat{" "}
              <span style={styles.codeLine}>{`onNewChat={(chat) => {}}`}</span>{" "}
              is triggered when a user has created a new chat that you're in.
            </div>

            <div style={styles.title} id="on_edit_chat">
              On Edit Chat
            </div>

            <div style={styles.body}>
              On Edit Chat{" "}
              <span style={styles.codeLine}>{`onEditChat={(chat) => {}}`}</span>{" "}
              is triggered when a user has edited chat data.
            </div>

            <div style={styles.title} id="on_delete_chat">
              On Delete Chat
            </div>

            <div style={styles.body}>
              On Delete Chat{" "}
              <span
                style={styles.codeLine}
              >{`onDeleteChat={(chat) => {}}`}</span>{" "}
              is triggered when an admin has deleted a chat that you are in.
            </div>

            <div style={styles.title} id="on_update_user">
              On Update User
            </div>

            <div style={styles.body}>
              When a user's data is edited (e.g. goes Online or Offline), On
              Edit Chat{" "}
              <span style={styles.codeLine}>{`onEditChat={(chat) => {}}`}</span>{" "}
              is triggered because changes appear in the chat object.
            </div>

            <div style={styles.title} id="on_typing">
              On Typing
            </div>

            <div style={styles.body}>
              On Typing{" "}
              <span
                style={styles.codeLine}
              >{`onTyping={(chatId, username) => {}}`}</span>{" "}
              is triggered when another user is typing to a chat you're a part
              of.
            </div>

            <div style={styles.title} id="on_get_messages">
              On Get Messages
            </div>

            <div style={styles.body}>
              On Get Messages{" "}
              <span
                style={styles.codeLine}
              >{`onGetMessages={(chatId, messages) => {}}`}</span>{" "}
              is triggered when the Get Messages API has completed.
            </div>

            <div style={styles.title} id="on_new_message">
              On New Message
            </div>

            <div style={styles.body}>
              On New Message{" "}
              <span
                style={styles.codeLine}
              >{`onNewMessage={(chatId, message) => {}}`}</span>{" "}
              is triggered when a user has sent you a new message.
            </div>

            <div style={styles.title} id="on_edit_message">
              On Edit Message
            </div>

            <div style={styles.body}>
              On Edit Message{" "}
              <span
                style={styles.codeLine}
              >{`onEditMessage={(chatId, message) => {}}`}</span>{" "}
              is triggered when a user has edited a message.
            </div>

            <div style={styles.title} id="on_delete_message">
              On Delete Message
            </div>

            <div style={styles.body}>
              On Delete Message{" "}
              <span
                style={styles.codeLine}
              >{`onDeleteMessage={(chatId, message) => {}}`}</span>{" "}
              is triggered when a user has deleted a message.
            </div>

            <div style={styles.title} id="on_add_person">
              On Add Person
            </div>

            <div style={styles.body}>
              When a person is added to a chat, On Edit Chat{" "}
              <span style={styles.codeLine}>{`onEditChat={(chat) => {}}`}</span>{" "}
              is triggered because changes appear in the chat object.
            </div>

            <div style={styles.title} id="on_remove_person">
              On Remove Person
            </div>

            <div style={styles.body}>
              When a person is removed from a chat, On Edit Chat{" "}
              <span style={styles.codeLine}>{`onEditChat={(chat) => {}}`}</span>{" "}
              is triggered because changes appear in the chat object.
            </div>

            <div style={styles.title} id="on_get_other_people">
              On Get Other People
            </div>

            <div style={styles.body}>
              On Get Other People{" "}
              <span
                style={styles.codeLine}
              >{`onGetOtherPeople={(chatId, people) => {}}`}</span>{" "}
              is triggered when the Get Other People API has completed.
            </div>

            <div style={{ marginBottom: "24px" }} />
          </Col>

          <Col xs={0} sm={4} md={8} style={styles.docsColumn}>
            <div style={{ paddingLeft: "24px", fontSize: "16px" }}>
              <div>
                <Link
                  href="#on_connect"
                  onClick={() => window.location.replace("#on_connect")}
                >
                  On Connect (Auth Success)
                </Link>
              </div>
              <div>
                <Link
                  href="#on_auth_fail"
                  onClick={() => window.location.replace("#on_auth_fail")}
                >
                  On Fail Auth
                </Link>
              </div>

              <div style={{ height: "12px" }} />

              <div>
                <Link
                  href="#on_get_chats"
                  onClick={() => window.location.replace("#on_get_chats")}
                >
                  On Get Chats
                </Link>
              </div>
              <div>
                <Link
                  href="#on_new_chat"
                  onClick={() => window.location.replace("#on_new_chat")}
                >
                  On New Chat
                </Link>
              </div>
              <div>
                <Link
                  href="#on_edit_chat"
                  onClick={() => window.location.replace("#on_edit_chat")}
                >
                  On Edit Chat
                </Link>
              </div>
              <div>
                <Link
                  href="#on_delete_chat"
                  onClick={() => window.location.replace("#on_delete_chat")}
                >
                  On Delete Chat
                </Link>
              </div>

              <div style={{ height: "12px" }} />

              <div>
                <Link
                  href="#on_update_user"
                  onClick={() => window.location.replace("#on_update_user")}
                >
                  On Update User
                </Link>
              </div>
              <div>
                <Link
                  href="#on_typing"
                  onClick={() => window.location.replace("#on_typing")}
                >
                  On Typing
                </Link>
              </div>

              <div style={{ height: "12px" }} />

              <div>
                <Link
                  href="#on_get_messages"
                  onClick={() => window.location.replace("#on_get_messages")}
                >
                  On Get Messages
                </Link>
              </div>
              <div>
                <Link
                  href="#on_new_message"
                  onClick={() => window.location.replace("#on_new_message")}
                >
                  On New Message
                </Link>
              </div>
              <div>
                <Link
                  href="#on_edit_message"
                  onClick={() => window.location.replace("#on_edit_message")}
                >
                  On Edit Message
                </Link>
              </div>
              <div>
                <Link
                  href="#on_delete_message"
                  onClick={() => window.location.replace("#on_delete_message")}
                >
                  On Delete Message
                </Link>
              </div>

              <div style={{ height: "12px" }} />

              <div>
                <Link
                  href="#on_add_person"
                  onClick={() => window.location.replace("#on_add_person")}
                >
                  On Add Person
                </Link>
              </div>
              <div>
                <Link
                  href="#on_remove_person"
                  onClick={() => window.location.replace("#on_remove_person")}
                >
                  On Remove Person
                </Link>
              </div>
              <div>
                <Link
                  href="#on_get_other_people"
                  onClick={() =>
                    window.location.replace("#on_get_other_people")
                  }
                >
                  On Get Other People
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
    paddingBottom: "12px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    paddingBottom: "12px",
  },
  bulletPoint: {
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

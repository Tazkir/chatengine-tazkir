import React, { Component } from "react";

import { Row, Col } from "antd";

import Link from "next/link";

import DocsLayout from "../../_layout";

import { CodeBlock, dracula } from "react-code-blocks";

import YouTubeBanner from "../../../../_YouTubeBanner";

const code = `import React from 'react';\nimport { ChatEngine } from 'react-chat-engine';\n\nfunction App() {\n\treturn (\n\t\t<ChatEngine\n\t\t\tprojectID='00000000-0000-0000-0000-000000000000'\n\t\t\tuserName='adam'\n\t\t\tuserSecret='pass1234'\n\t\t\t// Render Custom Components\n\t\t\theight='100vh'\n\t\t\trenderChatList={(chatAppState) => {}}\n\t\t\trenderChatCard={(chat, index) => {}}\n\t\t\trenderNewChatForm={(creds) => {}}\n\t\t\trenderChatFeed={(chatAppState) => {}}\n\t\t\trenderChatHeader={(chat) => {}}\n\t\t\trenderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {}}\n\t\t\trenderIsTyping={(typers) => {}}\n\t\t\trenderNewMessageForm={(creds, chatId) => {}}\n\t\t\trenderChatSettings={(chatAppState) => {}}\n\t\t\trenderChatSettingsTop={(creds, chat) => {}}\n\t\t\trenderPeopleSettings={(creds, chat) => {}}\n\t\t\trenderPhotosSettings={(chat) => {}}\n\t\t\trenderOptionsSettings={(creds, chat) => {}}\n\t\t/>\n\t);\n}\n\nexport default App;`;

export default class RenderFunctions extends Component {
  render() {
    return (
      <DocsLayout>
        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Render Functions</h1>

            <h2 style={{ color: "#595959" }}>
              Swap out Chat Engine comnponents with your own.
            </h2>

            <YouTubeBanner
              embedID="qjedlBPL1NA"
              title="Learn Render Functions on YouTube!"
              description="Chat Engine Render Functions let you replace parts of the UI with whatever code you want. We show you how they work and replace a few parts, making Chat Engine look more like Slack!"
            />

            <div style={{ height: "20px" }} />

            <div style={styles.body}>
              Chat Engine lets you pass down render functions which swaps out
              parts of the UI for your own.
            </div>

            <div style={styles.body}>
              This allows you to rewrite, customize, and hide parts of the the
              UI - so you can tailor the chat experience for your website.
            </div>

            <CodeBlock
              theme={dracula}
              text={code}
              language="jsx"
              showLineNumbers={true}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="height">
              Height
            </div>

            <div style={styles.body}>
              The Height props will set the Chat Engine height in CSS, commonly{" "}
              <span style={styles.codeLine}>{`height='100vh'`}</span>.
            </div>

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="chat_list">
              Render Chat List
            </div>

            <div style={styles.body}>
              Render Chat List{" "}
              <span
                style={styles.codeLine}
              >{`renderChatList={(chatAppState) => {}}`}</span>{" "}
              receives a Chat App Props Object as a parameter, then can render a
              custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/chat_feed-min-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="chat_card">
              Render Chat Card
            </div>

            <div style={styles.body}>
              Render Chat Card{" "}
              <span
                style={styles.codeLine}
              >{`renderChatCard={(chat, index) => {}}`}</span>{" "}
              receives a Chat Object and Index Integer as parameters then can
              render a custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/chat_card-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="new_chat_form">
              Render New Chat Form
            </div>

            <div style={styles.body}>
              Render New Chat Form{" "}
              <span
                style={styles.codeLine}
              >{`renderNewChatForm={(creds) => {}}`}</span>{" "}
              receives a Credentials Object and Chat ID Integer as parameters
              then can render a custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/new_chat_form-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="chat_feed">
              Render Chat Feed
            </div>

            <div style={styles.body}>
              Render Chat Feed{" "}
              <span
                style={styles.codeLine}
              >{`renderChatFeed={(chatAppState) => {}}`}</span>{" "}
              receives a Chat App Props Object as a parameter, then can render a
              custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/chat_list-min-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="chat_header">
              Render Chat Header
            </div>

            <div style={styles.body}>
              Render Chat Header{" "}
              <span
                style={styles.codeLine}
              >{`renderChatHeader={(chat) => {}}`}</span>{" "}
              receives a Chat Object as a parameter then can render a custom
              react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/chat_header-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="ice_breaker">
              Render Ice Breaker
            </div>

            <div style={styles.body}>
              Render Ice Breaker{" "}
              <span
                style={styles.codeLine}
              >{`renderIceBreaker={(chat) => {}}`}</span>{" "}
              receives a Chat Object as a parameter then can render a custom
              react component in it's place.
            </div>

            <img
              alt="chat-engine-custom-ice-breaker"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/ice_breaker-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="message_bubble">
              Render Message Bubble
            </div>

            <div style={styles.body}>
              Render Message Bubble{" "}
              <span
                style={styles.codeLine}
              >{`renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {}}`}</span>{" "}
              receives a Credentials Object, Chat Object, Previous Message
              Object, Current Message Object, and Next Message Object as
              parameters then can render a custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/message_bubble-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="is_typing">
              Render Is Typing
            </div>

            <div style={styles.body}>
              Render Is Typing{" "}
              <span
                style={styles.codeLine}
              >{`renderIsTyping={(typers) => {}}`}</span>{" "}
              receives an Object of typer usernames and their last typing
              timestamp as a parameter then can render a custom react component
              in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/is_typing-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="connection_bar">
              Render Connection Bar
            </div>

            <div style={styles.body}>
              Render Connection Bar{" "}
              <span
                style={styles.codeLine}
              >{`renderConnectionBar={(chat) => {}}`}</span>{" "}
              receives a Chat Object arguement, then can render a custom
              "reconnecting" component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/connection_bar-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="scroll_down_bar">
              Render Scroll Down Bar
            </div>

            <div style={styles.body}>
              Render Scroll Down Bar{" "}
              <span
                style={styles.codeLine}
              >{`renderScrollDownBar={(chat) => {}}`}</span>{" "}
              receives a Chat Object, then can render a custom "scroll down for
              more messages" component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/scroll_down_bar-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="new_message_form">
              Render New Message Form
            </div>

            <div style={styles.body}>
              Render New Message Form{" "}
              <span
                style={styles.codeLine}
              >{`renderNewMessageForm={(creds, chatId) => {}}`}</span>{" "}
              receives a Credentials Object and Chat ID Integer as parameters
              then can render a custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/new_message_form-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="chat_settings">
              Render Chat Settings
            </div>

            <div style={styles.body}>
              Render Chat Settings{" "}
              <span
                style={styles.codeLine}
              >{`renderChatSettings={(chatAppState) => {}}`}</span>{" "}
              receives a Chat App Props Object as a parameter, then can render a
              custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/chat_settings_col-min-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="chat_settings_top">
              Render Chat Settings Top
            </div>

            <div style={styles.body}>
              Render Chat Settings Top{" "}
              <span
                style={styles.codeLine}
              >{`renderChatSettingsTop={(creds, chat) => {}}`}</span>{" "}
              receives a Credentials Object and Chat Object as parameters then
              can render a custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/chat_settings-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="people_settings">
              Render People Settings
            </div>

            <div style={styles.body}>
              Render People Settings{" "}
              <span
                style={styles.codeLine}
              >{`renderPeopleSettings={(creds, chat) => {}}`}</span>{" "}
              receives a Credentials Object and Chat Object as parameters then
              can render a custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/people_settings-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="photos_settings">
              Render Photos Settings
            </div>

            <div style={styles.body}>
              Render Photos Settings{" "}
              <span
                style={styles.codeLine}
              >{`renderPhotosSettings={(chat) => {}}`}</span>{" "}
              receives a Credentials Object and Chat Object as parameters then
              can render a custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/photos_settings-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="options_settings">
              Render Options Settings
            </div>

            <div style={styles.body}>
              Render Options Settings{" "}
              <span
                style={styles.codeLine}
              >{`renderOptionsSettings={(creds, chat) => {}}`}</span>{" "}
              receives a Credentials Object and Chat Object as parameters then
              can render a custom react component in it's place.
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/customize_ui/options_settings-min.png"
              style={{
                width: "100%",
                paddingBottom: "22px",
                border: "1px solid #e8e8e8",
              }}
            />

            <div style={{ height: "56px" }} />
          </Col>

          <Col xs={0} sm={4} md={8} style={styles.docsColumn}>
            <div style={{ paddingLeft: "24px", fontSize: "16px" }}>
              <div>
                <Link
                  href="#height"
                  onClick={() => window.location.replace("#height")}
                >
                  Height
                </Link>
              </div>

              <div style={{ height: "12px" }} />

              <div>
                <Link
                  href="#chat_list"
                  onClick={() => window.location.replace("#chat_list")}
                >
                  Chat List
                </Link>
              </div>
              <div>
                <Link
                  href="#chat_card"
                  onClick={() => window.location.replace("#chat_card")}
                >
                  Chat Card
                </Link>
              </div>
              <div>
                <Link
                  href="#new_chat_form"
                  onClick={() => window.location.replace("#new_chat_form")}
                >
                  New Chat Form
                </Link>
              </div>

              <div style={{ height: "12px" }} />

              <div>
                <Link
                  href="#chat_feed"
                  onClick={() => window.location.replace("#chat_feed")}
                >
                  Chat Feed
                </Link>
              </div>
              <div>
                <Link
                  href="#chat_header"
                  onClick={() => window.location.replace("#chat_header")}
                >
                  Chat Header
                </Link>
              </div>
              <div>
                <Link
                  href="#ice_breaker"
                  onClick={() => window.location.replace("#ice_breaker")}
                >
                  Ice Breaker
                </Link>
              </div>
              <div>
                <Link
                  href="#message_bubble"
                  onClick={() => window.location.replace("#message_bubble")}
                >
                  Message Bubble
                </Link>
              </div>
              <div>
                <Link
                  href="#sending_message"
                  onClick={() => window.location.replace("#sending_message")}
                >
                  Sending Message
                </Link>
              </div>
              <div>
                <Link
                  href="#is_typing"
                  onClick={() => window.location.replace("#is_typing")}
                >
                  Is Typing
                </Link>
              </div>
              <div>
                <Link
                  href="#connection_bar"
                  onClick={() => window.location.replace("#connection_bar")}
                >
                  Connection Bar
                </Link>
              </div>
              <div>
                <Link
                  href="#scroll_down_bar"
                  onClick={() => window.location.replace("#scroll_down_bar")}
                >
                  Scroll Down Bar
                </Link>
              </div>
              <div>
                <Link
                  href="#new_message_form"
                  onClick={() => window.location.replace("#new_message_form")}
                >
                  New Message Form
                </Link>
              </div>

              <div style={{ height: "12px" }} />

              <div>
                <Link
                  href="#chat_settings"
                  onClick={() => window.location.replace("#chat_settings")}
                >
                  Chat Settings
                </Link>
              </div>
              <div>
                <Link
                  href="#chat_settings_top"
                  onClick={() => window.location.replace("#chat_settings_top")}
                >
                  Chat Settings Top
                </Link>
              </div>
              <div>
                <Link
                  href="#people_settings"
                  onClick={() => window.location.replace("#people_settings")}
                >
                  People Settings
                </Link>
              </div>
              <div>
                <Link
                  href="#photos_settings"
                  onClick={() => window.location.replace("#photos_settings")}
                >
                  Photos Settings
                </Link>
              </div>
              <div>
                <Link
                  href="#options_settings"
                  onClick={() => window.location.replace("#options_settings")}
                >
                  Options Settings
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

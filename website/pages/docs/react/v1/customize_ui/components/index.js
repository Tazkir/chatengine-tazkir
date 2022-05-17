import React, { Component } from "react";

import { Row, Col } from "antd";

import Link from "next/link";
import Head from "next/head";

import YouTubeBanner from "../../../../_YouTubeBanner";

import DocsLayout from "../../_layout";

export default class Components extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Components | Chat Engine Docs</title>
          <meta
            name="description"
            content="Learn how the Chat Engine SDK gives you NPM components so you can build a lovely chat quickly."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Components</h1>

            <h2 style={{ color: "#595959" }}>
              Import components and rebuild chat like Lego!
            </h2>

            <YouTubeBanner
              embedID="hobd0hewaeA"
              title="Learn Components on YouTube!"
              description="Chat Engine components let you assemble your own chat experience from scratch. Take a look at using components to build a React Support Chat window in under 3 minutes with Chat Engine components."
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="chat_list">
              Chat List
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { ChatList } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Chat List{" "}
              <span style={styles.codeLine}>{`<ChatList {...props} />`}</span>{" "}
              receives all Chat Engine props and will render a list of all chats
              for a given user.
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
              Chat Card
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { ChatCard } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Chat Card{" "}
              <span
                style={styles.codeLine}
              >{`<ChatCard {...props} chat={chat} />`}</span>{" "}
              receives all Chat Engine props, plus a chat object prop, and will
              render a chat card.
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
              New Chat Form
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { NewChatForm } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              New Chat Form{" "}
              <span
                style={styles.codeLine}
              >{`<NewChatForm {...props} />`}</span>{" "}
              receives all Chat Engine props, and will render a new chat form.
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
              Chat Feed
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { ChatFeed } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Chat Feed{" "}
              <span style={styles.codeLine}>{`<ChatFeed {...props} />`}</span>{" "}
              receives all Chat Engine props, and will render a chat feed for
              the active chat.
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
              Chat Header
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { ChatHeader } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Chat Header{" "}
              <span style={styles.codeLine}>{`<ChatHeader {...props} />`}</span>{" "}
              receives all Chat Engine props, and will render a chat feed for
              the active chat.
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

            <div style={styles.title} id="message_bubble">
              Message Bubble
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { MessageBubble } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Message Bubble{" "}
              <span
                style={styles.codeLine}
              >{`<MessageBubble {...props} lastMessage={lastMessage} message={message} nextMessage={nextMessage} />`}</span>{" "}
              receives a Chat Engine props, previous message, current message
              and next message as props. Then will render a Chat Engine message
              bubble.
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
              Is Typing
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { IsTyping } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Is Typing <span style={styles.codeLine}>{`<IsTyping />`}</span>{" "}
              renders all the typers from the Chat Engine context. The result is
              a list of "User is typing..." component.
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
              Connection Bar
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { ConnectionBar } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Connection Bar{" "}
              <span style={styles.codeLine}>{`<ConnectionBar />`}</span> renders
              the "Connecting..." component in the chat feed, to indicate a
              temporary disconnect to the server.
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
              Scroll Down Bar
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { ScrollDownBar } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Scroll Down Bar{" "}
              <span
                style={styles.codeLine}
              >{`<ScrollDownBar chat={chat} />`}</span>{" "}
              takes a chat prop, and renders the "Unread Messages" component in
              the chat feed, to indicate new unread messages are down in the
              feed.
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
              New Message Form
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { NewMessageForm } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              New Message Form{" "}
              <span
                style={styles.codeLine}
              >{`<NewMessageForm {...props} />`}</span>{" "}
              receives Chat Engine props then return a message form for the
              active chat.
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
              Chat Settings
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { ChatSettings } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Chat Settings{" "}
              <span style={styles.codeLine}>{`<ChatSettings />`}</span> uses the
              Context API to load the Chat Setting column for the currently
              active chat.
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
              Chat Settings Top
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { ChatSettingsTop } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Chat Settings Top{" "}
              <span style={styles.codeLine}>{`<ChatSettingsTop />`}</span> uses
              the Context API to load the Chat Title Form and members' icons
              component for the currently active chat.
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
              People Settings
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { PeopleSettings } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              People Settings{" "}
              <span style={styles.codeLine}>{`<PeopleSettings />`}</span> uses
              the Context API to load the chat members settings component for
              the currently active chat.
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
              Photos Settings
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { PhotosSettings } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              People Settings{" "}
              <span style={styles.codeLine}>{`<PhotosSettings />`}</span> uses
              the Context API to load all the photos for the currently active
              chat.
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
              Options Settings
            </div>

            <div style={styles.body}>
              <span
                style={styles.codeLine}
              >{`import { OptionsSettings } from 'react-chat-engine';`}</span>
            </div>

            <div style={styles.body}>
              Options Settings{" "}
              <span style={styles.codeLine}>{`<OptionsSettings />`}</span> uses
              the Context API to load chat options for the currently active
              chat.
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
                  href="#message_bubble"
                  onClick={() => window.location.replace("#message_bubble")}
                >
                  Message Bubble
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

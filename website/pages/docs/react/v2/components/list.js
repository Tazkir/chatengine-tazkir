import React, { Component } from "react";

import { Row, Col } from "antd";

import Head from "next/head";
import Link from "next/link";

import { SelectOutlined } from "@ant-design/icons";

import { DocsLayout } from "../_assets/layout";
import { styles } from "../_assets/styles";
import { ShortCutLink } from "../_assets/shortcuts";
import { Next } from "../_assets/next";

const storybookLink = (componentName, href) => {
  return (
    <div
      style={{
        border: "1px solid #1890ff",
        borderRadius: "4px",
        cursor: "pointer",
        padding: 8,
      }}
    >
      <SelectOutlined style={{ color: "#1890ff" }} />{" "}
      <Link href={href}>{componentName}</Link>
    </div>
  );
};
export default class Components extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Components List | Chat Engine Docs</title>
          <meta
            name="description"
            content="How to feed data into Chat Engine components."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Components List</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              All Components, listed out
            </h2>

            <div style={styles.body}>
              On this page, we list out all the available components, and link
              to in-depth documentation.
            </div>

            <div style={styles.title} id="chat_window">
              Chat Window
            </div>
            <div style={styles.body}>
              The Chat Window is for the complete chat engine experience. You
              can list out all Chats, Messages and Settings.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Chat Window code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <img
                alt="chat-engine-arcitecture"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/chat-window-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="chat_list">
              Chat List
            </div>
            <div style={styles.body}>
              The Chat List lists out all Chats available to you, a form to
              create new chats, and a loader to fetch more chats.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Chat List code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatlist--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-chat-list"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/chat-list-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="chat_form">
              Chat Form
            </div>
            <div style={styles.body}>
              The Chat Form is a component to create new chatrooms.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Chat Form code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatlist-chatform--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-chat-form"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/chat-form-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="chat_card">
              Chat Card
            </div>
            <div style={styles.body}>
              The Chat Card shows a Chat which you can click / select.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Chat Card code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatlist-chatcard--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-chat-card"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/chat-card-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="chat_feed">
              Chat Feed
            </div>
            <div style={styles.body}>
              The Chat Feed shows a Chat Header, list of Messages and a Message
              Form.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Chat Feed code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatfeed--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-chat-feed"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/chat-feed-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="chat_header">
              Chat Header
            </div>
            <div style={styles.body}>
              The Chat Header shows top-level data about the selected Chat.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Chat Header code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatfeed-chatheader--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-chat-header"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/chat-header-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="message_list">
              Message List
            </div>
            <div style={styles.body}>
              The Message List renders all the Messages in a list order.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Message List code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatfeed-messagelist--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-message-list"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/message-list-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="message">
              Message
            </div>
            <div style={styles.body}>
              The Message renders a Message object, its Attachments, and its
              read-receipts.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Message code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatfeed-messagelist-message--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-message"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/message-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="message_form">
              Message Form
            </div>
            <div style={styles.body}>
              The Message Form is a form to send new messages from.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Message Form code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatfeed-messageform--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-message-form"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/message-form-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="chat_settings">
              Chat Settings
            </div>
            <div style={styles.body}>
              The Chat Settings shows the chat title, People Settings, Photos
              Settings, and Options Settings in one component.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Chat Settings code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatsettings--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-chat-settings"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/chat-settings-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="people_settings">
              People Settings
            </div>
            <div style={styles.body}>
              The People Settings lets you invite and remove chat members.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "People Settings code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatsettings-peoplesettings--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-people-settings"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/people-settings-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="photos_settings">
              Photos Settings
            </div>
            <div style={styles.body}>
              The Photos Settings lets you see all sent images in a chat
              history.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Photos Settings code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatsettings-photossettings--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-photos-settings"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/photos-settings-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.title} id="options_settings">
              Options Settings
            </div>
            <div style={styles.body}>
              The Options Settings lets activate options like Delete the
              chatroom.
            </div>
            <div style={styles.body}>
              {storybookLink(
                "Options Settings code documentation",
                "https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow-chatsettings-optionssettings--default-story"
              )}
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              <img
                alt="chat-engine-options-settings"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/components/list/options-settings-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <Row gutter={24}>
              <Col xs={24} sm={12}>
                <Next
                  href="https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow--default-story"
                  title="Next: Storybook"
                  subtitle="Component props and code examples."
                />
              </Col>

              <Col xs={24} sm={12}>
                <Next
                  href="/docs/react/v2/sockets"
                  title="Next: Sockets"
                  subtitle="Pickup on new messages and more."
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
            <ShortCutLink addBreak href="#chat_window">
              Chat Window
            </ShortCutLink>

            <ShortCutLink href="#chat_list">Chat List</ShortCutLink>
            <ShortCutLink href="#chat_form">Chat Form</ShortCutLink>
            <ShortCutLink addBreak href="#chat_card">
              Chat Card
            </ShortCutLink>

            <ShortCutLink href="#chat_feed">Chat Feed</ShortCutLink>
            <ShortCutLink href="#chat_header">Chat Header</ShortCutLink>
            <ShortCutLink href="#message_list">Message List</ShortCutLink>
            <ShortCutLink href="#message">Message</ShortCutLink>
            <ShortCutLink addBreak href="#message_form">
              Message Form
            </ShortCutLink>

            <ShortCutLink href="#chat_settings">Chat Settings</ShortCutLink>
            <ShortCutLink href="#people_settings">People Settings</ShortCutLink>
            <ShortCutLink href="#photos_settings">Photos Settings</ShortCutLink>
            <ShortCutLink addBreak href="#options_settings">
              Options Settings
            </ShortCutLink>
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

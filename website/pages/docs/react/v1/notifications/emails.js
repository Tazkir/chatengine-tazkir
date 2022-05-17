import React, { Component } from "react";

import DocsLayout from "../_layout";

import Link from "next/link";
import Head from "next/head";

import { Row, Col } from "antd";

export default class DirectMessaging extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Email Notifications | Chat Engine Docs</title>
          <meta
            name="description"
            content="Alert your users of new messages with Chat Engine email notifications!"
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Email Notifications</h1>

            <h2 style={{ color: "#595959" }}>
              Keep users chatting with emails.
            </h2>

            <div style={styles.body}>
              Lots of user's aren't online and need a notification when they get
              messaged.
            </div>

            <div style={styles.body}>
              Chat Engine lets you send email notification, when users are
              offline!
            </div>

            <div style={styles.body}>
              Setting this up is very easy. All you have to do is enable Email
              Notifications in your project settings, and you're done!
            </div>

            <div style={styles.title}>Before You Begin</div>

            <div style={styles.body}>
              First, emails are sent to <b>offline</b> users. If the user has an
              open socket connection, emails won't deliver.
            </div>

            <div style={styles.body}>
              Second, your <b>user's need their email field completed</b> with
              valid emails. Otherwise emails won't delivere. To set emails, use
              the{" "}
              <Link href="https://rest.chatengine.io/#d5b0b6e3-1983-4446-9087-14f6aff5e33c">
                Patch User API call
              </Link>
              .
            </div>

            <div style={styles.body}>With that, let's get started!</div>

            <div style={styles.title}>Enable Email Notifications</div>

            <div style={styles.body}>
              First, lets go to your project settings and enable email
              notifications.
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
                <b>Go to Notifications in your Project Settings</b>
              </div>

              <img
                alt="chat-engine-email-notifications"
                src="https://chat-engine-assets.s3.amazonaws.com/email-notifications.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.body}>
              When you click the Enable button, there will be a form with some
              fields.
            </div>

            <div style={{ height: "22px" }} />

            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <div style={styles.body}>
                <b>Go to Notifications in your Project Settings</b>
              </div>

              <img
                alt="chat-engine-email-notifications-form"
                src="https://chat-engine-assets.s3.amazonaws.com/email-notifications-form-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.body}>There are three fields to know of:</div>

            <div style={styles.bulletPoint}>
              1. From Email: Is the email address notifications will be sent
              from (typically no-reply@myapp.com).
            </div>

            <div style={styles.bulletPoint}>
              2. Email Link: Your website link - to encourage the user to come
              back and answer.
            </div>

            <div style={styles.bulletPoint}>
              3. Company Name: Name of your app to put into the subject line and
              footnote.
            </div>

            <div style={{ height: "18px" }} />

            <div style={styles.body}>
              For example, Chat Engine's support Chat has email notifications
              enabled with From Email as <b>no_reply@chatengine.io</b>, email
              link as <b>chatengine.io</b> and company name as{" "}
              <b>Chat Engine</b>.
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
                <b>Example email notification</b>
              </div>

              <img
                alt="chat-engine-email-notifications-form"
                src="https://chat-engine-assets.s3.amazonaws.com/example-email-notification-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.title}>
              Now offline users will get neat email notifications, happy
              chatting!
            </div>

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
    paddingBottom: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    paddingBottom: "16px",
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

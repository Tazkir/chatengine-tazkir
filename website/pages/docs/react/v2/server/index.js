import React, { Component } from "react";

import { Row, Col } from "antd";

import Head from "next/head";
import Link from "next/link";

import { DocsLayout } from "../_assets/layout";
import { styles } from "../_assets/styles";
import { Next } from "../_assets/next";

export default class Server extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Chat Server | Chat Engine Docs</title>
          <meta
            name="description"
            content="How Chat Engine's hosted Chat Server works."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Chat Server</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              How it works
            </h2>

            <div style={styles.body}>
              All the data-storage, hosting, scaling and computing has been
              abstracted into Chat Engine's Chat Servers.
            </div>

            <div style={styles.body}>
              This means that you don't have to maintain any backend code while
              adding Chat into your app.
            </div>

            <div style={styles.body}>
              (Since hosting chat is expensive, this managed service also saves
              you a lot of money!)
            </div>

            <div style={styles.body}>
              Let's look at how the Chat Server fits into the overall
              architecture.
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
                alt="chat-engine-server-role"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/server/chat-server-role-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body}>
              The Server stores chat data, publishes events to Sockets, and
              completes API calls made by Hooks.
            </div>

            <div style={styles.body}>
              To understand the Chat Server, you just need docs on{" "}
              <Link href="https://rest.chatengine.io">Web Console</Link>,{" "}
              <Link href="https://rest.chatengine.io">Rest APIs</Link>, and{" "}
              <Link href="https://rest.chatengine.io">domain model</Link>.
            </div>

            <div style={styles.body}>
              There are docs on all three in the next pages.
            </div>

            <Row gutter={24}>
              <Col xs={24} sm={12}>
                <Next
                  href="https://rest.chatengine.io"
                  title="Next: Rest APIs"
                  subtitle="Postman collection for Chat Engine's APIs."
                />
              </Col>

              <Col xs={24} sm={12}>
                <Next
                  href="/docs/react/v2/server/domain_model"
                  title="Next: Domain Model"
                  subtitle="Database structure and domain model."
                />
              </Col>
            </Row>

            <div style={{ height: "56px" }} />
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

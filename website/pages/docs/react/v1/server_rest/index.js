import React, { Component } from "react";

import { Row, Col } from "antd";

import Link from "next/link";
import Head from "next/head";

import YouTubeBanner from "../../../_YouTubeBanner";

import DocsLayout from "../_layout";

export default class ServerRest extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Rest APIs | Chat Engine Docs</title>
          <meta
            name="description"
            content="Learn more about Chat Engines rest based Chat APIs."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Full Rest API Calls</h1>

            <YouTubeBanner
              embedID="aohApIBgblY"
              title="Learn Rest APIs on YouTube!"
              description="Chat Engine Rest APIs allow you to do Create, Read, Update and Destroy all data regarding Chat and your project."
            />

            <div style={{ height: "20px" }} />

            <h2 style={{ color: "#595959" }}>
              Go to{" "}
              <Link href="https://rest.chatengine.io">
                https://rest.chatengine.io
              </Link>
            </h2>
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
    fontSize: "18px",
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

import React, { Component } from "react";

import { Row, Col } from "antd";

import Head from "next/head";

import { CodeBlock, dracula } from "react-code-blocks";

import { DocsLayout } from "../_assets/layout";
import { styles } from "../_assets/styles";
import { ShortCutLink } from "../_assets/shortcuts";

export default class DomainModel extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Web Console | Chat Engine Docs</title>
          <meta
            name="description"
            content="Using the Web Console in Chat Engine."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Web Console</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              No-code access to the Chat Server
            </h2>

            <div style={styles.body}>
              You can Create, Read, Update, and Destroy (CRUD) chat data right
              from the website.
            </div>

            <div style={styles.body}>
              To start, go to Projects in the top right to see all of your
              projects.
            </div>

            <div style={styles.body}>
              Here you can create a new project, or drill into an existing one.
            </div>

            <div style={styles.body}>
              Once you're in, you can see Users, Chats, and other project
              related data.
            </div>

            <div style={styles.body}>
              This is where you can preform some CRUD actions.
            </div>

            <div style={styles.body}>
              Clicking around and updating data should be simple. If you have a
              question or feedback, please let us know.
            </div>

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
          ></Col>
        </Row>
      </DocsLayout>
    );
  }
}

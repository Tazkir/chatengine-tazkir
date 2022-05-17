import React from "react";

import { Row, Col } from "antd";

import DocsLayout from "./_layout";

import Head from "next/head";

import { styles } from "../../_styles";

const Docs = () => {
  return (
    <DocsLayout>
      <Head>
        <title>Introduction | Chat Engine Docs</title>
        <meta
          name="description"
          content="Want to learn about easily building great chats quickly? Here we learn how, with Chat Engine!"
        />
      </Head>

      <Row>
        <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
          <h1>Introduction</h1>

          <div style={styles.title}>Why Chat Engine?</div>

          <div style={styles.body}>
            Chat Engine makes building chat very easy{" "}
            <b>for people on a budget.</b>
          </div>

          <div style={styles.body}>
            It's perfect for people like freelancers and students, projects like
            start-ups and side-hustles.
          </div>

          <div style={styles.body}>
            Other SDKs such as Stream and SendBird start at $300 per month after
            a 14 day trial. That's too expensive!
          </div>

          <div style={styles.body}>
            We believe everybody should have{" "}
            <b>fair access to a great Chat API</b> while building their next big
            thing!
          </div>

          <div style={styles.title}>What is Chat Engine?</div>

          <div style={styles.body}>
            Chat Engine is an API which makes it easy to build chat services.
          </div>

          <div style={styles.body}>
            Building a chat from scratch takes a lot of time, code, and is
            expensive.
          </div>

          <div style={styles.body}>
            It's better to use a product instead of writing it from scratch.
          </div>

          <div style={styles.body}>
            We make it easy to build your chat idea in minutes.
          </div>

          <div style={styles.title}>What we make?</div>

          <div style={styles.body}>
            We provide a Rest API to host your chats, and NPM components to help
            with your Chat UI.
          </div>

          <div style={styles.body}>
            Our servers can host all your chat needs, and we spent time making
            pretty chat components!
          </div>

          <div style={styles.body}>
            In the next sections, we show you how to add our chat to any coding
            project. Let's go!
          </div>

          <div style={{ height: "56px" }} />
        </Col>
      </Row>
    </DocsLayout>
  );
};

export default Docs;

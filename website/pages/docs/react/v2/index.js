import React from "react";

import { Row, Col } from "antd";

import Head from "next/head";
import Link from "next/link";

import { styles } from "./_assets/styles";
import { DocsLayout } from "./_assets/layout";
import { Next } from "./_assets/next";

const Docs = () => {
  return (
    <DocsLayout>
      <Head>
        <title>Chat Engine Advanced | Documentation</title>
        <meta
          name="description"
          content="Want to learn about easily building great chats quickly? Here we learn how, with Chat Engine!"
        />
      </Head>

      <Row>
        <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
          <h1>Introduction</h1>

          <h2 style={{ color: "#595959" }}>
            Chat Engine Advanced documentation 🎉{" "}
          </h2>

          <div style={styles.body}>
            <span style={styles.codeLine}>
              npm install react-chat-engine-advanced
            </span>
          </div>

          <div style={styles.body}>
            Here we explain everything you need to understand Chat Engine.
          </div>

          <div style={styles.body}>
            The Documentation takes 45 minutes to read, and by the end, you will
            become an expert at building chat-apps in React.
          </div>

          <div style={styles.body}>
            Let's start with <b>"what and why"</b> Chat Engine, before we get
            into technical details.
          </div>

          <div style={styles.title}>What is Chat Engine?</div>

          <div style={styles.body}>
            Chat Engine is a set of frontend and backend components to make
            building chat experiences easy.
          </div>

          <div style={styles.body}>
            On the frontend, we provide Components, Sockets and Hooks to add
            chat features into any website.
          </div>

          <div style={styles.body}>
            On the backend, we provide a hosted chat Server which you can
            connect your frontend to.
          </div>

          <div style={styles.body}>
            Altogether, you can integrate Chat Engine into any project, new or
            mature, very easily.
          </div>

          <div style={styles.title}>Why use Chat Engine?</div>

          <div style={styles.body}>
            Chat Engine aims to be <b>extremely developer friendly</b>.
          </div>

          <div style={styles.body}>
            First, we aim to have great documentation, so you can quickly
            undserstand this powerful tool.
          </div>

          <div style={styles.body}>
            Second, Chat Engine has a freemium, fair pricing plan.
          </div>

          <div style={styles.body}>
            With Chat Engine, you can build anything quickly, for free.
          </div>

          <div style={styles.title}>How does Chat Engine work?</div>

          <div style={styles.body}>
            To learn, we recommend starting with our{" "}
            <Link href="/docs/react/v2/getting_started">Getting Started</Link>{" "}
            tutorial.
          </div>

          <div style={styles.body}>
            For more in-depth documentation, skip to the{" "}
            <Link href="/docs/react/v2/overview">Overview</Link>.
          </div>

          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Next
                primary={true}
                href="/docs/react/v2/getting_started"
                title="Getting Started"
                subtitle="Project based course to get started."
              />
            </Col>

            <Col xs={24} sm={12}>
              <Next
                href="/docs/react/v2/overview"
                title="Overview"
                subtitle="In-depth, conceptual documentation."
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </DocsLayout>
  );
};

export default Docs;

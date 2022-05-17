import React, { Component } from "react";

import { Row, Col } from "antd";

import Link from "next/link";
import Head from "next/head";

import YouTubeBanner from "../../../../_YouTubeBanner";

import DocsLayout from "../../_layout";

import { CodeBlock, dracula } from "react-code-blocks";

export default class CustomCSS extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Custom CSS | Chat Engine Docs</title>
          <meta
            name="description"
            content="Learn how to customize Chat Engine's look and feel with custom CSS hooks."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Custom CSS</h1>

            <h2 style={{ color: "#595959" }}>
              Learn to change the colors, fonts and everything style wise.
            </h2>

            <div style={{ marginBottom: "24px" }} />

            <YouTubeBanner
              embedID="3YM8e2UdQgw"
              title="Learn Custom CSS on YouTube!"
              description="Chat Engine CSS hooks allow you to do change the look and feel (CSS) of any component we render for you. Learn how to migrate change the CSS of everything in Chat Engine within 3 minutes!"
            />

            <div style={{ marginBottom: "20px" }} />

            <div style={styles.body}>This page is very simple.</div>

            <div style={styles.body}>
              If there is an element you wish to customize stylistically or
              hide: every element in ChatEngine has a classname or id. You can
              hook into this with your .css file and change the CSS.
            </div>

            <div style={styles.body}>
              To find the element classnames, right click the web-page, Inspect,
              and use the element selector to get the classname for the element
              of interest.
            </div>

            <div style={styles.body}>
              Important: to make sure the change gets applied, you can use the{" "}
              <span style={styles.codeLine}>!important;</span> at the end of
              each CSS change in your .css file.
            </div>

            <div style={styles.title} id="fonts">
              Fonts
            </div>

            <div style={styles.body}>
              Chat Engine inherits your parent Font Family.
            </div>

            <div style={styles.body}>
              If you want your Chat UI to have custom fonts, wrap your Chat
              Engine components in a div with the Font Family of your choice.
            </div>

            <CodeBlock
              theme={dracula}
              text={customFonts}
              language="jsx"
              showLineNumbers={true}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.title} id="scroll_bars">
              Scroll Bars
            </div>

            <div style={styles.body}>
              Due to the "scrolly nature" of the Chat UI, there can be a lot of
              scroll bars.
            </div>

            <div style={styles.body}>
              If you want to hide them, use the following code in your top-level
              CSS file (app.css or index.css).
            </div>

            <CodeBlock
              theme={dracula}
              text={noScrollBars}
              language="jsx"
              showLineNumbers={true}
            />

            <div style={{ marginBottom: "24px" }} />

            <div style={{ height: "56px" }} />
          </Col>

          <Col xs={0} sm={4} md={8} style={styles.docsColumn}>
            <div style={{ paddingLeft: "24px", fontSize: "16px" }}>
              <div>
                <Link
                  href="#fonts"
                  onClick={() => window.location.replace("#fonts")}
                >
                  Fonts
                </Link>
              </div>

              <div style={{ height: "12px" }} />

              <div>
                <Link
                  href="#scroll_bars"
                  onClick={() => window.location.replace("#scroll_bars")}
                >
                  Scroll Bars
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

const customFonts = `<div style={{ fontFamily: 'Avenir' }}>
    <ChatEngine {...} />
</div>`;

const noScrollBars = `::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
}`;

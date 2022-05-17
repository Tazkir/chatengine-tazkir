import React, { Component } from "react";

import { Row, Col } from "antd";

import Link from "next/link";
import Head from "next/head";

import DocsLayout from "../_layout";

export default class Timezones extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Timezones | Chat Engine Docs</title>
          <meta
            name="description"
            content="Learn how to sync a Chat Engine's Chat UI with the user's timezone instantly."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Timezones</h1>

            <h2 style={{ color: "#595959" }}>
              Customize the view for where people are in the world!
            </h2>

            <div style={{ marginBottom: "24px" }} />

            <div style={styles.body}>This page is very simple.</div>

            <div style={styles.body}>
              Chat Engine, by default, runs off{" "}
              <Link href="https://www.google.com/search?q=GMT+time">
                GMT time
              </Link>
              .
            </div>

            <div style={styles.body}>
              To support various timezones, and per user, we have an{" "}
              <span style={styles.codeLine}>{`offset={/*Integer*/}`}</span>{" "}
              prop.
            </div>

            <div style={styles.body}>
              This props takes a (positive or negative) integer value and shifts
              the time (by hours) accordingly.
            </div>

            <div style={styles.title} id="cities">
              Cities
            </div>

            <div style={styles.body}>
              Here are some example cities are their corresponding offset
              relative to GMT time:
            </div>

            <div style={styles.bulletPoint}>San Francisco: -7</div>
            <div style={styles.bulletPoint}>New York Time: -4</div>
            <div style={styles.bulletPoint}>London: 1</div>
            <div style={styles.bulletPoint}>Moscow: 3</div>
            <div style={styles.bulletPoint}>Mumbai: 6</div>
            <div style={styles.bulletPoint}>Tokyo: 9</div>

            <div style={styles.body}></div>

            <div style={styles.title} id="basic_example">
              Basic Example
            </div>

            <div style={styles.body}>
              If you feed the prop into the{" "}
              <span style={styles.codeLine}>{`<ChatEngine offset={} />`}</span>{" "}
              component, a timezone update will apply across the entire
              experience.
            </div>

            <div style={styles.title} id="custom_example">
              Custom Example
            </div>

            <div style={styles.body}>
              For custom experiences, where you are using various components,
              feed the offset prop into the{" "}
              <span style={styles.codeLine}>{`<Socket offset={} />`}</span> or{" "}
              <span style={styles.codeLine}>{`<ChatSocket offset={} />`}</span>.
              Sockets are what propegate the offset context.
            </div>

            <div style={{ marginBottom: "24px" }} />

            <div style={{ height: "56px" }} />
          </Col>

          <Col xs={0} sm={4} md={8} style={styles.docsColumn}>
            <div style={{ paddingLeft: "24px", fontSize: "16px" }}>
              <div>
                <Link
                  href="#cities"
                  onClick={() => window.location.replace("#cities")}
                >
                  Cities
                </Link>
              </div>

              <div style={{ height: "12px" }} />

              <div>
                <Link
                  href="#basic_example"
                  onClick={() => window.location.replace("#basic_example")}
                >
                  Basic Example
                </Link>
              </div>
              <div>
                <Link
                  href="#custom_example"
                  onClick={() => window.location.replace("#custom_example")}
                >
                  Custom Example
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

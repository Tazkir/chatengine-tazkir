import React from "react";

import Head from "next/head";

import { Row, Col } from "antd";

import YouTubeBanner from "../../../../_YouTubeBanner";
import DocsLayout from "../../_layout";

const ReactSupportChat = () => {
  return (
    <DocsLayout>
      <Head>
        <title>Support Chat | Chat Engine Docs</title>
        <meta
          name="description"
          content="Build a Chat App in Next.JS using the Chat Engine framework."
        />
      </Head>

      <Row>
        <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
          <h1>Build a Next.JS Chat App</h1>

          <div
            style={{
              padding: "12px",
              backgroundColor: "#e8e8e8",
              paddingBottom: "12px",
              marginBottom: "12px",
            }}
          >
            <div style={styles.body}>
              <b>What we'll be building...</b>
            </div>
            <img
              alt="support-chat-by-chat-engine"
              src="https://chat-engine-assets.s3.amazonaws.com/tutorials/nextjs-chat-tutorial/thumb.png"
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ height: "32px" }} />

          <div style={styles.body}>This video + post is rather short 👌</div>

          <div style={styles.body}>
            We will plug <span style={styles.codeLine}>{"<ChatEngine />"}</span>{" "}
            into a Next.JS app and show the tricks needed to make it work.
          </div>

          <div style={styles.body}>
            We will also show adding authentication, and customizing the CSS
            theme.
          </div>

          <div style={styles.body}>
            I recommend watching this YouTube video for understanding 👇
          </div>

          <div style={{ height: "24px" }} />

          <YouTubeBanner
            embedID="Gbnjn-1Q2d8"
            title="Build Next.JS Chat with YouTube"
            description="This video will teach you about using Chat Engine with the Next JS framework and the tricks you need to make it work!"
          />

          <div style={{ height: "32px" }} />

          <div style={styles.title}>
            <b>NOTE: </b>All the Code is right below 👇👇
          </div>

          <div style={styles.body}>
            For simplicity, I wrote out all the code and broke it up into 4
            steps.
          </div>

          <div style={styles.body}>
            Just in case your get lost, or your code doesn't work, enjoy!
          </div>

          <div style={styles.title}>1 - Boilerplate Project</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/nextjs-chat-tutorial/">
              this link here (main branch)
            </a>{" "}
            to download the project code.
          </div>

          <div style={styles.body}>
            Once downloaded, run <span style={styles.codeLine}>yarn</span> and
            then <span style={styles.codeLine}>yarn dev</span>.
          </div>

          <div style={styles.body}>
            Now you should have the starter website up and running.
          </div>

          <div style={styles.title}>2 - Context API</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/nextjs-chat-tutorial/pull/1/files">
              this link here
            </a>{" "}
            to see the code changes for the Context API implementation.
          </div>

          <div style={styles.body}>
            Now you should have your app wrapped in a Context Provider - so all
            pages have instant access to the current User's{" "}
            <span style={styles.codeLine}>username</span> and{" "}
            <span style={styles.codeLine}>secret</span> 👍
          </div>

          <div style={styles.title}>3 - Authentication Page</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/nextjs-chat-tutorial/pull/2/files">
              this link here
            </a>{" "}
            to see the code changes for the Auth Page implementation.
          </div>

          <div style={styles.body}>
            Be sure to go to <a href="https://chatengine.io">chatengine.io</a>,
            create a Project, and replace the{" "}
            <span style={styles.codeLine}>"Private-Key"</span> with your true
            value in the <span style={styles.codeLine}>pages/index.js</span>{" "}
            file.
          </div>

          <div style={styles.body}>
            Additionally, run{" "}
            <span style={styles.codeLine}>yarn add axios</span> to make the API
            call work.
          </div>

          <div style={styles.body}>
            Now you should have the a pretty Authentication Page under the{" "}
            <span style={styles.codeLine}>/</span> route where people can create
            accounts, or log into existing ones.
          </div>

          <div style={styles.title}>4 - Chat Page</div>

          <div style={styles.body}>
            Go to{" "}
            <a href="https://github.com/alamorre/nextjs-chat-tutorial/pull/3/files">
              this link here
            </a>{" "}
            to see the code changes for the{" "}
            <span style={styles.codeLine}>{"<ChatEngine/>"}</span> Chat Page
            implementation.
          </div>

          <div style={styles.body}>
            Be sure to run{" "}
            <span style={styles.codeLine}>yarn add react-chat-engine</span> to
            pull in the components needed.
          </div>

          <div style={styles.body}>
            Notice the{" "}
            <a href="https://github.com/alamorre/nextjs-chat-tutorial/blob/911c35fad8f89be508542ab513832506038665ba/pages/chats.js#L8-L13">
              Dynamic importing
            </a>
            , and only rendering if the{" "}
            <span style={styles.codeLine}>document</span> variable is present.
            Those are the two checks needed to let Chat Engine run in a Next.JS
            application ✌️
          </div>

          <div style={styles.body}>
            Now your user will see a pretty Chats Page once the login or
            sign-up!
          </div>

          <div style={styles.title}>You're done 🎉 </div>

          <div style={styles.body}>
            If you have any questions, requests, or feedback, feel free to leave
            a comment.
          </div>

          <div style={styles.body}>
            Also subscribing / liking the video helps our content efforts a ton
            😃
          </div>

          <div style={styles.body}>
            We hope you enjoyed this content, happy chatting!
          </div>

          <div style={{ height: "56px" }} />
        </Col>
      </Row>
    </DocsLayout>
  );
};

export default ReactSupportChat;

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

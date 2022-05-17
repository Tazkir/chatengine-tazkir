import React, { Component } from "react";

import { Row, Col } from "antd";

import Head from "next/head";
import Link from "next/link";

import { CodeBlock, dracula } from "react-code-blocks";

import { DocsLayout } from "../_assets/layout";
import { styles } from "../_assets/styles";
import { ShortCutLink } from "../_assets/shortcuts";
import { Next } from "../_assets/next";

export default class Components extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Components | Chat Engine Docs</title>
          <meta
            name="description"
            content="How Components work at a Chat Engine."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Components</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              How it Works
            </h2>

            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <CodeBlock
                text={exampleComponent}
                language="jsx"
                showLineNumbers={false}
                theme={dracula}
              />

              <div style={styles.body} id="before_your_begin" />

              <img
                alt="chat-engine-arcitecture"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/react-chat-engine-components-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body}>
              Chat Engine Components take props, and return UI elements on your
              website.
            </div>

            <div style={styles.body}>
              For example, the{" "}
              <span style={styles.codeLine}>{`<MultiChatWindow />`}</span>{" "}
              component (seen above) creates a complete multi-chat window.
            </div>

            <div style={styles.body}>
              Each prop falls into one of the following categories:
            </div>

            <div style={{ ...{ paddingLeft: 12 }, ...styles.body }}>
              <b>Data Props:</b> the content that you see on the screen <br />
              <b>State Props:</b> representing the lifecycle stage of the
              component <br />
              <b>Hooks Props:</b> event-based callback functions <br />
              <b>Style Props:</b> custom styling for the component <br />
              <b>Render Function Props:</b> overrides sub-components for further
              customization <br />
            </div>

            <div style={styles.body}></div>

            <div style={styles.title} id="data_props">
              Data Props
            </div>

            <div style={styles.body}>
              Data props are the objects, values, and content you see on the
              screen.
            </div>

            <div style={styles.body}>
              Examples are <span style={styles.codeLine}>messages</span> and{" "}
              <span style={styles.codeLine}>chats</span>.
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
                <b>Before and After Data Props</b>
              </div>
              <div style={{ position: "relative", height: "400px" }}>
                <img
                  alt="chat-engine-no-props"
                  src="https://chat-engine-assets.s3.amazonaws.com/docs/react-chat-engine-empty-min.png"
                  style={{
                    width: "60%",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    border: "1px solid red",
                  }}
                />
                <img
                  alt="chat-engine-data-props"
                  src="https://chat-engine-assets.s3.amazonaws.com/docs/react-chat-eninge-data-props-min.png"
                  style={{
                    width: "60%",
                    position: "absolute",
                    bottom: "0px",
                    right: "0px",
                    border: "1px solid blue",
                  }}
                />
              </div>
            </div>

            <div style={styles.body}>
              Clearly without these props, the components would have no content
              and be empty.
            </div>

            <div style={styles.body}>
              Each component lists their Data Props in the{" "}
              <Link href="https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow--default-story">
                Storybook documentation
              </Link>
              .
            </div>

            <div style={styles.title} id="state_props">
              State Props
            </div>

            <div style={styles.body}>
              State props represent the lifecycle stage of a component in the
              website.
            </div>

            <div style={styles.body}>
              These props will show what is open, loading, selected and more.
            </div>

            <div style={styles.body}>
              Examples are <span style={styles.codeLine}>activeChatId</span>,{" "}
              <span style={styles.codeLine}>username</span>, and{" "}
              <span style={styles.codeLine}>isChatFeedLoading</span>.
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
                <b>Before and After State Props</b>
              </div>
              <div style={{ position: "relative", height: "400px" }}>
                <img
                  alt="chat-engine-data-props"
                  src="https://chat-engine-assets.s3.amazonaws.com/docs/react-chat-eninge-data-props-min.png"
                  style={{
                    width: "60%",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    border: "1px solid red",
                  }}
                />
                <img
                  alt="chat-engine-data-state-props"
                  src="https://chat-engine-assets.s3.amazonaws.com/docs/react-chat-engine-data-state-props-min.png"
                  style={{
                    width: "60%",
                    position: "absolute",
                    bottom: "0px",
                    right: "0px",
                    border: "1px solid blue",
                  }}
                />
              </div>
            </div>

            <div style={styles.body}>
              Without these props, the component's state / lifecycle stage would
              not be clear.
            </div>

            <div style={styles.body}>
              Each component lists their State Props in the{" "}
              <Link href="https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow--default-story">
                Storybook documentation
              </Link>
              .
            </div>

            <div style={styles.title} id="hooks_props">
              Hooks Props
            </div>

            <div style={styles.body}>
              Hooks Props let you trigger functions when UI events occur.
            </div>

            <div style={styles.body}>
              For example, <span style={styles.codeLine}>onChatCardClick</span>,
              or <span style={styles.codeLine}>onMessageFormSubmit</span>.
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
                <b>Hook Props in a Component</b>
              </div>
              <CodeBlock
                text={`import { MultiChatWindow } from 'react-chat-engine-advanced';\nimport { ChatObject, MessageObject } from 'react-chat-engine-advanced';\n\nexport const ChatApp = (\n\tchats: ChatObject[],\n\tmessages: MessageObject[],\n\tactiveChatId: number,\n\tusername: string\n\tsetActiveChatId: (chatId:number) => void\n) => {\n\treturn (\n\t\t<MultiChatWindow\n\t\t\tchats={chats}\n\t\t\tmessages={messages}\n\t\t\tactivaChatId={activeChatId}\n\t\t\tusername={username}\n\t\t\t// HOOK PROP BELOW\n\t\t\tonCharCardClick={(chatId: number) => setActiveChatId(chatId)}\n\t\t/>\n\t)\n}`}
                language="jsx"
                showLineNumbers={true}
                theme={dracula}
              />
            </div>

            <div style={styles.body}>
              These props are needed to update Data and State at the right
              times.
            </div>

            <div style={styles.body}>
              Each component lists their Hooks Props in the{" "}
              <Link href="https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow--default-story">
                Storybook documentation
              </Link>
              .
            </div>

            <div style={styles.body}>
              (We recommend pairing hook props with Chat Engine's{" "}
              <Link href="/docs/react/v2/hooks">Chat Engine Hooks</Link> for
              seamless state management)
            </div>

            <div style={styles.title} id="style_props">
              Style Props
            </div>

            <div style={styles.body}>
              Style props lets you pass in{" "}
              <span style={styles.codeLine}>CSSProperties</span> objects to
              customize a component's look and feel.
            </div>

            <div style={styles.body}>
              Style props are often used to make the components fit your app's
              existing theme.
            </div>

            <div style={styles.body}>
              For example,{" "}
              <span style={styles.codeLine}>chatFeedColumnStyle</span>.
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
                <b>Before and After Style Props</b>
              </div>
              <div style={{ position: "relative", height: "400px" }}>
                <img
                  alt="chat-engine-no-style-props"
                  src="https://chat-engine-assets.s3.amazonaws.com/docs/react-chat-engine-no-style-props-min.png"
                  style={{
                    width: "60%",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                  }}
                />
                <img
                  alt="chat-engine-style-props"
                  src="https://chat-engine-assets.s3.amazonaws.com/docs/react-chat-engine-style-props-min.png"
                  style={{
                    width: "60%",
                    position: "absolute",
                    bottom: "0px",
                    right: "0px",
                  }}
                />
              </div>
            </div>

            <div style={styles.body}>
              In this example, we set a border for each component and
              sub-component with a custom Style prop. This shows which parts of
              the UI you can customize.
            </div>

            <div style={styles.body}>
              Each component lists their Style Props in the{" "}
              <Link href="https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow--default-story">
                Storybook documentation
              </Link>
              .
            </div>

            <div style={styles.title} id="render_function_props">
              Render Function Props
            </div>

            <div style={styles.body}>
              Render Function Props let you replace part of the component with
              your own Functional Component.
            </div>

            <div style={styles.body}>
              With these props, you can customize the chat experience in a very
              advanced way.
            </div>

            <div style={styles.body}>
              For example, <span style={styles.codeLine}>renderChatFeed</span>,
              or <span style={styles.codeLine}>renderMessageForm</span>.
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
                <b>Render Function Props in a Component</b>
              </div>

              <CodeBlock
                text={`import { MultiChatWindow } from 'react-chat-engine-advanced';\nimport { ChatObject, MessageObject, ChatFeedProps } from 'react-chat-engine-advanced';\n\nexport const ChatApp = (\n\tchats: ChatObject[],\n\tmessages: MessageObject[],\n\tactiveChatId: number,\n\tusername: string\n) => {\n\treturn (\n\t\t<MultiChatWindow\n\t\t\tchats={chats}\n\t\t\tmessages={messages}\n\t\t\tactivaChatId={activeChatId}\n\t\t\tusername={username}\n\t\t\t// RENDER FUNCTION PROP BELOW\n\t\t\trenderChatFeed={(props: ChatFeedProps) => (\n\t\t\t\t<>\n\t\t\t\t\t{Object.keys(props).map((key) => (\n\t\t\t\t\t\t<div>{key}</div>\n\t\t\t\t\t))}\n\t\t\t\t</>\n\t\t\t)}\n\t\t/>\n\t)\n}`}
                language="jsx"
                showLineNumbers={true}
                theme={dracula}
              />

              <div style={{ ...{ paddingTop: "16px" }, ...styles.body }}>
                <b>
                  We replaced the Chat Feed with a list of all Chat Feed props.
                </b>
              </div>

              <img
                alt="chat-engine-render-function-props"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/react-chat-engine-render-function-props-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body}>
              In this example, the{" "}
              <span style={styles.codeLine}>renderChatFeed</span> function
              replaces the Chat Feed with your own, custom code.
            </div>

            <div style={styles.body}>
              As you can see in the example, all render functions get relevant
              state data as function arguments - so you can rebuild a responsive
              Chat Feed yourself!
            </div>

            <div style={styles.body}>
              Each component lists their Render Function Props in the{" "}
              <Link href="https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow--default-story">
                Storybook documentation
              </Link>
              .
            </div>

            <Next
              href="/docs/react/v2/components/list"
              title="Next: Components List"
              subtitle="All components, listed out."
            />

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
            <ShortCutLink href="#data_props">Data Props</ShortCutLink>
            <ShortCutLink href="#state_props">State Props</ShortCutLink>
            <ShortCutLink href="#hooks_props">Hooks Props</ShortCutLink>
            <ShortCutLink href="#render_function_props">
              Render Function Props
            </ShortCutLink>
            <ShortCutLink href="#style_props">Style Props</ShortCutLink>
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

const exampleComponent = `import { MultiChatWindow } from 'react-chat-engine-advanced';

export const ChatUI = (props) => {
  return <MultiChatWindow {...props} />;
};`;

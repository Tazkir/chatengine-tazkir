import React from "react";

import { Row, Col } from "antd";

import Head from "next/head";
import Link from "next/link";

import { CodeBlock, dracula } from "react-code-blocks";

import { styles } from "../_assets/styles";
import { DocsLayout } from "../_assets/layout";
import { Next } from "../_assets/next";
import { ShortCutLink } from "../_assets/shortcuts";

const Docs = () => {
  return (
    <DocsLayout>
      <Head>
        <title>Getting Started | Chat Engine Docs</title>
        <meta
          name="description"
          content="This page shows you how to quickly setup Chat Engine."
        />
      </Head>

      <Row>
        <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
          <h1>Getting Started</h1>

          <h2 style={{ color: "#595959" }}>Initial Setup</h2>

          <div style={styles.body}>The best way to learn is by example.</div>

          <div style={styles.body}>
            In this course, we will create an example chat app in five steps:
          </div>

          <div style={{ ...{ paddingLeft: 12 }, ...styles.body }}>
            <b>1.</b> Create a React App
            <br />
            <b>2.</b> Setup a chat Server
            <br />
            <b>3.</b> Connect a Hook to the Server
            <br />
            <b>4.</b> Connect a Socket to the Hook
            <br />
            <b>5.</b> Connect Components to the Hook
            <br />
          </div>

          <div style={styles.body}>
            When all these parts are connected, you're done!
          </div>

          <div style={styles.body}>
            Let's get started with creating the React App.
          </div>

          <div style={styles.body} />

          <div
            style={{
              padding: "12px",
              backgroundColor: "#e8e8e8",
              paddingBottom: "12px",
              marginBottom: "12px",
            }}
          >
            <div style={styles.body}>
              <b>What you'll build</b>
            </div>

            <img
              alt="chat-engine-example"
              src="https://camo.githubusercontent.com/22a6b0f2f4b1ab4e15ec0c6c429d1bbcc058b4c96dcdb9f68965e9f2fcc4c3c7/68747470733a2f2f636861742d656e67696e652d6173736574732e73332e616d617a6f6e6177732e636f6d2f72656163742d636861742d656e67696e652e676966"
              style={{ width: "100%" }}
            />
          </div>

          <div style={styles.title} id="create_react_app">
            1. Create React App
          </div>

          <div style={styles.body}>
            In this guide, we'll use{" "}
            <span style={styles.codeLine}>create-react-app</span> to make the
            website.
          </div>

          <div style={styles.body}>
            Run the following code in a terminal, in your folder of choice:
          </div>

          <div style={styles.body}>
            <span style={styles.codeLine}>
              npx create-react-app ce-quick-start
            </span>
          </div>

          <div style={styles.body}>
            <span style={styles.codeLine}>cd ce-quick-start</span>
          </div>

          <div style={styles.body}>
            <span style={styles.codeLine}>
              npm install react-chat-engine-advanced
            </span>
          </div>

          <div style={styles.body}>
            <span style={styles.codeLine}>npm run start</span>
          </div>

          <div style={styles.body}>
            Now you have a basic React App with the Chat Engine components
            installed.
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
              <b>Basic React App</b>
            </div>

            <img
              alt="create-react-app"
              src="https://chat-engine-assets.s3.amazonaws.com/docs/build_a_chat_app/create-react-app-min.png"
              style={{ width: "75%", marginLeft: "12.5%" }}
            />
          </div>

          <div style={styles.body}>
            Next, let's start a Chat Server to host the chatrooms.
          </div>

          <div style={styles.title} id="server">
            2. Setup Chat Server
          </div>

          <div style={styles.body}>
            All the data-storage, hosting, scaling and computing has been
            abstracted into Chat Engine's Chat Servers.
          </div>

          <div style={styles.body}>
            This means that you don't have to maintain any backend code while
            adding Chat into your app.
          </div>

          <div style={styles.body}>
            When you setup a Project on{" "}
            <Link href="https://chatengine.io">chatengine.io</Link> you get your
            own Chat Server instance.
          </div>

          <div style={styles.body}>
            This is what we'll be connecting our app to.
          </div>

          <div style={styles.body}>
            To start, go to{" "}
            <Link href="https://chatengine.io">chatengine.io</Link>,
            login/sign-up, and create a project.
          </div>

          <div style={styles.body}>(I'll call mine "ce-quick-start")</div>

          <div style={styles.body}>
            Once a project is created, you'll see a dashboard to manage your
            Chat Server and data
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
              <b>New Project Dashboard</b>
            </div>

            <img
              alt="new-chat-engine-dashboard"
              src="https://chat-engine-assets.s3.amazonaws.com/docs/build_a_chat_app/new-project-dashboard-min.png"
              style={{ width: "75%", marginLeft: "12.5%" }}
            />
          </div>

          <div style={styles.body}>
            The web-console is the easy way to manipulate your Chat Server and
            data. (You can also interact with your Chat Server using the{" "}
            <Link href="https://rest.chatengine.io">Rest APIs</Link>.)
          </div>

          <div style={styles.body}>
            Since all chatroom API calls require User Authentication, let's make
            our first Chat User.
          </div>

          <div style={styles.body}>
            Go to the "Users" tab and click "New User".
          </div>

          <div style={styles.body}>
            The <b>username</b> and <b>secret</b> will be needed for the next
            section (don't forget them).
          </div>

          <div style={styles.body}>
            (Note: The Private-Key and a User's Secret are two different
            things.)
          </div>

          <div style={styles.body}>
            Now that we have a User in our Chat Server, let's start coding the
            React App!
          </div>

          <div style={styles.title} id="hooks">
            3. Connect a Hook to the Server
          </div>

          <div style={styles.body}>
            To start, let's authenticate our new User to the Chat Server. We can
            do this with Chat Engine Hooks.
          </div>

          <div style={styles.body}>
            At Chat Engine, Hooks put all the chat-app logic into a function
            which you can import, including authentication.
          </div>

          <div style={styles.body}>
            Let's add some code and see how this works. Add the following code
            into <span style={styles.codeLine}>src/App.js</span>
          </div>

          <CodeBlock
            text={hooksCode}
            language="jsx"
            showLineNumbers={true}
            theme={dracula}
          />

          <div style={styles.body} />

          <div style={styles.body}>
            (Replace <span style={styles.codeLine}>PROJECT_ID</span>,{" "}
            <span style={styles.codeLine}>USER_NAME</span>,{" "}
            <span style={styles.codeLine}>USER_SECRET</span> with your own
            values)
          </div>

          <div style={styles.body}>
            <span style={styles.codeLine}>useMultiChatLogic</span> takes user
            auth arguments and returns a state management Object.
          </div>

          <div style={styles.body}>
            Under the hood,{" "}
            <span style={styles.codeLine}>useMultiChatLogic</span> makes a
            server connection, and returns all relevant data in the{" "}
            <span style={styles.codeLine}>chatProps</span> Object.
          </div>

          <div style={styles.body}>
            It's vital for connecting the Server, Sockets, and Components
            together.
          </div>

          <div style={styles.body}>
            Next, let's connect the Socket, then Components.
          </div>

          <div style={styles.title} id="sockets">
            4. Connect a Socket to the Hook
          </div>

          <div style={styles.body}>Every chat-app needs a web-socket.</div>

          <div style={styles.body}>
            At Chat Engine, Sockets subscribe to the Chat Server, and listen for
            when chat events occur. Like a new message or chatroom.
          </div>

          <div style={styles.body}>
            Let's add our Socket to pickup on these new events.
          </div>

          <CodeBlock
            text={addSocketsCode}
            language="jsx"
            showLineNumbers={true}
            theme={dracula}
          />

          <div style={styles.body} />

          <div style={styles.body}>
            In this code, we connected our Socket to the chat-app via Hooks. Now
            we can update <span style={styles.codeLine}>chatProps</span> on new
            events.
          </div>

          <div style={styles.body}>
            For example, when we get a new message,{" "}
            <span style={styles.codeLine}>onNewMessage</span> will add the
            message to <span style={styles.codeLine}>chatProps.messages</span>
          </div>

          <div style={styles.body}>
            Finally, let's connect the Components. So we can see{" "}
            <span style={styles.codeLine}>chatProps.messages</span> on the
            screen!
          </div>

          <div style={styles.title} id="components">
            5. Connect Components to the Hook
          </div>

          <div style={styles.body}>
            Chat Engine Components take props, and return UI elements on your
            website.
          </div>

          <div style={styles.body}>
            Let's connect the{" "}
            <span style={styles.codeLine}>MultiChatWindow</span> component to{" "}
            <span style={styles.codeLine}>chatProps</span>.
          </div>

          <div style={styles.body}>
            Add the following code to{" "}
            <span style={styles.codeLine}>src/App.js</span>
          </div>

          <CodeBlock
            text={addComponentsCode}
            language="jsx"
            showLineNumbers={true}
            theme={dracula}
          />

          <div style={styles.body} />

          <div style={styles.body}>
            In this code, we connected our Components to the chat-app via Hooks.
            Now we can update <span style={styles.codeLine}>chatProps</span>{" "}
            when UI events occur.
          </div>

          <div style={styles.body}>
            For example, when we click "Send Message",{" "}
            <span style={styles.codeLine}>onMessageFormSubmit</span> will add
            the message to{" "}
            <span
              style={styles.codeLine}
            >{`<MultiChatWindow messages={chatProps.messages} />`}</span>
          </div>

          <div style={styles.title} id="final_code">
            Final Code
          </div>

          <div style={styles.body}>
            We can compress our code to the following:
          </div>

          <CodeBlock
            text={finalCode}
            language="jsx"
            showLineNumbers={true}
            theme={dracula}
          />

          <div style={styles.body} />

          <div style={styles.body}>
            In summary, all Chat Apps are made of the same four parts
          </div>

          <div style={{ ...{ paddingLeft: 12 }, ...styles.body }}>
            <b>1.</b> A Chat Server <br />
            <b>2.</b> A Socket <br />
            <b>3.</b> Chat Components <br />
            <b>4.</b> All connected by functions (Hooks) <br />
          </div>

          <div style={styles.body}>
            At Chat Engine, we call these four parts:{" "}
            <b>Components, Sockets, Hooks and Server</b>.
          </div>

          <div style={styles.body}>
            We give you each of them to assemble and customize!
          </div>

          <div style={styles.body}>
            If you're looking to over each part conceptually and in-depth, we
            recommend starting with the{" "}
            <Link href="/docs/react/v2/overview">Overview</Link>.
          </div>

          <Next
            href="/docs/react/v2/overview"
            title="Next: Overview"
            subtitle="The four main parts of Chat Engine."
          />
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
          <ShortCutLink href="#create_react_app">
            1. Create React App
          </ShortCutLink>
          <ShortCutLink href="#server">2. Server</ShortCutLink>
          <ShortCutLink href="#hooks">3. Hook</ShortCutLink>
          <ShortCutLink href="#sockets">4. Socket</ShortCutLink>
          <ShortCutLink addBreak href="#components">
            5. Components
          </ShortCutLink>

          <ShortCutLink addBreak href="#final_code">
            Final Code
          </ShortCutLink>
        </Col>
      </Row>
    </DocsLayout>
  );
};

const hooksCode = `import { useMultiChatLogic } from "react-chat-engine-advanced";

const projectId = "PROJECT_ID";
const username = "USER_NAME";
const secret = "USER_SECRET";

function App() {
  const chatProps = useMultiChatLogic(projectId, username, secret);
  return <div />;
}

export default App;`;

const addSocketsCode = `import { useMultiChatLogic, MultiChatSocket } from "react-chat-engine-advanced";

const projectId = "PROJECT_ID";
const username = "USER_NAME";
const secret = "USER_SECRET";

function App() {
  const chatProps = useMultiChatLogic(projectId, username, secret);
  return (
    <MultiChatSocket 
      projectId={chatProps.projectId}
      username={chatProps.username}
      secret={chatProps.secret}
      onConnect={chatProps.onConnect}
      onAuthFail={chatProps.onAuthFail}
      onNewChat={chatProps.onNewChat}
      onEditChat={chatProps.onEditChat}
      onDeleteChat={chatProps.onDeleteChat}
      onNewMessage={chatProps.onNewMessage}
      onEditMessage={chatProps.onEditMessage}
      onDeleteMessage={chatProps.onDeleteMessage}
      onIsTyping={chatProps.onIsTyping}
    />
  );
}

export default App;`;

const addComponentsCode = `import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";

const projectId = "PROJECT_ID";
const username = "USER_NAME";
const secret = "USER_SECRET";

function App() {
  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <>
      <MultiChatSocket {...chatProps} />

      <MultiChatWindow 
        chats={chatProps.chats}
        messages={chatProps.messages}
        activeChatId={chatProps.activeChatId}
        username={chatProps.username}
        peopleToInvite={chatProps.peopleToInvite}
        hasMoreChats={chatProps.hasMoreChats}
        hasMoreMessages={chatProps.hasMoreMessages}
        onChatFormSubmit={chatProps.onChatFormSubmit}
        onChatCardClick={chatProps.onChatCardClick}
        onChatLoaderShow={chatProps.onChatLoaderShow}
        onMessageLoaderShow={chatProps.onMessageLoaderShow}
        onMessageLoaderHide={chatProps.onMessageLoaderHide}
        onBottomMessageShow={chatProps.onBottomMessageShow}
        onBottomMessageHide={chatProps.onBottomMessageHide}
        onMessageFormSubmit={chatProps.onMessageFormSubmit}
        onInvitePersonClick={chatProps.onInvitePersonClick}
        onRemovePersonClick={chatProps.onRemovePersonClick}
        onDeleteChatClick={chatProps.onDeleteChatClick}
        style={{ height: '100vh' }} 
      />
    </>
  );
}

export default App;`;

const finalCode = `import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";

const projectId = "PROJECT_ID";
const username = "USER_NAME";
const secret = "USER_SECRET";

function App() {
  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow  {...chatProps} style={{ height: '100vh' }} />
    </>
  );
}

export default App;`;

export default Docs;

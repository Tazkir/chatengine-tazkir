import React, { Component } from "react";

import { Row, Col } from "antd";

import Link from "next/link";
import Head from "next/head";

import DocsLayout from "../_layout";

import { CodeBlock, dracula } from "react-code-blocks";

const createUserCode = `var axios = require('axios');\nvar data = '{\n\t"username": "bob_baker",\n\t"secret": "secret-123-jBj02",\n\t"email": "b_baker@mail.com",\n\t"first_name": "Bob",\n\t"last_name": "Baker",\n\t"custom_json": {"fav_game": "Candy Crush", "high_score": 2002}\n}';\n\nvar config = {\n\tmethod: 'post',\n\turl: 'https://api.chatengine.io/users/',\n\theaders: {\n\t\t'PRIVATE-KEY': '{{private_key}}'\n\t},\n\tdata : data\n};\n\naxios(config)\n.then(function (response) {\n\tconsole.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n\tconsole.log(error);\n});`;
const addingUsersCode = `import { createChatUser } from './previousSnippet';\n\nlet newUsers = [];\nlet failedUsers = [];\nconst users = getMyUsers();\n\nusers.map(user => {\n\tresponse = createChatUser(user);\n\tif (response.status_code === 201) {\n\t\tnewUsers.push(response.data);\n\t} else {\n\t\tfailedUsers.push(response.data);\n\t}\n});\n\nconsole.log('New users', newUsers);\nconsole.log('Failed users', failedUsers);`;

export default class ConnectYourBackend extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Connect Your Backend | Chat Engine Docs</title>
          <meta
            name="description"
            content="Learn how to use APIs to connect your server to Chat Engine's Chat SDKs."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Connect Your Backend</h1>

            <h2 style={{ color: "#595959" }}>
              Let's sync your userbase to Chat Engine.
            </h2>

            <div style={styles.body}>
              <i style={{ paddingLeft: "12px" }}>
                "How can I add a user when they Sign Up for my App?"
              </i>
            </div>

            <div style={styles.body}>
              <i style={{ paddingLeft: "12px" }}>
                "How can I add my App's current userbase?"
              </i>
            </div>

            <div style={styles.body}>
              <i style={{ paddingLeft: "12px" }}>
                "What if my user changes their info or deletes their account?"
              </i>
            </div>

            <div style={styles.body}>
              In this tutorial, I'll show you how to connect your App's userbase
              to Chat Engine.
            </div>

            <div style={styles.title} id="before_your_begin">
              Before You Begin
            </div>

            <div style={styles.body}>
              I'll assume you have a Chat Engine Account, Project and you've set
              up a <span style={styles.codeLine}>{"<ChatEngine />"}</span> React
              Project.
            </div>

            <div style={styles.body}>
              If not, I recommend you read the{" "}
              <Link href="/docs/getting_started">Getting Started docs</Link>{" "}
              before.
            </div>

            <div style={styles.title} id="create_project">
              Create a User on Sign Up
            </div>

            <div style={styles.body}>
              When a user signs up for your app, you'll need to tell Chat Engine
              about this user, and we'll store them as a chat user.
            </div>

            <div style={styles.body}>
              To do this, we have a POST API which lets you take this new user's
              info and send it to Chat Engine.
            </div>

            <div style={styles.body}>
              Mandatory fields are "username" and a "secret" for this user.
              Optional fields are "email", "first_name", and "last_name". You
              can also add any extra data in the "custom_json" field.
            </div>

            <div style={styles.body}>
              NOTE: This is a Private API. Meaning you need to use the Private
              Key to authenticate these requests. Only your server should make
              new users, so lets keep this key private.
            </div>

            <div style={styles.body}>
              <b>Here is an example POST request to make a new chat user.</b>
            </div>

            <CodeBlock
              text={createUserCode}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
            />

            <div style={{ height: "22px" }} />

            <div style={styles.body}>
              Put this API call within the Sign Up function of your app.
              Everytime a user signs up successfully, fire this request and
              they'll be in Chat Engine too.
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.title} id="add_to_project">
              Migrate Existing Users
            </div>

            <div style={styles.body}>
              Now, we can add users to Chat Engine while they sign up! What
              about your existing users?
            </div>

            <div style={styles.body}>
              Easy, let's just make a script that loops through your existing
              users and creates an account for each one!
            </div>

            <div style={styles.body}>
              I'm goint to write pseudo-code and the use{" "}
              <span style={styles.codeLine}>{"createChatUser()"}</span> to refer
              to the previous POST request.
            </div>

            <div style={styles.body}>
              Here is an example of looping through your current users, and
              adding each one of them.
            </div>

            <CodeBlock
              text={addingUsersCode}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
            />

            <div style={{ height: "22px" }} />

            <div style={styles.body}>
              The code is rather basic. Loop through all your current users and
              call the POST API.
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.title} id="add_to_project">
              Patching and Deleting Users
            </div>

            <div style={styles.body}>
              Now all your current users, and new users are in Chat Engine!
            </div>

            <div style={styles.body}>
              What happens if somebody changes their info or deletes their
              account?
            </div>

            <div style={styles.body}>
              Simple, we have PATCH and DELETE APIs for when these events happen
              too!
            </div>

            <div style={styles.body}>
              Instead of writing out snippets here, I'll link you to the{" "}
              <a href="https://rest.chatengine.io/#d5b0b6e3-1983-4446-9087-14f6aff5e33c">
                PATCH API
              </a>{" "}
              and{" "}
              <a href="https://rest.chatengine.io/#d0991e9a-082a-4208-a79a-2738fd808fbb">
                DELETE API
              </a>{" "}
              in Postman.
            </div>

            <div style={styles.body}>
              You can put these API calls inside your Update User functions and
              Delete User functions within your backend.
            </div>

            <div style={styles.body}>
              You can also put them inside Model Triggers which may be more DRY.
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.title}>
              Using the Create + Update + Delete User API calls, you can now
              Sync your User DB with ours - happy chatting!
            </div>

            <div style={{ height: "56px" }} />
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
    fontSize: "18px",
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

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
          <title>Domain Model | Chat Engine Docs</title>
          <meta
            name="description"
            content="The domain model and object structures in Chat Engine."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Domain Model</h1>

            <h2 style={{ color: "#595959", paddingBottom: "6px" }}>
              Obects and data types
            </h2>

            <div style={styles.body}>
              Here, we go over how the Chat Database is architected, then we
              look at what data-types go into each object.
            </div>

            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <div style={styles.body} id="domain_model_diagram">
                <b>Domain Model Diagram</b>
              </div>

              <img
                alt="chat-engine-domain-model"
                src="https://chat-engine-assets.s3.amazonaws.com/docs/server/domain_model/domain-model-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body}>
              A <b>Project</b> has many <b>Persons</b>.
              <br />A <b>Project</b> has many <b>Chats</b>.
            </div>

            <div style={styles.body}>
              A <b>Person</b> has many <b>Messages</b>.
              <br />A <b>Person</b> has a many-to-many relationship with{" "}
              <b>Chat</b> (called <b>ChatPerson</b>).
            </div>

            <div style={styles.body}>
              A <b>Chat</b> has many <b>Messages</b>.
              <br />A <b>Chat</b> has a many-to-many relationship with{" "}
              <b>Person</b> (called <b>ChatPerson</b>).
              <br />A <b>Chat</b> has many <b>Attachments</b> through the{" "}
              <b>Message</b> history.
            </div>

            <div style={styles.body}>
              A <b>Message</b> has many <b>Attachments</b>.
            </div>

            <div style={styles.title} id="person_object">
              Person Object
            </div>

            <div style={styles.body}>
              A "Person" represents user which can enter a chatroom and send
              messages. Below is the Object Structure of a "Person".
            </div>

            <CodeBlock
              text={person}
              language="json"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={{ height: "16px" }} />

            <div style={styles.title} id="chat_object">
              Chat Object
            </div>

            <div style={styles.body}>
              A "Chat" represents a chatroom people can enter and send messages
              within. Below is the Object Structure of a "Chat".
            </div>

            <CodeBlock
              text={chat}
              language="json"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={{ height: "16px" }} />

            <div style={styles.title} id="chat_person_object">
              Chat Person Object
            </div>

            <div style={styles.body}>
              A "Chat Person" represents the relationship between a Person and a
              Chat they are in. Below is the Object Structure of a "ChatPerson".
            </div>

            <CodeBlock
              text={chatPerson}
              language="json"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={{ height: "16px" }} />

            <div style={styles.title} id="message_object">
              Message Object
            </div>

            <div style={styles.body}>
              A "Message" represents a message, sent by a person, in a chatroom.
              Below is the Object Structure of a Message.
            </div>

            <CodeBlock
              text={message}
              language="json"
              showLineNumbers={false}
              theme={dracula}
            />

            <div style={{ height: "16px" }} />

            <div style={styles.title} id="attachment_object">
              Attachment Object
            </div>

            <div style={styles.body}>
              An "attachment" represents file which was sent within a message.
              Below is the Object Structure of am "Attachment".
            </div>

            <CodeBlock
              text={attachment}
              language="json"
              showLineNumbers={false}
              theme={dracula}
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
            <ShortCutLink addBreak href="#domain_model_diagram">
              Domain Model
            </ShortCutLink>

            <ShortCutLink href="#person_object">Person Object</ShortCutLink>
            <ShortCutLink href="#chat_object">Chat Object</ShortCutLink>
            <ShortCutLink href="#chat_person_object">
              ChatPerson Object
            </ShortCutLink>
            <ShortCutLink href="#message_object">Message Object</ShortCutLink>
            <ShortCutLink href="#attachment_object">
              Attachment Object
            </ShortCutLink>
          </Col>
        </Row>
      </DocsLayout>
    );
  }
}

const person = `{
    username: string;
    first_name: string | null;
    last_name: string | null;
    avatar: string | null;
    custom_json: string | object | null;
    is_online: boolean;
}`;

const chat = `{
  id: number;
  title: string;
  created: string;
  is_direct_chat: boolean;
  custom_json: object | string;
  last_message: MessageObject;
  attachments: AttachmentObject[];
  people: ChatPersonObject[];
  admin: PersonObject;
}`;

const chatPerson = `{
    person: PersonProps;
    chat_updated: string | null;
    last_read: number | null;
}`;

const message = `{
    id?: number;
    text: string | null;
    sender_username: string;
    created: string;
    attachments: AttachmentProps[];
    custom_json: object | string;
    sender?: PersonProps; // Empty messages have no sender
}`;

const attachment = `{
    id: number;
    file: string; // URL to S3 Bucket
    blob?: File;
    created: string;
}`;

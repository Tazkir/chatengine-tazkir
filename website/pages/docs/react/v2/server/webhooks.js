import React from "react";

import { Row, Col } from "antd";

import Head from "next/head";
import Link from "next/link";

import { styles } from "../_assets/styles";
import { DocsLayout } from "../_assets/layout";

import { CodeBlock, dracula } from "react-code-blocks";

const Webhooks = () => {
  return (
    <DocsLayout>
      <Head>
        <title>Webhooks | Chat Engine Docs</title>
        <meta
          name="description"
          content="Link Chat Engine to your codebase with our easy, powerful outbound webhooks."
        />
      </Head>

      <Row>
        <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
          <h1>Webhooks</h1>

          <h2 style={{ color: "#595959" }}>
            Ping your server when Chat Engine event happen.
          </h2>

          <div style={styles.body}>
            When certain Chat Engine events occur, we can send data to your
            server, and let you run custom actions in a timely way.
          </div>

          <div style={styles.body}>
            Common use cases are notifications, sync data to your server,
            keeping copies of messages, and more!
          </div>

          <div style={styles.title} id="security">
            Security
          </div>

          <div style={styles.body}>
            Each of the webhooks have a "Webhook Secret". It's a random key
            which shows the webhook is actually coming from Chat Engine.
          </div>

          <div style={styles.body}>
            It is best to check each webhook against this secret to make sure
            the requests are valid.
          </div>

          <div style={styles.body}>
            Here is an example value:{" "}
            <span style={styles.codeLine}>
              whk-862f3415-788d-4008-6669-ba297c2e9f43
            </span>
          </div>

          <div style={styles.title} id="on_new_message">
            On New Message
          </div>

          <div style={styles.body}>
            On New Message webhooks will trigger everytime a new message is
            created in any chat in your project.
          </div>

          <div style={styles.body}>
            The request body will contain JSON data for the Project, Webhook,
            Chat, Person, and Message objects.
          </div>

          <CodeBlock
            theme={dracula}
            text={onNewMessage}
            language="jsx"
            showLineNumbers={true}
          />

          <div style={{ marginBottom: "24px" }} />
        </Col>

        <Col xs={0} sm={4} md={8} style={styles.docsColumn}>
          <div style={{ paddingLeft: "24px", fontSize: "16px" }}>
            <div>
              <Link
                href="#security"
                onClick={() => window.location.replace("#security")}
              >
                Security
              </Link>
            </div>

            <div style={{ height: "12px" }} />

            <div>
              <Link
                href="#on_new_message"
                onClick={() => window.location.replace("#on_new_message")}
              >
                On New Message
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </DocsLayout>
  );
};

export default Webhooks;

export const onNewMessage = `{
    'chat': {
        'admin': OrderedDict([('username', ''),
                                ('first_name', ''),
                                ('last_name', ''),
                                ('avatar', None),
                                ('custom_json', None),
                                ('is_online', False)]),
        'attachments': [],
        'custom_json': None,
        'is_direct_chat': False,
        'people': [],
        'title': 'Example Chat'
    },
    'message': {
        'attachments': [],
        'created': '2021-05-15 18:55:19.567659+00:00',
        'custom_json': {},
        'id': 10281,
        'sender': OrderedDict([('username', 'alamorre'),
                            ('first_name', 'Adam'),
                            ('last_name', 'La Morre'),
                            ('avatar', None),
                            ('custom_json', {}),
                            ('is_online', False)]),
        'sender_username': 'adam@gmail.com',
        'text': 'Hello'
    },
    'person': {
        'avatar': None,
        'custom_json': None,
        'first_name': 'Adam',
        'is_online': False,
        'last_name': 'La Morre',
        'username': 'alamorre'
    },
    'project': {
        'created': '2021-05-15T18:55:19.426836Z',
        'email_company_name': '',
        'email_last_sent': '2021-05-15T18:55:19.426563Z',
        'email_link': '',
        'email_sender': '',
        'is_emails_enabled': False,
        'monthly_payment': 0,
        'owner': 'adam@gmail.com',
        'plan_type': 'basic',
        'public_key': '8ed24711-5abd-46a9-829a-4d656ebf7184',
        'title': 'Engine 1'
    },
    'webhook': {
        'event_trigger': 'On New Message',
        'id': 118,
        'secret': 'whk-20c7e24a-c46c-44d4-a018-74d2488f188e',
        'url': 'http://0.0.0.0:8080/webhooks/test/'
    }
}
`;

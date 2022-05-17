import React, { Component } from "react";

import Link from "next/link";
import Head from "next/head";

import { Row, Col } from "antd";
import { CodeBlock, dracula } from "react-code-blocks";

import DocsLayout from "../../_layout";

export default class DirectMessaging extends Component {
  render() {
    return (
      <DocsLayout>
        <Head>
          <title>Marketplace Chat | Chat Engine Docs</title>
          <meta
            name="description"
            content="Add chat to your React Marketplace today - with Chat Engine APIs and the SDK."
          />
        </Head>

        <Row>
          <Col xs={24} sm={20} md={16} style={styles.docsColumn}>
            <h1>Marketplace Chat</h1>

            <h2 style={{ color: "#595959" }}>
              Let your buyers and sellers chat!
            </h2>

            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <img
                alt="marketplace-pretty-example-chat-engine"
                src="https://chat-engine-assets.s3.amazonaws.com/tutorials/marketplace-chat-photo.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body}>
              The internet has lots of markeplaces for
            </div>

            <li style={styles.body}>Buyers and sellers</li>
            <li style={styles.body}>Riders and drivers</li>
            <li style={styles.body}>Renters and leasers</li>
            <li style={styles.body}>Producers and consumers</li>

            <div style={styles.body}>
              So let's use Chat Engine to let them chat through your website or
              app!
            </div>

            <div style={styles.body}>It wont take long :)</div>

            <div style={styles.title}>Before You Begin</div>

            <div style={styles.body}>
              In this tutorial, you'll learn how to get your users access to
              Chat Engine. Full docs on syncing your server to Chat Engine (with
              webhooks) is <Link href="/docs/connect_your_backend">here</Link>.
            </div>

            <div style={styles.body}>
              Second, we will be cloning this example{" "}
              <Link href="https://github.com/alamorre/chat-engine-marketplace">
                Marketplace Repo
              </Link>{" "}
              and add chat to it.
            </div>

            <div style={styles.body}>
              The website is <i>very</i> basic for simplicity, we recommend
              cloning it for this tutorial. Then apply the learnings to your own
              website after.
            </div>

            <div style={styles.body}>Now let's get started!</div>

            <div style={styles.title}>Create a Chat Engine Project</div>

            <div style={styles.body}>
              In this tutorial, we'll be adding chat to a marketplace for used
              textbooks.
            </div>

            <div style={styles.body}>
              The users, textbooks, and chat data will be hosted by Chat
              Engine's servers.
            </div>

            <div style={styles.body}>
              So let's create a Chat Engine project. Go to{" "}
              <Link href="https://chatengine.io">chatengine.io</Link> and create
              a new project.
            </div>

            <div style={styles.body}>
              We'll need the <span style={styles.codeLine}>PROJECT_ID</span> and{" "}
              <span style={styles.codeLine}>PRIVATE_KEY</span> so copy those
              down, and we'll put them in your project soon.
            </div>

            <div style={styles.title}>Setup our Marketplace</div>

            <div style={styles.body}>
              You're in luck, we pre-wrote a react marketplace for you! So just
              clone this repository:
            </div>

            <div style={styles.body}>
              <Link href="https://github.com/alamorre/chat-engine-marketplace">
                https://github.com/alamorre/chat-engine-marketplace
              </Link>
            </div>

            <div style={styles.body}>
              Right now, this marketplace has no Chat Engine project associated
              with it. So it will start as a blank page.
            </div>

            <div style={styles.body}>
              Let's add environment variabled to securely link the Chat Engine
              project we just created. So{" "}
              <span style={styles.codeLine}>cd</span> into the project and
              create the following <span style={styles.codeLine}>.env</span>{" "}
              file:
            </div>

            <CodeBlock
              text={
                "REACT_APP_CHAT_ENGINE_PROJECT_ID=abcdabcd-abcd-abcd-abcd-abcdabcdabcd\nREACT_APP_CHAT_ENGINE_PRIVATE_KEY=12341234-1234-1234-1234-123412341234"
              }
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
            />

            <div style={styles.body} />

            <div style={styles.body}>
              The project pulls these environment variables as{" "}
              <span style={styles.codeLine}>PROJECT_ID</span> and{" "}
              <span style={styles.codeLine}>PRIVATE_KEY</span>, respectively.
              This way the website can authenitcate and send data to your Chat
              Engine project.
            </div>

            <div style={styles.body}>
              Now if you run <span style={styles.codeLine}>yarn</span> then{" "}
              <span style={styles.codeLine}>yarn start</span> the app will
              install dependencies, then load with your Chat Engine project
              linked!
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
                <b>How your app will look when first started.</b>
              </div>

              <img
                alt="chat-engine-blank-marketplace"
                src="https://chat-engine-assets.s3.amazonaws.com/tutorials/marketplace_chat/blank-marketplace-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ height: "22px" }} />

            <div style={styles.body}>It's empty. This is expected!</div>

            <div style={styles.body}>
              This is because we havent loaded any sellers/products onto the
              platform.
            </div>

            <div style={styles.body}>Let's do that now.</div>

            <div style={styles.title}>Adding Our Sellers</div>

            <div style={styles.body}>
              I created a script which will upload all missing users
              automatically. In this case it will be every seller.
            </div>

            <div style={styles.body}>
              As you can see in{" "}
              <Link href="https://github.com/alamorre/chat-engine-marketplace/blob/298ab6972059f9155c28013a8c5b7bb0f5ec1803/src/data/index.js#L3">
                src/data/index.js#L3
              </Link>{" "}
              you can see the list of sellers and the product they are each
              selling.
            </div>

            <div
              style={{
                ...styles.body,
                ...{ fontSize: "14px", marginLeft: "14px" },
              }}
            >
              This is actually a neat feature of chat engine: Each user object
              has a <span style={styles.codeLine}>custom_json</span> field where
              you can put any meta-data inside. In this case the product they
              are selling!
            </div>

            <div style={styles.body}>
              This script will get all Chat Engine users in our project, cross
              reference this list of users with the seller list, and upload
              (i.e. create) any seller which is missing from the user list.
            </div>

            <div style={styles.body}>
              You can see the script in{" "}
              <Link href="https://github.com/alamorre/chat-engine-marketplace/blob/298ab6972059f9155c28013a8c5b7bb0f5ec1803/src/Navbar/index.js#L18">
                src/Navbar/index.js#L18
              </Link>{" "}
              and here's how it works:
            </div>

            <CodeBlock
              text={userSync}
              language="jsx"
              showLineNumbers={true}
              theme={dracula}
            />

            <div style={styles.body} />

            <div style={styles.body}>
              This function/script will get all Chat Engine users within this
              project, and see if any seller is not currently in this list. If
              not, make that seller a Chat Engine user with{" "}
              <span style={styles.codeLine}>createUser()</span>. Update this new
              user list and current user in the app's context. The website will
              also refresh if users were added.
            </div>

            <div style={styles.body}>
              <b>Important Note:</b> To run this script and migrate users. Make
              sure you uncomment{" "}
              <Link href="https://github.com/alamorre/chat-engine-marketplace/blob/f9f7a70b0d3b6e1cee426b17d43ecd07994bfe65/src/Navbar/index.js#L21-L26">
                these lines
              </Link>{" "}
              in your app and refresh the website.
            </div>

            <div style={styles.body}>
              Once uncommented, the users and their product for sale will be
              added to the Listings Page.
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
                <b>Now your website should look like this</b>
              </div>

              <img
                alt="chat-engine-marketplace-with-listings"
                src="https://chat-engine-assets.s3.amazonaws.com/tutorials/marketplace_chat/market-with-books-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body} />

            <div style={styles.body}>
              Boom! Your marketplace is up with chat in it!
            </div>

            <div style={styles.body}>
              You will also see Chat Engine users in your project.
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
                <b>Chat Engine project with associated users</b>
              </div>

              <img
                alt="chat-engine-auto-uploaded-users"
                src="https://chat-engine-assets.s3.amazonaws.com/tutorials/marketplace_chat/new-chat-users-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body} />

            <div style={styles.body}>
              Now let's go through the code and study what we built.
            </div>

            <div style={styles.title}>Authentication</div>

            <div style={styles.body}>
              In the Navbar copmponent (
              <Link href="https://github.com/alamorre/chat-engine-marketplace/blob/master/src/Navbar/index.js">
                src/Navbar/index.js
              </Link>
              ) you will the <span style={styles.codeLine}>currentUser</span>{" "}
              represents which user is currently logged in. In this case we
              default to john@smith.co.
            </div>

            <div style={styles.body}>
              Since the users were added, you're logged in as John Smith, if you
              go to John Smith's listing you won't see a chat option (useless to
              chat with yourself).
            </div>

            <div style={styles.title}>Listing Details Page</div>

            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <img
                alt="chat-engine-marketplace-product-with-chat"
                src="https://chat-engine-assets.s3.amazonaws.com/tutorials/marketplace_chat/details-plus-chat-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body}>
              In the Details Page (
              <Link href="https://github.com/alamorre/chat-engine-marketplace/blob/master/src/DetailsPage/index.js">
                src/DetailsPage/index.js
              </Link>
              ) you will see <span style={styles.codeLine}>sellerID</span> and{" "}
              <span style={styles.codeLine}>seller</span> is pulled from the ID
              in the URL and then the seller's info/listing is rendered.
            </div>

            <div style={styles.body}>
              You will also notice a Chat component (
              <Link href="https://github.com/alamorre/chat-engine-marketplace/blob/f9f7a70b0d3b6e1cee426b17d43ecd07994bfe65/src/DetailsPage/Chat.js#L10">
                src/DetailsPage/Chat.js
              </Link>
              ) will be rendered by toggling the "Chat with Seller" button.
            </div>

            <div style={styles.body}>
              That chat component gets-or-creates the chat between these two
              users (
              <Link href="https://rest.chatengine.io/#4a596036-fd7c-4539-b913-52990c7847f9">
                using this API
              </Link>
              ) then renders a{" "}
              <span style={styles.codeLine}>{`<Socket />`}</span> and{" "}
              <span style={styles.codeLine}>{`<ChatFeed />`}</span> component,
              displaying the messages and creating a socket subscription.
            </div>

            <div style={styles.body}>
              Note: The wrapper component around them allows the two components
              to share revelant state data, and is needed.
            </div>

            <div style={styles.body}>
              Not bad for such a small amount of code!
            </div>

            <div style={styles.title}>Chats Page</div>

            <div
              style={{
                padding: "12px",
                backgroundColor: "#e8e8e8",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <img
                alt="chat-engine-marketplace-my-chats-page"
                src="https://chat-engine-assets.s3.amazonaws.com/tutorials/marketplace_chat/chats-page-min.png"
                style={{ width: "100%" }}
              />
            </div>

            <div style={styles.body}>
              In the Navbar, at the top-right of the website, you'll see a "My
              Chats" link which brings you to a chats page.
            </div>

            <div style={styles.body}>
              This page shows you all the current user's chats!
            </div>

            <div style={styles.body}>
              This Chats Page (
              <Link href="https://github.com/alamorre/chat-engine-marketplace/blob/master/src/ChatsPage/index.js">
                src/ChatsPage/index.js
              </Link>
              ) is very simple, it's just a{" "}
              <span style={styles.codeLine}>{`<ChatEngine />`}</span> component
              with the current user logged into the it. This unfolds all the
              user's chats and lovely Chat Engine features.
            </div>

            <div style={styles.title}>In a nutshell</div>

            <div style={styles.body}>
              In conclusion, by creating chat users, getting-or-creating chats
              between users, and rendering them with{" "}
              <span style={styles.codeLine}>{`<ChatFeed />`}</span> and{" "}
              <span style={styles.codeLine}>{`<ChatEngine />`}</span>, we can
              integrate chat easily into any marketplace.
            </div>

            <div style={styles.body}>
              Thanks for reading! If you have questions, concerns, or feedback,
              feel free to{" "}
              <Link href="https://github.com/alamorre/chat-engine-marketplace/issues/new">
                open tickets here
              </Link>{" "}
              to communicate with me :)
            </div>

            <div style={styles.body}>Happy chatting!</div>

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

const userSync = `function syncUsers() {
    getUsers(users => {
        console.log('Fetched users', users)
        let usersWereAdded = false
        sellers.map(seller => {
            if(!users.find(user => seller.username === user.username)) {
                console.log('Creating user', seller.username)
                createUser(seller)
                usersWereAdded = true;
            }
        })
        if (usersWereAdded) window.location.reload();
        setUsers(users)
        setCurrentUser(sellers[0])
    })
}`;

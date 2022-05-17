import React, { Component } from "react";

import Pricing from "./_components";

import Footer from "../../components/Footer";

import Head from "next/head";

export default class RootPage extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "calc(100vh - 124px)",
          backgroundColor: "rgb(47, 84, 235)",
        }}
      >
        <Head>
          <title>Pricing & Demos | Chat Engine</title>
          <meta
            name="description"
            content="Want to see how cheap Chat Engine is? Want to meet with a Chat expert on Zoom? This is the page for you!"
          />
        </Head>

        <div
          style={{
            width: "100%",
            textAlign: "center",
            padding: "55px 0px 25px 0px",
          }}
        >
          <h1 style={{ fontSize: "48px", color: "white" }}>Simple Pricing</h1>

          <h2 style={{ color: "white" }}>
            Free during development,
            <br />
            add packs of 1000 users.
          </h2>
        </div>

        <Pricing />

        <Footer />
      </div>
    );
  }
}

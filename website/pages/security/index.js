import React from "react";

import { Row, Col } from "antd";

import Head from "next/head";

const SecurityPage = () => {
  return (
    <div style={{ height: "calc(100vh - 64px)" }}>
      <Head>
        <title>Secure by Design | Chat Engine</title>
        <meta
          name="description"
          content="Learn more about Chat Engine's security practice and why you can trust your data on our platform."
        />
      </Head>

      <Row gutter={24}>
        <Col xs={0} sm={3} md={6} />

        <Col xs={24} sm={18} md={12}>
          <div style={{ height: "24px" }} />

          <h1>Chat Engine's Security Posture</h1>

          <p style={styles.paragraph}>
            Here we openly discuss the measures we take to make Chat Engine as
            secure as possible.
          </p>

          <p style={styles.title}>Secure Development Practices (DevSecOps)</p>

          <p style={styles.paragraph}>
            At Chat Engine, every developer has ownership over security. Each
            pull request is reviewed for new vulns and remediated before merging
            into master.
          </p>

          <p style={styles.paragraph}>
            Not only are developers forced to train in security, but as of now,
            every developer at Chat Engine has come from a security background.
            Our staff has years of collective experience in Endpoint,
            Application and Cloud Native security.
          </p>

          <p style={styles.paragraph}>
            We believe to keep a resillient product, our developers have to
            proactively solve security issues while they write (and ship) their
            code. This approach allows us to make and maintain secure, robust
            software without expensive intervention.
          </p>

          <p style={styles.title}>SAST Scanning</p>

          <p style={styles.paragraph}>
            Our code-base is written in Javascript and Python3, and 100% of our
            1st party code is scanned for vulnerabilities by{" "}
            <a href="https://snyk.io/product/snyk-code/">Snyk Code</a>.
          </p>

          <p style={styles.paragraph}>
            We currently block builds with 1st party code vulns, and we are not
            ignoring any issues provided by our scanning tools.
          </p>

          <p style={styles.title}>SCA Scanning</p>

          <p style={styles.paragraph}>
            Every open-source library Chat Engine uses is double checked by{" "}
            <a href="https://snyk.io/product/open-source-security-management/">
              Snyk Open Source
            </a>
            .
          </p>

          <p style={styles.paragraph}>
            As of now, every open-source volnerability is not invoked by our 1st
            party code, and hence acknowledged.
          </p>

          <p style={styles.paragraph}>
            We ongoingly monitor for new vulns and address if need be.
          </p>

          <p style={styles.title}>Docker Scanning</p>

          <p style={styles.paragraph}>
            Our production image filesystem is scanned for vulns by{" "}
            <a href="https://snyk.io/product/container-vulnerability-management/">
              Snyk Container
            </a>
            .
          </p>

          <p style={styles.paragraph}>
            As of today (Jun 9 2021), we are in the process of selecting a
            better base image. Which should be done in 1-2 business days.
          </p>

          <p style={styles.title}>Infrastructure</p>

          <p style={styles.paragraph}>
            Our entire GCP infrastructure is hidden behind a load balancer
            within a VPC.
          </p>

          <p style={styles.paragraph}>
            We scale-up and down automatically with Cloud Run and have
            throttling in place for DDOS attacks.
          </p>

          <p style={styles.paragraph}>
            SSL is enforced accross all connections (to our website and API
            server too). All information is passed throught standard SSL, with
            approved encryption certificates.
          </p>

          <p style={styles.paragraph}>
            Our website (i.e. front-end) is hosted on an AWS S3 bucket with a
            Cloudfront CDN in front, enforcing SSL for every connection.
          </p>

          <p style={styles.title}>UI Kit Security</p>

          <p style={styles.paragraph}>
            Our UI kits are provided through NPM. You can see the security
            posture of react-chat-engine{" "}
            <a href="https://snyk.io/advisor/npm-package/react-chat-engine">
              here
            </a>
            .
          </p>

          <p style={styles.paragraph}>
            We have one known transitive vulnerability (an XSS vuln), but it is
            ignored because all HTML based messages are sanitized by our server
            before being rendered on the DOM by the dangerouslySetInnerHTML
            function.
          </p>

          <p style={styles.paragraph}>
            For this reason, our open-source UI kit has no reported,
            true-positive security vulnerabilities.
          </p>

          <p style={styles.title}>Multi-tenant Architecture</p>

          <p style={styles.paragraph}>
            We use a multi-tenant architecture, meaning your project data is
            hosted in one database along with other users and projects.
          </p>

          <p style={styles.paragraph}>
            This means we have extra logic and unit tests in place to ensure
            users cannot reach into other projects and steal neighbouring data.
          </p>

          <p style={styles.paragraph}>
            No deployment goes into production without these tests passing.
          </p>

          <p style={styles.paragraph}>
            If you're looking for a single-tenant (or on-prem) architecture,
            please reach out to adam@lamorre.co - please be aware implementing
            such a solution will cost hundreds or thousands per month.
          </p>

          <p style={styles.title}>API Authentication</p>

          <p style={styles.paragraph}>
            Every API regarding the chat and user data in your project requires
            some form of a Secret in the request header.
          </p>

          <p style={styles.paragraph}>
            This may be a User-made secret, Auth Token, Private Key or Chat
            Access Key. Every secret is transmitted to our server via HTTPS
            request headers over approved SSL encryption.
          </p>

          <p style={styles.paragraph}>
            The main take-away is that no API can manipulate your project's chat
            data without a secret generated by you or one of your users.
          </p>

          <p style={styles.title}>Security Questionnaires</p>

          <p style={styles.paragraph}>
            We hope you found this page helpful! If you have other questions
            regarding security, please email adam@lamorre.co.
          </p>
        </Col>
      </Row>
    </div>
  );
};

const styles = {
  paragraph: {
    fontSize: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
  },
};

export default SecurityPage;

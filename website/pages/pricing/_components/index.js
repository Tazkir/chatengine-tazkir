import React, { Component } from "react";

import { Row, Col, Divider, Select } from "antd";

import {
  ExperimentOutlined,
  TagsOutlined,
  RiseOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const { Option } = Select;

export default class Pricing extends Component {
  state = {
    light: "3000",
    production: "1000",
    professional: "1000",
  };

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <Row
        id="pricing"
        style={{ paddingBottom: "111px", backgroundColor: "#2f54eb" }}
      >
        <Col xs={1} />

        <Col xs={22}>
          <Row>
            <Col
              xs={24}
              sm={6}
              style={{ padding: "12px", textAlign: "center" }}
            >
              <div style={styles.card}>
                <ExperimentOutlined
                  style={{ fontSize: "55px", marginBottom: "12px" }}
                />

                <h2 style={{ fontWeight: "500" }}>Free 🎉</h2>

                <Select
                  disabled
                  defaultValue="default"
                  style={{ width: "75%" }}
                  onChange={() => this.handleChange()}
                >
                  <Option value="default">25 Users</Option>
                </Select>

                <div style={{ height: "22px" }} />

                <div style={styles.point}>1000 messages / month</div>
                <div style={styles.point}>Email Support</div>
                <div style={styles.point}>14 Day Chat history</div>

                <Divider />

                <div style={{ ...styles.price, ...{ paddingTop: "283px" } }}>
                  Free
                </div>
              </div>
            </Col>

            <Col
              xs={24}
              sm={6}
              style={{ padding: "12px", textAlign: "center" }}
            >
              <div style={styles.card}>
                <TagsOutlined
                  style={{ fontSize: "55px", marginBottom: "12px" }}
                />

                <h2 style={{ fontWeight: "500" }}>Light</h2>

                <Select
                  defaultValue={this.state.light}
                  style={{ width: "75%" }}
                  onChange={(pack) => this.setState({ light: pack })}
                >
                  <Option value="3000">3000 Users</Option>
                  <Option value="6000">6000 Users</Option>
                  <Option value="9000">9,000 Users</Option>
                  <Option value="n3000">n * 3000 Users</Option>
                </Select>

                <div style={{ height: "22px" }} />

                <div style={styles.point}>50k messages / month</div>
                <div style={styles.point}>Email Support</div>
                <div style={styles.point}>30 Day Chat history</div>

                <Divider />

                <div style={styles.point}>Enforced SSL Encryption</div>

                <Divider />

                <div style={{ ...styles.price, ...{ paddingTop: "207px" } }}>
                  {this.state.light === "3000" && "$21 / month"}
                  {this.state.light === "6000" && "$42 / month"}
                  {this.state.light === "9000" && "$63 / month"}
                  {this.state.light === "n3000" && "n * $21 / month"}
                </div>
              </div>
            </Col>

            <Col
              xs={24}
              sm={6}
              style={{ padding: "12px", textAlign: "center" }}
            >
              <div style={styles.card}>
                <RiseOutlined
                  style={{ fontSize: "55px", marginBottom: "12px" }}
                />

                <h2 style={{ fontWeight: "500" }}>Production</h2>

                <Select
                  defaultValue={this.state.production}
                  style={{ width: "75%" }}
                  onChange={(pack) => this.setState({ production: pack })}
                >
                  <Option value="1000">1000 Users</Option>
                  <Option value="2000">2000 Users</Option>
                  <Option value="10000">10,000 Users</Option>
                  <Option value="n000">n * 1000 Users</Option>
                </Select>

                <div style={{ height: "22px" }} />

                <div style={styles.point}>750k messages / month</div>
                <div style={styles.point}>Email Support</div>
                <div style={styles.point}>1 Year Chat history</div>

                <Divider />

                <div style={styles.point}>Enforced SSL Encryption</div>

                <Divider />

                <div style={styles.point}>Email Notifications</div>
                <div style={styles.point}>Zoom Developer Support</div>

                <Divider />

                <div style={{ ...styles.price, ...{ paddingTop: "103px" } }}>
                  {this.state.production === "1000" && "$25 / month"}
                  {this.state.production === "2000" && "$50 / month"}
                  {this.state.production === "10000" && "$250 / month"}
                  {this.state.production === "n000" && "n * $25 / month"}
                </div>
              </div>
            </Col>

            <Col
              xs={24}
              sm={6}
              style={{ padding: "12px", textAlign: "center" }}
            >
              <div style={styles.card}>
                <RocketOutlined
                  style={{ fontSize: "55px", marginBottom: "12px" }}
                />

                <h2 style={{ fontWeight: "500" }}>Professional</h2>

                <Select
                  defaultValue={this.state.professional}
                  style={{ width: "75%" }}
                  onChange={(pack) => this.setState({ professional: pack })}
                >
                  <Option value="1000">1000 Users</Option>
                  <Option value="2000">2000 Users</Option>
                  <Option value="10000">10,000 Users</Option>
                  <Option value="n000">n * 1000 Users</Option>
                </Select>

                <div style={{ height: "22px" }} />

                <div style={styles.point}>1M messages / month</div>
                <div style={styles.point}>Email Support</div>
                <div style={styles.point}>2 Year Chat history</div>

                <Divider />

                <div style={styles.point}>Enforced SSL Encryption</div>

                <Divider />

                <div style={styles.point}>Email Notifications</div>
                <div style={styles.point}>Zoom Developer Support</div>

                <Divider />

                <div style={styles.point}>Custom Features</div>
                <div style={styles.point}>Roadmap Influence</div>

                <Divider />

                <div style={styles.price}>
                  {this.state.professional === "1000" && "$36 / month"}
                  {this.state.professional === "2000" && "$72 / month"}
                  {this.state.professional === "10000" && "$360 / month"}
                  {this.state.professional === "n000" && "n * $36 / month"}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const styles = {
  card: {
    padding: "24px 12px",
    backgroundColor: "white",
    borderRadius: "6px",
  },
  point: {
    fontSize: "16px",
    paddingBottom: "2px",
  },
  price: {
    fontSize: "32px",
    fontWeight: "600",
    paddingBottom: "2px",
    color: "rgb(212, 107, 8)",
  },
};

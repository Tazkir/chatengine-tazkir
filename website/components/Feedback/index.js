import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Form, Input, Button, Popover, notification } from "antd";
import { NotificationOutlined, CloseOutlined } from "@ant-design/icons";

import { getFeedback } from "./getFeedback";
import { sendFeedback } from "./sendFeedback";
import { setLoggedInDateTime } from "./setLoggedInDateTime";

const validateMessages = {
  required: "Some feedback is required 😜",
};

const placeholder = `iOS / Android chat 📱
Chat for my marketplace 🤝
NextJS chat 💨`;

class Feedback extends Component {
  state = {
    value: "",
    loading: false,
    feedback: null,
    visible: false,
  };

  onSuccess(feedback) {
    const newFeedback = this.state.feedback;
    newFeedback.push(feedback);

    this.setState({
      feedback: newFeedback,
      loading: false,
      visible: false,
    });

    notification.success({
      message: "Feedback Success",
      description: "Thanks for helping make Chat Engine better!",
      placement: "bottomLeft",
    });
  }

  onFinish(data) {
    this.setState({ loading: true });
    this.props.sendFeedback(data, (feedback) => this.onSuccess(feedback));
  }

  componentDidMount() {
    if (!this.props.accounts.loggedInDateTime) {
      this.props.setLoggedInDateTime();
    }

    this.props.getFeedback((feedback) => {
      this.setState({ feedback });

      if (
        feedback.length === 0 && // Feedback len is zero
        this.props.accounts.loggedInDateTime && // Logged in time set
        this.props.accounts.loggedInDateTime + 1000 * 60 * 30 < Date.now() // It's been 30 mins
      ) {
        this.setState({ visible: true });
      }
    });
  }

  renderFeedbackForm() {
    return (
      <div style={{ width: "355px" }}>
        <div
          style={{ fontSize: "18px", fontWeight: "500", paddingBottom: "18px" }}
        >
          <span>Hey 👋 what tutorials would you like?</span>

          <Button
            shape="circle"
            icon={<CloseOutlined />}
            style={{ float: "right", border: "0px solid white" }}
            onClick={() => this.setState({ visible: false })}
          />
        </div>

        <Form
          onFinish={this.onFinish.bind(this)}
          validateMessages={validateMessages}
        >
          <Form.Item name="text" rules={[{ required: true }]}>
            <Input.TextArea
              rows={3}
              showCount
              allowClear
              maxLength={1000}
              value="this" //{this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
              placeholder={placeholder}
            />
          </Form.Item>

          <Button
            block
            type="primary"
            htmlType="submit"
            loading={this.state.loading}
            icon={<NotificationOutlined />}
          >
            Submit Feedback
          </Button>
        </Form>
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "12px",
          right: "calc(50% - 177px)",
        }}
      >
        <Popover
          placement="topRight"
          title={null}
          visible={this.state.visible}
          content={this.renderFeedbackForm()}
          trigger="click"
        >
          <div />
        </Popover>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getFeedback, sendFeedback, setLoggedInDateTime },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { Button, Modal, Form, notification } from "antd";

import { TextInput, TextAreaInput } from "../Input";

import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const DemoButton = (props) => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function onSubmit(values) {
    const { email, company, userbase, goals } = values;
    setLoading(true);

    axios
      .post("https://api.chatengine.io/accounts/demos/", {
        email,
        company,
        userbase,
        goals,
      })
      .then(() => {
        setLoading(false);
        setIsModalVisible(false);
        notification.success({
          message: `Demo Requested`,
          placement: "bottomLeft",
        });
      });
  }

  const { handleSubmit } = props;

  return (
    <div>
      <Modal
        footer={null}
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form
          onFinish={handleSubmit(onSubmit.bind(this))}
          layout="basic"
          {...layout}
        >
          <Form.Item {...tailLayout}>
            <h2 style={{ marginTop: "16px" }}>Book a Demo 🗓 👈</h2>
          </Form.Item>

          <Field
            name="email"
            label="Email"
            type="text"
            id="demo-email"
            placeholder="john@example.com"
            component={TextInput}
          />

          <Field
            name="company"
            label="Company or URL"
            id="demo-company"
            placeholder="https://example.inc"
            component={TextInput}
          />

          <Field
            name="userbase"
            label="Userbase Size"
            id="demo-userbase"
            placeholder="1000 - 10,000"
            component={TextInput}
          />

          <Field
            name="goals"
            label="Demo Goals"
            id="demo-gaols"
            placeholder="Something easy, cheap, and pretty!"
            component={TextAreaInput}
          />

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              id="login-submit"
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Button
        size="small"
        shape="round"
        onClick={() => setIsModalVisible(true)}
      >
        Book a Demo
      </Button>
    </div>
  );
};

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Please provide the email we should contact";
  }
  if (!values.company) {
    errors.company = "Please provide company details";
  }
  if (!values.userbase) {
    errors.userbase = "Please estimate your userbase (even if it's 0)";
  }
  if (!values.goals) {
    errors.goals = "Please specify what you're looking for";
  }
  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default reduxForm({
  validate,
  form: "demoForm",
})(connect(null, mapDispatchToProps)(DemoButton));

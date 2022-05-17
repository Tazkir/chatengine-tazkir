import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { Form, Button } from "antd";
import { TextInput } from "../Input";

import { signUp } from "../../actions/Accounts/signUp";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class SignUpForm extends Component {
  state = {
    error: null,
    loading: false,
  };

  onSubmitError(error) {
    this.setState({ error: error, loading: false });
  }

  onSubmitSuccess(data) {
    this.setState({ error: null, loading: false });
    this.props.onComplete();
  }

  onSubmit(values) {
    this.setState({ loading: true });
    this.props.signUp(
      values,
      () => this.onSubmitSuccess(),
      (e) => this.onSubmitError(e)
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div style={{ width: "100%", paddingBottom: "26px" }}>
        <Form
          layout="basic"
          {...layout}
          onFinish={handleSubmit(this.onSubmit.bind(this))}
        >
          <Form.Item {...tailLayout}>
            <h2 style={{ marginTop: "16px" }}>Create a New Account</h2>
          </Form.Item>

          <Field
            name="email"
            label="Email"
            type="text"
            id="sign-up-email"
            placeholder="john@example.com"
            component={TextInput}
          />

          <Field
            name="password"
            label="Password"
            type="password"
            id="sign-up-password"
            placeholder="••••••••"
            component={TextInput}
          />

          <Field
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="sign-up-confirm-password"
            placeholder="••••••••"
            component={TextInput}
          />

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              id="sign-up-submit"
              loading={this.state.loading}
            >
              Sign Up
            </Button>
          </Form.Item>

          {this.state.error && (
            <Form.Item {...tailLayout} style={{ color: "#f5222d" }}>
              <div id="sign-up-error">{this.state.error.toString()}</div>
            </Form.Item>
          )}
        </Form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "You need an email address";
  } else {
    values.email = values.email.trim();
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(values.email)) {
      errors.email = "This email address is not valid";
    }
  }

  if (!values.password) {
    errors.password = "You need a password";
  } else {
    if (values.password.length < 8) {
      errors.password = "Password must be 8 characters";
    } else if (!/\d/.test(values.password)) {
      errors.password = "Your password must contain 1 number";
    } else if (values.password == values.password.toLowerCase()) {
      errors.password = "Your password must contain a Capital letter";
    }
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "You need to retype your password";
  } else {
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password and confrim password must match";
    }
  }

  return errors;
}

function mapStateToProps(state) {
  return { accounts: state.accounts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signUp }, dispatch);
}

export default reduxForm({
  validate,
  form: "signUpForm",
})(connect(mapStateToProps, mapDispatchToProps)(SignUpForm));

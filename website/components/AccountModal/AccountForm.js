import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { Form, Button } from "antd";

import { TextInput } from "../Input";
import { editAccount } from "../../actions/Accounts";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class AccountForm extends Component {
  state = {
    error: null,
    loading: false,
  };

  onSubmitError(error) {
    this.setState({ error: error, loading: false });
  }

  onSubmitSuccess() {
    this.setState({ error: null, loading: false });

    this.props.onComplete();
  }

  onSubmit(values) {
    this.setState({ loading: true });

    values.email = this.props.accounts.email;
    this.props.editAccount(
      values,
      (r) => this.onSubmitSuccess(r),
      (e) => this.onSubmitError(e)
    );
  }

  render() {
    const { handleSubmit, accounts } = this.props;

    return (
      <div style={{ width: "100%" }}>
        <Form
          layout="basic"
          {...layout}
          onFinish={handleSubmit(this.onSubmit.bind(this))}
        >
          <Form.Item {...tailLayout}>
            <h2 style={{ marginTop: "16px" }}>My Account</h2>
          </Form.Item>

          <Field
            name="email"
            label="Email"
            type="text"
            disabled
            id="account-email"
            placeholder={accounts.email}
            component={TextInput}
          />

          <Field
            name="password"
            label="New Password"
            type="password"
            id="account-password"
            placeholder="••••••••"
            component={TextInput}
          />

          <Field
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="account-confirm-password"
            placeholder="••••••••"
            component={TextInput}
          />

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              id="account-submit"
              loading={this.state.loading}
            >
              Edit Account
            </Button>
          </Form.Item>

          {this.state.error && (
            <Form.Item {...tailLayout} style={{ color: "#f5222d" }}>
              <div id="account-error">{this.state.error.toString()}</div>
            </Form.Item>
          )}
        </Form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

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
  return bindActionCreators({ editAccount }, dispatch);
}

export default reduxForm({
  validate,
  form: "accountForm",
})(connect(mapStateToProps, mapDispatchToProps)(AccountForm));

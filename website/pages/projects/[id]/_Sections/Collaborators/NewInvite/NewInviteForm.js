import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { newInvite } from "../../../../../../actions/Invites";

import { Form, Button, notification } from "antd";
import {
  TextInput,
  RadioButtonInput,
} from "../../../../../../components/Input";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class NewInviteForm extends Component {
  state = {
    error: null,
    loading: false,
  };

  onSubmitError(error) {
    this.setState({ error: error, loading: false });
  }

  onSubmitSuccess(data) {
    const link = `https://chatengine.io/invite/${data.access_key}`;
    navigator.clipboard.writeText(link);
    notification.success({
      message: `Invite link created and copied`,
      description: link,
      placement: "bottomLeft",
    });
    this.setState({ error: null, loading: false });
    this.props.onComplete();
    this.props.reset();
  }

  onSubmit(values) {
    this.setState({ loading: true });
    this.props.newInvite(
      this.props.steps.public_key,
      values,
      (r) => this.onSubmitSuccess(r),
      (e) => this.onSubmitError(e)
    );
  }

  componentDidMount() {
    this.props.initialize({ role: "admin" });
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
            <h2 style={{ marginTop: "16px" }}>New Invite</h2>
          </Form.Item>

          <Field
            name="to_email"
            label="Email"
            type="text"
            id="add-invite-email"
            component={TextInput}
          />

          <Field
            name="role"
            label="Role"
            type="text"
            id="add-invite-role"
            component={RadioButtonInput}
            singleLine={true}
            options={["admin", "member"]}
          />

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              id="add-invite-submit"
              loading={this.state.loading}
            >
              Create & Copy Invite Link
            </Button>
          </Form.Item>

          {this.state.error && (
            <Form.Item {...tailLayout} style={{ color: "#f5222d" }}>
              {this.state.error.toString()}
            </Form.Item>
          )}
        </Form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.to_email || values.to_email.trim().length === 0) {
    errors.to_email = "You need an collaborator email";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(values.to_email)
  ) {
    errors.to_email = "You need a valid email";
  }
  if (!values.role) {
    errors.role = "You need a role";
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    steps: state.steps,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newInvite }, dispatch);
}

export default reduxForm({
  validate,
  form: "newInviteForm",
})(connect(mapStateToProps, mapDispatchToProps)(NewInviteForm));

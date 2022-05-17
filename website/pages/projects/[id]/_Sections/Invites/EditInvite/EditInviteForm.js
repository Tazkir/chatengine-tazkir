import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { editInvite } from "../../../../../../actions/Invites";

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

class EditInviteForm extends Component {
  state = {
    error: null,
    loading: false,
  };

  onSubmitError(error) {
    if (error.response && error.response.status === 404) {
      this.setState({
        error: "You don't have permission to edit invites!",
        loading: false,
      });
    } else {
      this.setState({ error: error, loading: false });
    }
  }

  onSubmitSuccess(data) {
    notification.success({
      message: `"${data.to_email}" editted`,
      placement: "bottomLeft",
    });
    this.setState({ error: null, loading: false });
    this.props.onComplete();
  }

  onSubmit(values) {
    this.setState({ loading: true });
    values.role = values.role.trim();
    this.props.editInvite(
      this.props.invite.access_key,
      values,
      (data) => this.onSubmitSuccess(data),
      (data) => this.onSubmitError(data)
    );
  }

  componentDidMount() {
    const { role, to_email } = this.props.invite;
    this.props.initialize({ role, to_email });
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
            <h2 style={{ marginTop: "16px" }}>Edit Invite</h2>
          </Form.Item>

          <Field
            name="to_email"
            label="Email"
            type="text"
            disabled={true}
            id="edit-invite-email"
            component={TextInput}
          />

          <Field
            name="role"
            label="Role"
            type="text"
            id="edit-invite-role"
            singleLine={true}
            component={RadioButtonInput}
            options={["admin", "member"]}
          />

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              id="edit-invite-submit"
              loading={this.state.loading}
            >
              Save
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
  if (!values.title || values.title.trim().length === 0) {
    errors.title = "You need a invite role";
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editInvite }, dispatch);
}

export default reduxForm({
  validate,
  form: "editInviteForm",
})(connect(mapStateToProps, mapDispatchToProps)(EditInviteForm));

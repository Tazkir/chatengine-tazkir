import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { editCollaborator } from "../../../../../../actions/Collaborators";

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

class EditCollaboratorForm extends Component {
  state = {
    error: null,
    loading: false,
  };

  onSubmitError(error) {
    if (error.response && error.response.status === 404) {
      this.setState({
        error: "You don't have permission to edit collaborators!",
        loading: false,
      });
    } else {
      this.setState({ error: error, loading: false });
    }
  }

  onSubmitSuccess(data) {
    notification.success({
      message: `"${data.user}" editted`,
      placement: "bottomLeft",
    });
    this.setState({ error: null, loading: false });
    this.props.onComplete();
  }

  onSubmit(values) {
    this.setState({ loading: true });
    values.role = values.role.trim();
    this.props.editCollaborator(
      this.props.steps.public_key,
      this.props.collaborator.id,
      values,
      (data) => this.onSubmitSuccess(data),
      (data) => this.onSubmitError(data)
    );
  }

  componentDidMount() {
    const { role, user } = this.props.collaborator;
    this.props.initialize({ role, user });
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
            <h2 style={{ marginTop: "16px" }}>Edit Collaborator</h2>
          </Form.Item>

          <Field
            name="user"
            label="User"
            type="text"
            disabled={true}
            id="edit-collaborator-user"
            component={TextInput}
          />

          <Field
            name="role"
            label="Role"
            type="text"
            id="edit-collaborator-role"
            component={RadioButtonInput}
            options={["admin", "member"]}
          />

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              id="edit-collaborator-submit"
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
    errors.title = "You need a collaborator role";
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
  return bindActionCreators({ editCollaborator }, dispatch);
}

export default reduxForm({
  validate,
  form: "patchCollaboratorForm",
})(connect(mapStateToProps, mapDispatchToProps)(EditCollaboratorForm));

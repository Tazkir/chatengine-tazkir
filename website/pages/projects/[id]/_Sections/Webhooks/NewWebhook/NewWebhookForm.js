import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { newWebhook } from "../../../../../../actions/Webhooks";

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

const formName = "newWebhookForm";

const allOptions = [
  "On New Message",
  "On Edit Message",
  "On Delete Message",
  "On New Chat",
  "On Edit Chat",
  "On Delete Chat",
  "On New User",
  "On Edit User",
  "On Delete User",
];

class NewPersonForm extends Component {
  state = {
    error: null,
    loading: false,
  };

  onSubmitError(error) {
    this.setState({ error: error, loading: false });
  }

  onSubmitSuccess(data) {
    notification.success({
      message: `"${data.event_trigger}" hook created`,
      placement: "bottomLeft",
    });
    this.setState({ error: null, loading: false });
    this.props.onComplete();
    this.props.reset();
  }

  onSubmit(values) {
    this.setState({ loading: true });
    values.url = values.url.trim();

    this.props.newWebhook(
      values,
      (r) => this.onSubmitSuccess(r),
      (e) => this.onSubmitError(e)
    );
  }

  render() {
    const { handleSubmit } = this.props;

    const webhooksArr = Object.values(this.props.steps.webhooks);
    const eventTriggers = webhooksArr
      ? webhooksArr.map((webhook) => {
          return webhook.event_trigger;
        })
      : [];
    const options = allOptions.filter((o) => {
      return eventTriggers.indexOf(o) === -1;
    });

    return (
      <div style={{ width: "100%", paddingBottom: "26px" }}>
        <Form
          layout="basic"
          {...layout}
          onFinish={handleSubmit(this.onSubmit.bind(this))}
        >
          <Form.Item {...tailLayout}>
            <h2 style={{ marginTop: "16px" }}>New Webhook</h2>
          </Form.Item>

          <Field
            name="event_trigger"
            label="Event Trigger *"
            type="text"
            id="add-webhook-event-trigger"
            component={RadioButtonInput}
            options={options}
          />

          <Field
            name="url"
            label="URL *"
            type="text"
            id="add-webhook-url"
            component={TextInput}
          />

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              id="add-webhook-submit"
              loading={this.state.loading}
            >
              Create Webhook
            </Button>
          </Form.Item>

          {this.state.error && (
            <Form.Item {...tailLayout} style={{ color: "#f5222d" }}>
              <div id="new-webhook-error">{this.state.error.toString()}</div>
            </Form.Item>
          )}
        </Form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.event_trigger) {
    errors.event_trigger = "You need an event trigger";
  } else if (allOptions.indexOf(values.event_trigger) === -1) {
    errors.event_trigger = "You need a valid event trigger";
  }

  if (!values.url) {
    errors.url = "You need a URL to hook into";
  } else {
    var pattern = new RegExp(
      "^(https?:\\/\\/)" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    if (!pattern.test(values.url)) {
      errors.url = "You need a valid URL";
    }
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    steps: state.steps,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newWebhook }, dispatch);
}

export default reduxForm({
  validate,
  form: formName,
})(connect(mapStateToProps, mapDispatchToProps)(NewPersonForm));

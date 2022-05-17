import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { deleteWebhook } from '../../../../../../actions/Webhooks'

import { Form, Button, notification } from 'antd'
import { TextInput } from '../../../../../../components/Input'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

var match = null;

class DeleteWebhookForm extends Component {
    state = {
        error: null,
        loading: false,
    }

    onSubmitError(error) {
        this.setState({ error: error, loading: false })
    }

    onSubmitSuccess(data) {
        notification.success({ message: `"${data.event_trigger}" deleted`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
        this.props.reset()
    }

    onSubmit(){
        this.setState({ loading: true })

        this.props.deleteWebhook(
            this.props.webhook.event_trigger,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    componentDidMount() { match = this.props.webhook.event_trigger }

    render(){
        const { handleSubmit } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                
                <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>

                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            Delete Webhook
                        </h2>

                        <div>{`Type the event trigger "${this.props.webhook.event_trigger}" to delete this webhook.`}</div>
                    </Form.Item>

                    <Field
                        name="event_trigger"
                        label="Event Trigger"
                        type="text"
                        id='delete-webhook-event-trigger'
                        component={TextInput}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='danger'
                            htmlType="submit"
                            id='delete-webhook-submit'
                            loading={this.state.loading}>
                            Delete
                        </Button>
                    </Form.Item>

                    {
                        this.state.error &&
                        <Form.Item {...tailLayout } style={{ color: '#f5222d' }}>
                            { this.state.error.toString() }
                        </Form.Item>
                    }
                
                </Form>

            </div>
        )
    }
}

function validate(values){
  const errors = {}
  if(!values.event_trigger || values.event_trigger.trim().length === 0){
    errors.event_trigger = "You need to enter the event trigger"
  }
  if(values.event_trigger !== match){
    errors.event_trigger = "This Event Trigger is not correct"
  }
  return errors;
}

function mapStateToProps(state){
    return { 
      accounts: state.accounts,
      steps: state.steps
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteWebhook }, dispatch)
}

export default reduxForm({
  validate,
  form: 'DeleteWebhookForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(DeleteWebhookForm)
)
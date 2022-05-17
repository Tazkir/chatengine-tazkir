import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { editProject } from '../../../../../../actions/Projects'

import { Form, Button, notification } from 'antd'
import { TextInput } from '../../../../../../components/Input'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class NotificationsForm extends Component {
    state = {
        error: null,
        loading: false,
    }

    onSubmitError(error) {
        this.setState({ error: error, loading: false })
    }

    onSubmitSuccess(data) {
        notification.success({ 
            message: `Notifications ${data.is_emails_enabled ? 'Enabled' : 'Disabled'}`, 
            placement: 'bottomLeft' 
        })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
        this.props.reset()
    }

    onSubmit(values){
        if (values.is_emails_enabled !== false) { values.is_emails_enabled = true }
        this.setState({ loading: true })
        this.props.editProject(
            this.props.steps.public_key, 
            values,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    componentDidMount() {
        const { email_sender, email_link, email_company_name } = this.props.steps
        this.props.initialize({ email_sender, email_link, email_company_name })
    }

    render(){
        const { handleSubmit, steps } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>
                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            Notifications
                        </h2>
                    </Form.Item>

                    {
                        steps.plan_type === 'basic' &&
                        <Form.Item {...tailLayout}>
                            <p><b>With the free account, your emails are throttled to one every 5 minutes.</b></p>
                        </Form.Item>
                    }

                    <Field
                        name="email_sender"
                        label="From Email"
                        placeholder='no_reply@example.com'
                        type="text"
                        id='notifications-email-sender'
                        component={TextInput}
                    />

                    <Field
                        name="email_link"
                        label="Email Link"
                        placeholder='https://example.com/redirect'
                        type="text"
                        id='notifications-email-link'
                        component={TextInput}
                    />

                    <Field
                        name="email_company_name"
                        label="Company Name"
                        placeholder='Example Co.'
                        type="text"
                        id='notifications-email-company-name'
                        component={TextInput}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='primary'
                            htmlType="submit"
                            id='notifications-submit'
                            loading={this.state.loading}
                        >
                            { steps.is_emails_enabled ? 'Change' : 'Enable' }
                        </Button>
                    </Form.Item>

                    {
                        this.state.error &&
                        <Form.Item {...tailLayout } style={{ color: '#f5222d' }}>
                            { this.state.error.toString() }
                        </Form.Item>
                    }

                    {
                        steps.is_emails_enabled &&
                        <Form.Item {...tailLayout } style={{ color: '#f5222d' }}>
                            <Button 
                                type='danger'
                                id='notifications-disable-button'
                                loading={this.state.loading}
                                onClick={() => this.onSubmit({ is_emails_enabled: false })}
                            >
                                Disable
                            </Button>
                        </Form.Item>
                    }
                </Form>
            </div>
        )
    }
}

function validate(values){
  const errors = {}
    if(!values.email_sender){
        errors.email_sender = "You need a sender email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(values.email_sender)) {
        errors.email_sender = "Invalid email address"
    }

    if(!values.email_link){
        errors.email_link = "Enter the link for your website"
    } else {
        var pattern = new RegExp('^(https:\\/\\/)'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        if(!pattern.test(values.email_link)){
            errors.email_link = "You need a valid HTTPS URL"
        }
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
  return bindActionCreators({ editProject }, dispatch)
}

export default reduxForm({
  validate,
  form: 'notificationsForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(NotificationsForm)
)
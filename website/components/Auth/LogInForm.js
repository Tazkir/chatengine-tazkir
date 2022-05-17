import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { Form, Button } from 'antd'
import { TextInput } from '../Input'

import { signIn } from '../../actions/Accounts/signIn'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class LogInForm extends Component {
    state = {
        error: null,
        loading: false,
    }

    onSubmitError(error) {
        this.setState({ error: error, loading: false })
    }

    onSubmitSuccess(data) {
        this.setState({ error: null, loading: false })

        this.props.onComplete();
    }

    onSubmit(values){
        this.setState({ loading: true })

        this.props.signIn(
            values,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    render(){
        const { handleSubmit } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                <Form onFinish={handleSubmit(this.onSubmit.bind(this))} layout='basic' {...layout}>
                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            Login
                        </h2>
                    </Form.Item>

                    <Field
                        name="email"
                        label="Email"
                        type="text"
                        id='login-email'
                        placeholder='john@example.com'
                        component={TextInput}
                    />

                    <Field
                        name="password"
                        label="Password"
                        type="password"
                        id='login-password'
                        placeholder='••••••••'
                        component={TextInput}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='primary'
                            htmlType="submit"
                            id='login-submit'
                            loading={this.state.loading}>
                            Log In
                        </Button>
                    </Form.Item>

                    {
                        this.state.error &&
                        <Form.Item {...tailLayout } style={{ color: '#f5222d' }}>
                            <div id='login-error'>
                                { this.state.error.toString() } 
                            </div>
                        </Form.Item>
                    }

                    <Form.Item {...tailLayout}>
                        <a href='/reset' id='forgot-password-link'>
                            Forogt password?
                        </a>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

function validate(values){
  const errors = {}
  if(!values.email){
    errors.email = "You need an email"
  }
  if(!values.password){
    errors.password = "You need a password"
  }
  return errors;
}

function mapStateToProps(state){
  return { accounts: state.accounts }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ signIn }, dispatch)
}

export default reduxForm({
  validate,
  form: 'logInForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(LogInForm)
)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Field, reduxForm } from 'redux-form'

import { Button, Col, Form, Row } from 'antd'

import { TextInput } from '../../components/Input'

import { sendResetLink } from '../../actions/EditAccount'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


class ForgotPasswordPage extends Component {
    state = {
        loading: false,
        message: '',
        error: '',
    }

    onSubmit(values){
        this.setState({ loading: true })

        this.props.sendResetLink(
            values,
            (data) => this.setState({ loading: false, message: data.message, error: '' }),
            (error) => this.setState({ loading: false, message: '', error })
        )
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <div style={{ height: 'calc(100vh - 64px)' }}>
                <Row>
                    <Col xs={0} sm={0} md={6} lg={8} />

                    <Col xs={24} sm={24} md={12} lg={8}>
                        <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>
                            <Form.Item {...tailLayout}>
                                <h2 style={{ marginTop: '42px' }}>
                                    Forgot Password
                                </h2>
                            </Form.Item>

                            <Field
                                name="email"
                                label="Email"
                                type="text"
                                id='forgot-password-email'
                                placeholder='john@example.com'
                                component={TextInput}
                            />

                            <Form.Item {...tailLayout}>
                                <Button 
                                    type='primary'
                                    htmlType="submit"
                                    id='forgot-password-submit'
                                    loading={this.state.loading}>
                                    Send Reset Link
                                </Button>
                            </Form.Item>

                            <Form.Item {...tailLayout} style={{ color: '#1890ff' }}>
                                {this.state.message}
                            </Form.Item>

                            <Form.Item {...tailLayout} style={{ color: '#f5222d' }}>
                                {this.state.error}
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ sendResetLink }, dispatch)
}

export default reduxForm({
    form: 'forgotPasswordForm',
})(
    connect(null, mapDispatchToProps)(ForgotPasswordPage)
)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { newChat } from '../../../../../../actions/Chats'

import { Form, Button, notification } from 'antd'
import { TextInput } from '../../../../../../components/Input'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class NewPersonForm extends Component {
    state = {
        error: null,
        loading: false,
    }

    onSubmitError(error) {
        if (error.response && error.response.status === 404) {
            this.setState({ error: 'No user has this username, create a user with this username!', loading: false })
        } else {
            this.setState({ error: error, loading: false })
        }
    }

    onSubmitSuccess(data) {
        notification.success({ message: `"${data.title}" created`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
        this.props.reset()
    }

    onSubmit(values){
        this.setState({ loading: true })
        values.title = values.title.trim()
        this.props.newChat(
            this.props.steps.public_key,
            values,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    render(){
        const { handleSubmit } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>
                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            New Chat
                        </h2>
                    </Form.Item>

                    <Field
                        name="title"
                        label="Chat Title"
                        type="text"
                        id='add-chat-title'
                        component={TextInput}
                    />

                    <Field
                        name="admin_username"
                        label="Admin Username"
                        type="text"
                        id='add-chat-admin'
                        component={TextInput}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='primary'
                            htmlType="submit"
                            id='add-chat-submit'
                            loading={this.state.loading}>
                            Create Chat
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
  if(!values.title || values.title.trim().length === 0){
    errors.title = "You need a chat title"
  }
  if(!values.admin_username){
    errors.admin_username = "You need an admin user"
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
  return bindActionCreators({ newChat }, dispatch)
}

export default reduxForm({
  validate,
  form: 'newChatForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(NewPersonForm)
)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { editChat } from '../../../../../../actions/Chats'

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
        notification.success({ message: `"${data.title}" editted`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
    }

    onSubmit(values){
        this.setState({ loading: true })
        values.title = values.title.trim()
        this.props.editChat(
            this.props.steps.public_key,
            this.props.chat.id,
            values,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    componentDidMount() {
        const { chat } = this.props
        this.props.initialize({ title: chat.title, admin_username: chat.admin.username })
    }

    render(){
        const { handleSubmit } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>
                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            Edit Chat
                        </h2>
                    </Form.Item>

                    <Field
                        name="title"
                        label="Chat Title"
                        type="text"
                        id='edit-chat-title'
                        component={TextInput}
                    />

                    <Field
                        name="admin_username"
                        label="Admin Username"
                        type="text"
                        id='edit-chat-admin'
                        component={TextInput}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='primary'
                            htmlType="submit"
                            id='edit-chat-submit'
                            loading={this.state.loading}>
                            Save
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
  return bindActionCreators({ editChat }, dispatch)
}

export default reduxForm({
  validate,
  form: 'patchChatForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(NewPersonForm)
)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { deleteChat } from '../../../../../../actions/Chats'

import { Form, Button, notification } from 'antd'
import { TextInput } from '../../../../../../components/Input'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

let match = null

class DeleteChatForm extends Component {
    state = {
        error: null,
        loading: false,
    }

    onSubmitError(error) {
        this.setState({ error: error, loading: false })
    }

    onSubmitSuccess(data) {
        notification.success({ message: `"${data.title}" deleted`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
    }

    onSubmit(){
        this.setState({ loading: true })

        this.props.deleteChat(
            this.props.steps.public_key,
            this.props.chat.id,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    componentDidMount() { match = String(this.props.chat.title) }

    render(){
        const { handleSubmit } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>
                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            Delete Chat
                        </h2>

                        <div>{`Type the title "${this.props.chat.title}" to delete this chat.`}</div>
                    </Form.Item>

                    <Field
                        name="title"
                        label="Chat Title"
                        type="text"
                        id='delete-chat-title'
                        component={TextInput}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='danger'
                            htmlType="submit"
                            id='delete-chat-submit'
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
  if(!values.title){
    errors.title = "You need to enter the title"
  }
  if(values.title !== match){
    errors.title = "This title is not correct"
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
  return bindActionCreators({ deleteChat }, dispatch)
}

export default reduxForm({
  validate,
  form: 'deleteChatForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(DeleteChatForm)
)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { deleteInvite } from '../../../../../../actions/Invites'

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

class DeleteInviteForm extends Component {
    state = {
        error: null,
        loading: false,
    }

    onSubmitError(error) {
        this.setState({ error: error, loading: false })
    }

    onSubmitSuccess(data) {
        notification.success({ message: `"${data.to_email}" uninvited`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
    }

    onSubmit(){
        this.setState({ loading: true })

        this.props.deleteInvite(
            this.props.invite.access_key,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    componentDidMount() { match = String(this.props.invite.to_email) }

    render(){
        const { handleSubmit } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>
                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            Delete Invite
                        </h2>

                        <div>{`Type the email "${this.props.invite.to_email}" to remove this invitation.`}</div>
                    </Form.Item>

                    <Field
                        name="email"
                        label="Email"
                        type="text"
                        id='delete-invite-email'
                        component={TextInput}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='danger'
                            htmlType="submit"
                            id='delete-invite-submit'
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
  if(!values.email){
    errors.email = "You need to enter the title"
  }
  if(values.email !== match){
    errors.email = "This email is not correct"
  }
  return errors;
}

function mapStateToProps(state){
    return { 
        accounts: state.accounts
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteInvite }, dispatch)
}

export default reduxForm({
  validate,
  form: 'deleteInviteForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(DeleteInviteForm)
)
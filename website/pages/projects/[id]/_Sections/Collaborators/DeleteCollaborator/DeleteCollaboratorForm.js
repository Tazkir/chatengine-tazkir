import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { deleteCollaborator } from '../../../../../../actions/Collaborators'

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

class DeleteCollaboratorForm extends Component {
    state = {
        error: null,
        loading: false,
    }

    onSubmitError(error) {
        this.setState({ error: error, loading: false })
    }

    onSubmitSuccess(data) {
        notification.success({ message: `"${data.user}" removed`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
    }

    onSubmit(){
        this.setState({ loading: true })

        this.props.deleteCollaborator(
            this.props.steps.public_key,
            this.props.collaborator.id,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    componentDidMount() { match = String(this.props.collaborator.user) }

    render(){
        const { handleSubmit } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>
                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            Remove Collaborator
                        </h2>

                        <div>{`Type the email "${this.props.collaborator.user}" to remove this collaborator.`}</div>
                    </Form.Item>

                    <Field
                        name="email"
                        label="User Email"
                        type="text"
                        id='delete-collaborator-email'
                        component={TextInput}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='danger'
                            htmlType="submit"
                            id='delete-collaborator-submit'
                            loading={this.state.loading}>
                            Remove
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
        accounts: state.accounts,
        steps: state.steps
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteCollaborator }, dispatch)
}

export default reduxForm({
  validate,
  form: 'deleteCollaboratorForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(DeleteCollaboratorForm)
)
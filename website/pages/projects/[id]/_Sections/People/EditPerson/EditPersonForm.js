import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { editPerson } from '../../../../../../actions/People'

import { Form, Button, notification } from 'antd'
import { TextInput, PhotoInput } from '../../../../../../components/Input'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const formName = 'editPersonForm'

class NewPersonForm extends Component {
    state = {
        error: null,
        loading: false,
    }

    onSubmitError(error) {
        if (error.response && error.response.status === 400) {
            this.setState({ error: 'This username is taken. Please use another.', loading: false })
        } else {
            this.setState({ error: error, loading: false })
        }
    }

    onSubmitSuccess(data) {
        notification.success({ message: `"${data.username}" editted`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
    }

    onSubmit(values){
        this.setState({ loading: true })
        values.username = values.username.trim()
        this.props.editPerson(
            this.props.steps.public_key,
            this.props.person.id,
            values,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    componentDidMount() {
        const { username, first_name, last_name, email } = this.props.person
        this.props.initialize({ username, first_name, last_name, email })
    }

    render(){
        const { handleSubmit } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>
                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            Edit Person
                        </h2>
                    </Form.Item>

                    <Field
                        name="username"
                        label="Username"
                        type="text"
                        id='edit-person-username'
                        component={TextInput}
                    />

                    <Field
                        name="secret"
                        label="New Secret"
                        type="password"
                        id='edit-person-secret'
                        component={TextInput}
                    />

                    <Field
                        name="confirm_secret"
                        label="Confirm New Secret"
                        type="password"
                        id='edit-person-confirm-secret'
                        component={TextInput}
                    />

                    <Field
                        name="email"
                        label="Email"
                        type="text"
                        id='edit-person-email'
                        component={TextInput}
                    />

                    <Field
                        name="first_name"
                        label="First Name"
                        type="text"
                        id='edit-person-first-name'
                        component={TextInput}
                    />

                    <Field
                        name="last_name"
                        label="Last Name"
                        type="text"
                        id='edit-person-last-name'
                        component={TextInput}
                    />
                    
                    <PhotoInput 
                        name='avatar' 
                        label='New Avatar' 
                        formName={formName}
                        default={this.props.person.avatar}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='primary'
                            htmlType="submit"
                            id='edit-person-submit'
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
  if(!values.username || values.username.trim().length === 0){
    errors.username = "You need a username"
  }
  if((values.secret || values.confirm_secret) && (values.secret !== values.confirm_secret)) {
    errors.secret = "Secret and confirm secret must match"
    errors.confirm_secret = "Secret and confirm secret must match"
  }
  if(values.email) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(values.email)) {
        errors.email = 'This email address is not valid';
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
  return bindActionCreators({ editPerson }, dispatch)
}

export default reduxForm({
  validate,
  form: formName,
})(
  connect(mapStateToProps, mapDispatchToProps)(NewPersonForm)
)
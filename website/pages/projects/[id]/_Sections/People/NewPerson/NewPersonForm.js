import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { newPerson } from '../../../../../../actions/People'

import { Form, Button, notification } from 'antd'
import { TextInput, PhotoInput } from '../../../../../../components/Input'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const formName = 'newPersonForm'

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
        notification.success({ message: `"${data.username}" created`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
        this.props.reset()
    }

    onSubmit(values){
        this.setState({ loading: true })
        values.username = values.username.trim()
        this.props.newPerson(
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
                            New User
                        </h2>
                    </Form.Item>

                    <Field
                        name="username"
                        label="Username *"
                        type="text"
                        id='add-person-username'
                        component={TextInput}
                    />

                    <Field
                        name="secret"
                        label="Secret *"
                        type="password"
                        id='add-person-secret'
                        component={TextInput}
                    />

                    <Field
                        name="confirm_secret"
                        label="Confirm Secret *"
                        type="password"
                        id="add-person-confirm-secret"
                        component={TextInput}
                    />

                    <Field
                        name="email"
                        label="Email"
                        type="text"
                        id='add-person-email'
                        component={TextInput}
                    />

                    <Field
                        name="first_name"
                        label="First Name"
                        type="text"
                        id='add-person-first-name'
                        component={TextInput}
                    />

                    <Field
                        name="last_name"
                        label="Last Name"
                        type="text"
                        id='add-person-last-name'
                        component={TextInput}
                    />

                    <PhotoInput name='avatar' label='Avatar' formName={formName} />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='primary'
                            htmlType="submit"
                            id='add-person-submit'
                            loading={this.state.loading}>
                            Create Person
                        </Button>
                    </Form.Item>

                    {
                        this.state.error &&
                        <Form.Item {...tailLayout } style={{ color: '#f5222d' }}>
                            <div id='new-person-error'>
                                { this.state.error.toString() }
                            </div>
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
  if(!values.secret){
    errors.secret = "You need a secret"
  }
  if(!values.confirm_secret){
    errors.confirm_secret = "You need a secret here too"
  }
  if(values.secret && values.confirm_secret && values.secret !== values.confirm_secret) {
    errors.secret = "Secret and confirm Secret must match"
    errors.confirm_secret = "Secret and confirm Secret must match"
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
  return bindActionCreators({ newPerson }, dispatch)
}

export default reduxForm({
  validate,
  form: formName,
})(
  connect(mapStateToProps, mapDispatchToProps)(NewPersonForm)
)
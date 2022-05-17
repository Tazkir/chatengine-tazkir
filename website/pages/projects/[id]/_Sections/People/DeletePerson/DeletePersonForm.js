import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { deletePerson } from '../../../../../../actions/People'

import { Form, Button, notification } from 'antd'
import { TextInput } from '../../../../../../components/Input'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

var match = null;

class DeletePersonForm extends Component {
    state = {
        error: null,
        loading: false,
    }

    onSubmitError(error) {
        this.setState({ error: error, loading: false })
    }

    onSubmitSuccess(data) {
        notification.success({ message: `"${data.username}" deleted`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
        this.props.reset()
    }

    onSubmit(){
        this.setState({ loading: true })

        this.props.deletePerson(
            this.props.steps.public_key,
            this.props.person.id,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    componentDidMount() { match = this.props.person.username }

    render(){
        const { handleSubmit } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                
                <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>

                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            Delete Person
                        </h2>

                        <div>{`Type the username "${this.props.person.username}" to delete this user.`}</div>
                    </Form.Item>

                    <Field
                        name="username"
                        label="Username"
                        type="text"
                        id='delete-person-username'
                        component={TextInput}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='danger'
                            htmlType="submit"
                            id='delete-person-submit'
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
  if(!values.username || values.username.trim().length === 0){
    errors.username = "You need to enter the username"
  }
  if(values.username !== match){
    errors.username = "This username is not correct"
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
  return bindActionCreators({ deletePerson }, dispatch)
}

export default reduxForm({
  validate,
  form: 'deletePersonForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(DeletePersonForm)
)
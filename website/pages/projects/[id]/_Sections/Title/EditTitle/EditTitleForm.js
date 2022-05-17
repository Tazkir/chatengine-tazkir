import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { editProject } from '../../../../../../actions/Projects'

import { Form, Button, notification } from 'antd'
import { TextInput } from '../../../../../../components/Input'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const formName = 'editProjectForm'

class NewPersonForm extends Component {
    state = {
        error: null,
        loading: false,
    }

    onSubmitError(error) {
        console.log('error', error)
        this.setState({ error: 'Oops, something went wrong!', loading: false })
    }

    onSubmitSuccess(data) {
        notification.success({ message: `Edit success!`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
        this.props.reset()
    }

    onSubmit(values){
        this.setState({ loading: true })
        values.title = values.title.trim()
        this.props.editProject(
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
                            Edit Title
                        </h2>
                    </Form.Item>

                    <Field
                        name="title"
                        label="New Title *"
                        type="text"
                        id='edit-title'
                        placeholder={this.props.steps.title}
                        component={TextInput}
                    />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='primary'
                            htmlType="submit"
                            id='edit-title-submit'
                            loading={this.state.loading}>
                            Submit
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
  if(!values.title || values.title.trim().length === 0){
    errors.title = "You need a title"
  }
  return errors;
}

function mapStateToProps(state){
    return { 
      steps: state.steps
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ editProject }, dispatch)
}

export default reduxForm({
  validate,
  form: formName,
})(
  connect(mapStateToProps, mapDispatchToProps)(NewPersonForm)
)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Field, FieldArray, reduxForm } from 'redux-form'

import { editChatPeople } from '../../../../../../actions/Chats'

import { Form, Button, Input, notification } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'

const FormItem = Form.Item

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const renderField = ({ input, index, type, meta: { touched, error } }) => (
    <span>
        <Input {...input} id={`group-member-${index}-input`} type={type} style={{ width: '60%' }} />

        <span style={{ color: 'red' }}>
            { (touched && error) && error}
        </span> 
    </span>
)

const renderUsernames = ({ fields, meta: { error, submitFailed } }) => (
    <div>
        {fields.map((member, index) => (
            <FormItem label='Username'>
                <Field
                    name={`${member}.person`}
                    type="text"
                    component={renderField}
                    label='Username'
                    index={index}
                    onRemove={() => fields.remove(index)} 
                />

                <Button 
                    shape="circle" 
                    icon={<DeleteOutlined />} 
                    style={{ margin: '0 8px' }}
                    onClick={() => fields.remove(index)}
                />
            </FormItem>
        ))}

        <Form.Item {...tailLayout}>
            <Button id='add-member-button' icon={<PlusOutlined />} onClick={() => fields.push({})}>
                Add Member
            </Button>

            <div />
            
            <span style={{ color: 'red' }}>
                {(submitFailed && error) && error}
            </span>
        </Form.Item>
    </div>
)

class NewPersonForm extends Component {
    state = {
        error: null,
        loading: false
    }

    onSubmitError(error) {
        if (error.response && error.response.status === 400) {
            this.setState({ error: 'One of these usernames is invalid. Make sure each username belongs to a User.', loading: false })
        } else {
            this.setState({ error: error, loading: false })
        }
    }

    onSubmitSuccess(data) {
        notification.success({ message: `"${data.title}" members changed`, placement: 'bottomLeft' })
        this.setState({ error: null, loading: false })
        this.props.onComplete()
    }

    onSubmit(values) {
        this.setState({ loading: true })

        this.props.editChatPeople(
            this.props.steps.public_key,
            this.props.chat.id,
            values,
            (r) => this.onSubmitSuccess(r),
            (e) => this.onSubmitError(e),
        )
    }

    componentDidMount() {
        const people = this.props.chat.people.map(person => {
            return { person: person.person.username }
        })
        this.props.initialize({ people })
    }

    componentWillUnmount() {
        const people = this.props.chat.people.map(person => {
            return person.person.username
        })
        this.props.initialize({ people })
    }

    render(){
        const { handleSubmit } = this.props

        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                <Form layout='basic' {...layout} onFinish={handleSubmit(this.onSubmit.bind(this))}>
                    <Form.Item {...tailLayout}>
                        <h2 style={{ marginTop: '16px' }}>
                            Chat Members
                        </h2>
                    </Form.Item>

                    <FieldArray name="people" component={renderUsernames} />

                    <Form.Item {...tailLayout}>
                        <Button 
                            type='primary'
                            htmlType="submit"
                            id='group-members-submit'
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

    if (!values.people || !values.people.length) {
        errors.people = { _error: 'At least one member must be entered' }

    } else { 
        const peopleArrayErrors = []
        values.people.forEach((person, index) => {
            const memberErrors = {}
            if (!person || !person.person) {
                memberErrors.person = 'Required'
                peopleArrayErrors[index] = memberErrors
            }
        })
        if (peopleArrayErrors.length) {
            errors.people = peopleArrayErrors
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
    return bindActionCreators({ editChatPeople }, dispatch)
}

export default reduxForm({
    validate,
    form: 'groupMembersForm',
})(
    connect(mapStateToProps, mapDispatchToProps)(NewPersonForm)
)
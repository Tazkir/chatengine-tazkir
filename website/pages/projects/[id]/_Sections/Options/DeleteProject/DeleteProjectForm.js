import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { deleteProject } from '../../../../../../actions/Projects'

import { useRouter } from 'next/router'

import { Form, Button } from 'antd'
import { TextInput } from '../../../../../../components/Input'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

var match = null;

const DeleteProjectForm = props => {
    const didMountRef = useRef(false)
    const router = useRouter()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    function onSubmitError(error) {
        setError(error)
        setLoading(false)
    }

    function onSubmitSuccess(data) {
        setError(null)
        setLoading(false)
        
        router.push('/projects')
    }

    function onSubmit(values){
        setLoading(true)

        props.deleteProject(
            props.steps.public_key,
            (r) => onSubmitSuccess(r),
            (e) => onSubmitError(e),
        )
    }

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true
            match = String(props.steps.title)
        }
    })

    const { handleSubmit } = props

    return (
        <div style={{ width: "100%", paddingBottom: '26px' }}>
            <Form layout='basic' {...layout} onFinish={handleSubmit(onSubmit.bind(this))}>
                <Form.Item {...tailLayout}>
                    <h2 style={{ marginTop: '16px' }}>
                        Delete Project
                    </h2>

                    <div>{`Type the title "${props.steps.title}" to delete this project.`}</div>                            
                </Form.Item>

                <Field
                    name="title"
                    label="Project Title"
                    type="text"
                    id='delete-project-title'
                    component={TextInput}
                />

                <Form.Item {...tailLayout}>
                    <Button 
                        type='danger'
                        htmlType="submit"
                        id='delete-project-button'
                        loading={loading}>
                        Delete
                    </Button>
                </Form.Item>

                {
                    error &&
                    <Form.Item {...tailLayout } style={{ color: '#f5222d' }}>
                        { error.toString() }
                    </Form.Item>
                }
            </Form>
        </div>
    )
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
        steps: state.steps,
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteProject }, dispatch)
}

export default reduxForm({
  validate,
  form: 'deleteProjectForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(DeleteProjectForm)
)
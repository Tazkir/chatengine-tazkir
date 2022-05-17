import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

import { Form, Button } from "antd";
import { TextInput, RadioInput } from "../../../components/Input";

import { newProject } from "../../../actions/Projects";

import { useRouter } from "next/router";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const formName = "newProjectForm";

const NewProjectForm = (props) => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function onSubmitError(error) {
    setLoading(false);
    setError(error);
  }

  function onSubmitSuccess(project) {
    setLoading(false);
    setError(null);

    router.push(`/projects/${project.public_key}`);
  }

  function onSubmit(values) {
    setLoading(true);

    props.newProject(
      values,
      (r) => onSubmitSuccess(r),
      (e) => onSubmitError(e)
    );
  }

  const { handleSubmit } = props;

  return (
    <div style={{ width: "100%", paddingBottom: "26px" }}>
      <Form layout="basic" {...layout} onFinish={handleSubmit(onSubmit)}>
        <Form.Item {...tailLayout}>
          <h2 style={{ marginTop: "16px" }}>New Project</h2>
        </Form.Item>

        <Field
          name="title"
          label="Project Title"
          placeholder="My Marketplace App"
          type="text"
          id="project-title-input"
          component={TextInput}
        />

        <div style={{ height: "56px" }}>
          <Field
            name="goal"
            label="My Goal"
            type="text"
            id="project-goal"
            component={RadioInput}
            options={["Learn Javascript 📚", "Build an App 🚀"]}
          />
        </div>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            id="project-submit"
            loading={loading}
          >
            Get Started
          </Button>
        </Form.Item>

        {error && (
          <Form.Item {...tailLayout} style={{ color: "#f5222d" }}>
            {error.toString()}
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "You need a project title";
  }
  if (!values.goal) {
    errors.goal = "You need a project goal";
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newProject }, dispatch);
}

export default reduxForm({
  validate,
  form: formName,
})(connect(mapStateToProps, mapDispatchToProps)(NewProjectForm));

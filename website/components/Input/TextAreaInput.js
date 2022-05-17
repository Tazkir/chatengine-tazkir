import React from "react";
import { Form, Input } from "antd";

const { TextArea } = Input;

const FormItem = Form.Item;

const TextAreaInput = (field) => {
  const {
    meta: { touched, error },
  } = field;
  const className = `${touched && error ? "error" : ""}`;

  return (
    <FormItem
      validateStatus={className}
      help={touched ? error : ""}
      label={field.label}
      extra={field.extra}
      style={{ height: "78px", marginBottom: "0px" }}
    >
      <TextArea
        {...field.input}
        autoComplete="off"
        placeholder={field.placeholder}
        disabled={field.disabled}
        onBlur={field.onInputChange}
        prefix={field.prefix}
        type={field.type}
        id={field.id}
      />
    </FormItem>
  );
};

export default TextAreaInput;

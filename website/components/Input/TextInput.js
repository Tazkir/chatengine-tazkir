import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const TextInput = field => {
  const { meta: { touched, error } } = field;
  const className = `${touched && error ? 'error' : ''}`;

  return(
    <FormItem
      validateStatus={className}
      help={touched ? error : ''}
      label={field.label}
      extra={field.extra}
      style={{ height: '56px', marginBottom: '0px' }}
    >
      <Input
        {...field.input}
        autoComplete="off"
        placeholder={field.placeholder}
        disabled={field.disabled}
        onBlur={field.onInputChange}
        prefix={field.prefix}
        type={field.type}
        id={field.id} />
    </FormItem>
  )
}

export default TextInput;

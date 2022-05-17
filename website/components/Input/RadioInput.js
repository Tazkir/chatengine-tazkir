import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Form, Radio } from "antd";
import { change } from "redux-form";

const FormItem = Form.Item;

class RadioButtonInput extends Component {
  onChange(e) {
    this.props.change(
      this.props.meta.form,
      this.props.input.name,
      e.target.value
    );
  }

  renderOptions() {
    return this.props.options.map((option, index) => {
      return (
        <Radio
          value={option}
          key={`${this.props.meta.form}-${this.props.input.name}-${index}`}
        >
          <div id={`${this.props.input.name}-${option.replace(/ /g, "-")}`}>
            {option}
          </div>
        </Radio>
      );
    });
  }

  render() {
    const field = this.props;
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
        style={{
          height: field.singleLine ? "56px" : "auto",
          marginBottom: "0px",
        }}
      >
        <Radio.Group
          {...field.input}
          id={field.id}
          buttonStyle="solid"
          onChange={this.onChange.bind(this)}
          value={field.input.value}
        >
          {this.renderOptions()}
        </Radio.Group>
      </FormItem>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ change }, dispatch);
}

export default connect(null, mapDispatchToProps)(RadioButtonInput);

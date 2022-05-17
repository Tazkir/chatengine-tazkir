import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { change } from "redux-form";

import { Form } from 'antd'

const FormItem = Form.Item

class PhotoInput extends Component {
  state = {
    default: undefined
  }

  onChange(event) {
    const file = event.target.files[0]
    this.props.change(this.props.formName, this.props.name, file)
    this.setState({ default: undefined })
  }

  componentDidMount() {
    if(this.props.default) {
      const sections = this.props.default.split('/')
      var fileName = sections[sections.length - 1].split('?')[0]
      if(fileName.length > 30) {
        fileName = fileName.slice(0, 27) + '...'
      }
      this.setState({ default: fileName })
    }
  }

  render() {
    const field = this.props 

    return(
      <FormItem
        label={field.label}
        extra={field.extra}
        style={{ height: '56px', marginBottom: '0px' }}
      >

        <input
          {...field.input}
          type='file'
          id={field.id} 
          multiple={false}
          accept="image/x-png,image/gif,image/jpeg"
          onChange={this.onChange.bind(this)}
        />

        {
          this.state.default && `(${this.state.default})`
        }

      </FormItem>
    ) 
  }

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ change }, dispatch);
}

export default connect(null, mapDispatchToProps)(PhotoInput);
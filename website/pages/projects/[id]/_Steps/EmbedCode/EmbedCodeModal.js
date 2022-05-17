import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Form, Input, Modal, Button } from 'antd'

import { CodeOutlined } from '@ant-design/icons'

import { CodeBlock, dracula } from "react-code-blocks"

import { getMessageCount } from '../../../../../actions/Messages'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class EmbedCode extends Component {
    state = {
        visible: false,
        username: '',
        secret: '',
    }

    render() {
        const completeForm = this.state.username.trim() !== '' && this.state.secret.trim() !== ''

        return (
            <div>
                <Button 
                    size='large'
                    type='primary'
                    icon={<CodeOutlined />}
                    onClick={() => this.setState({ visible: true })}
                    style={{ marginLeft: '28px', marginTop: '16px' }}
                >
                    Embed Chat Engine
                </Button>

                {
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <Form layout='basic' {...layout}>
                            <Form.Item {...tailLayout}>
                                <h2 style={{ marginTop: '16px' }}>
                                    Embed Chat Engine
                                </h2>

                                <div>
                                    To complete your setup, enter a user's username and secret into the form.
                                </div>
                            </Form.Item>

                            <Form.Item
                                name="username"
                                label="Username"
                                rules={[{ required: true, message: 'Please enter a username' }]}
                            >
                                <Input 
                                    autoComplete='off'
                                    id='embed-username-input'
                                    onChange={(e) => this.setState({ username: e.target.value })}
                                />
                            </Form.Item>

                            <Form.Item
                                name="secret"
                                label="Secret"
                                rules={[{ required: true, message: 'Please enter a user secret' }]}
                            >
                                <Input 
                                    autoComplete='off'
                                    id='embed-secret-input'
                                    onChange={(e) => this.setState({ secret: e.target.value })}
                                />
                            </Form.Item>
                        </Form>

                        {
                            completeForm &&
                            <div id='embed-code-section'>
                                <div style={{ paddingBottom: '12px' }}>
                                    Copy + paste this code into your project and try sending a message.
                                </div>

                                <div style={{ paddingBottom: '12px' }}>
                                    Once you send a message your project setup is complete!
                                </div>

                                <CodeBlock
                                    text={`import React from 'react';\nimport { ChatEngine } from 'react-chat-engine';\n\nexport function App() {\n\treturn (\n\t\t<ChatEngine\n\t\t\theight='100vh'\n\t\t\tuserName='${this.state.username}'\n\t\t\tuserSecret='${this.state.secret}'\n\t\t\tprojectID='${this.props.steps.public_key}'\n\t\t/>\n\t);\n}`}
                                    language='javascript'
                                    showLineNumbers={false}
                                    theme={dracula}
                                />
                            </div>
                        }
                    </Modal>
                }
            </div>
        )
    }
}
  
function mapStateToProps(state){
    return { steps: state.steps }
}
  
function mapDispatchToProps(dispatch){
    return bindActionCreators({ getMessageCount }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(EmbedCode)
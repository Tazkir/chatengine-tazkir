import React, { Component } from 'react'

import { Modal, Button } from 'antd'
import { MessageOutlined } from '@ant-design/icons'

import NewChatForm from './NewChatForm'


class NewChat extends Component {
    state = {
        visible: false
    }

    render() {
        return (
            <div>
                <Button 
                    size='large'
                    type="primary" 
                    id='add-chat-button'
                    icon={<MessageOutlined />}
                    onClick={() => this.setState({ visible: true })}
                >
                    New Chat
                </Button>

                { 
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <NewChatForm onComplete={() => this.setState({ visible: false })} />
                    </Modal>
                }
            </div>
        )
    }
}

export default NewChat

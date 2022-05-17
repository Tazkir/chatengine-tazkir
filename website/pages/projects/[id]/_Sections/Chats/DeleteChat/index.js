import React, { Component } from 'react'

import { Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import DeleteChatForm from './DeleteChatForm'

export default class DeleteChat extends Component {
    state = {
        visible: false
    }

    render() {
        const { chat } = this.props 
        
        return (
            <div>

                <div 
                    id={`delete-chat-${chat.title}-link`}
                    onClick={() => this.setState({ visible: true })} style={{ color: '#f5222d', cursor: 'pointer' }}
                >
                    <DeleteOutlined />{' '}Delete
                </div>


                { 
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                            <DeleteChatForm 
                                chat={chat}
                                onComplete={() => this.setState({ visible: false })} 
                            />
                    </Modal>
                }

            </div>
        )
    }
}

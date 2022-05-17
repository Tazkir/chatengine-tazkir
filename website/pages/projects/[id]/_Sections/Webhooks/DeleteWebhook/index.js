import React, { Component } from 'react'

import { Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import DeleteWebhookForm from './DeleteWebhookForm'

export default class DeleteWebhook extends Component {
    state = {
        visible: false
    }

    render() {
        const { webhook } = this.props 
        
        return (
            <div>
                
                <div 
                    id={`delete-${webhook.event_trigger.replace(/ /g, "-")}-link`}
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
                        <DeleteWebhookForm 
                            webhook={webhook}
                            onComplete={() => this.setState({ visible: false })} 
                        />
                    </Modal>
                }
            </div>
        )
    }
}

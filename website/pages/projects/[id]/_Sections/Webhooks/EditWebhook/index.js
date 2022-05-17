import React, { Component } from 'react'

import { Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import EditWebhookForm from './EditWebhookForm'

export default class EditWebhook extends Component {
    state = {
        visible: false
    }

    render() {
        const { webhook } = this.props 
        
        return (
            <div>
                <div
                    id={`edit-webhook-${webhook.event_trigger.replace(/ /g, "-")}-link`} 
                    onClick={() => this.setState({ visible: true })} style={{ color: '#1890ff', cursor: 'pointer' }}
                >
                    <EditOutlined />{' '}Edit
                </div>
                    
                {
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <EditWebhookForm 
                            webhook={webhook}
                            onComplete={() => this.setState({ visible: false })} 
                        />
                    </Modal>
                }
            </div>
        )
    }
}

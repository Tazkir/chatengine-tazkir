import React, { Component } from 'react'

import { Modal, Button } from 'antd'
import { ApiOutlined } from '@ant-design/icons'

import NewWebhookForm from './NewWebhookForm'

export default class NewWebhook extends Component {
    state = {
        visible: false
    }

    render() {        
        return (
            <div>
                <Button 
                    size='large'
                    type="primary" 
                    id='add-webhook-button'
                    icon={<ApiOutlined />}
                    onClick={() => this.setState({ visible: true })}
                >
                    New Webhook
                </Button>                    

                { 
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <NewWebhookForm onComplete={() => this.setState({ visible: false })} />
                    </Modal>
                }
            </div>
        )
    }
}
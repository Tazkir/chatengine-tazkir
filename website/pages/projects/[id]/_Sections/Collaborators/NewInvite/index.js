import React, { Component } from 'react'

import { Modal, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import NewInviteForm from './NewInviteForm'


class NewInvite extends Component {
    state = {
        visible: false
    }

    render() {
        return (
            <div>
                <Button 
                    size='large'
                    type="primary" 
                    id='add-invite-button'
                    icon={<PlusOutlined />}
                    onClick={() => this.setState({ visible: true })}
                >
                    Invite Team
                </Button>

                { 
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <NewInviteForm onComplete={() => this.setState({ visible: false })} />
                    </Modal>
                }
            </div>
        )
    }
}

export default NewInvite

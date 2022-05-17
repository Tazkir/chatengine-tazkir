import React, { Component } from 'react'

import { Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import EditInviteForm from './EditInviteForm'

export default class EditInvite extends Component {
    state = {
        visible: false
    }

    render() {
        const { invite } = this.props 
        
        return (
            <div>
                <div 
                    id={`edit-invite-${invite.to_email}-link`}
                    className={`edit-invite-link`}
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
                        <EditInviteForm 
                            invite={invite}
                            onComplete={() => this.setState({ visible: false })} 
                        />
                    </Modal>
                }
            </div>
        )
    }
}

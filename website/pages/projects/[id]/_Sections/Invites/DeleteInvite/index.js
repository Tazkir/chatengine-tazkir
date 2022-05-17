import React, { Component } from 'react'

import { Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import DeleteInviteForm from './DeleteInviteForm'

export default class DeleteInvite extends Component {
    state = {
        visible: false
    }

    render() {
        const { invite } = this.props 
        
        return (
            <div>

                <div 
                    id={`delete-invite-${invite.to_email}-link`}
                    className={'delete-invite-link'}
                    onClick={() => this.setState({ visible: true })} style={{ color: '#f5222d', cursor: 'pointer' }}
                >
                    <DeleteOutlined />{' '}Remove
                </div>


                { 
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <DeleteInviteForm 
                            invite={invite}
                            onComplete={() => this.setState({ visible: false })} 
                        />
                    </Modal>
                }

            </div>
        )
    }
}

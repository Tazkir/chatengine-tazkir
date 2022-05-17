import React, { Component } from 'react'

import { Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import EditChatForm from './EditCollaboratorForm'

export default class EditChat extends Component {
    state = {
        visible: false
    }

    render() {
        const { collaborator } = this.props 
        
        return (
            <div>
                <div 
                    id={`edit-collaborator-${collaborator.user}-link`}
                    className={`edit-collaborator-link`}
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
                        <EditChatForm 
                            collaborator={collaborator}
                            onComplete={() => this.setState({ visible: false })} 
                        />
                    </Modal>
                }
            </div>
        )
    }
}

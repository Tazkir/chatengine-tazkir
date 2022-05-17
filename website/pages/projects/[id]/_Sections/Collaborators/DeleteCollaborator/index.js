import React, { Component } from 'react'

import { Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import DeleteCollaboratorForm from './DeleteCollaboratorForm'

export default class DeleteCollaborator extends Component {
    state = {
        visible: false
    }

    render() {
        const { collaborator } = this.props 
        
        return (
            <div>

                <div 
                    id={`delete-collaborator-${collaborator.user}-link`}
                    className={`delete-collaborator-link`}
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
                            <DeleteCollaboratorForm 
                                collaborator={collaborator}
                                onComplete={() => this.setState({ visible: false })} 
                            />
                    </Modal>
                }

            </div>
        )
    }
}

import React, { Component } from 'react'

import { Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import DeletePersonForm from './DeletePersonForm'

export default class DeletePerson extends Component {
    state = {
        visible: false
    }

    render() {
        const { person } = this.props 
        
        return (
            <div>
                <div 
                    id={`delete-${person.username}-link`}
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
                        <DeletePersonForm 
                            person={person}
                            onComplete={() => this.setState({ visible: false })} 
                        />
                    </Modal>
                }
            </div>
        )
    }
}

import React, { Component } from 'react'

import { Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import EditPersonForm from './EditPersonForm'

export default class EditPerson extends Component {
    state = {
        visible: false
    }

    render() {
        const { person } = this.props 
        
        return (
            <div>
                <div
                    id={`edit-person-${person.username}-link`} 
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
                        <EditPersonForm 
                            person={person}
                            onComplete={() => this.setState({ visible: false })} 
                        />
                    </Modal>
                }
            </div>
        )
    }
}

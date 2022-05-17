import React, { Component } from 'react'

import { Modal, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import DeleteProjectForm from './DeleteProjectForm'


export default class DeleteProject extends Component {
    state = {
        visible: false
    }

    render() {
        return (
            <div style={{ width: '100%', float: 'right', paddingRight: '24px', height: '0px' }}>
                <Button 
                    size='large'
                    type="danger" 
                    id='delete-project'
                    icon={<DeleteOutlined />}
                    style={{ float: 'right', bottom: '58px' }}
                    onClick={() => this.setState({ visible: true })}
                >
                    Delete Project
                </Button>

                {
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <DeleteProjectForm onComplete={() => this.setState({ visible: false })} />
                    </Modal>
                }
            </div>
        )
    }
}

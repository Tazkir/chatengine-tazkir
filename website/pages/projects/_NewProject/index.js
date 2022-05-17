import React, { Component } from 'react'

import { Modal, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import NewProjectForm from './NewProjectForm'

class NewProject extends Component {
    state = {
        visible: false
    }

    render() {
        return (
            <div style={{ width: '100%', float: 'right', paddingRight: '24px', height: '0px' }}>
                <Button 
                    size='large'
                    type="primary" 
                    id='new-project'
                    icon={<PlusOutlined />} 
                    style={{ float: 'right', bottom: '48px' }}
                    onClick={() => this.setState({ visible: true })}
                >
                    New Project
                </Button>                    

                {
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <NewProjectForm />
                    </Modal>
                }
            </div>
        )
    }
}

export default NewProject

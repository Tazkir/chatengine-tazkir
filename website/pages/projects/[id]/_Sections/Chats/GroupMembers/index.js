import React, { Component } from 'react'

import { Modal } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons'

import GroupMembersForm from './GroupMembersForm'

export default class GroupMembers extends Component {
    state = {
        visible: false
    }

    render() {
        const { chat } = this.props 
        
        return (
            <div>
                <div
                    id={`group-memeber-chat-${chat.title}-link` }
                    onClick={() => this.setState({ visible: true })} 
                    style={{ color: '#1890ff', cursor: 'pointer' }}
                >
                    <UsergroupAddOutlined />{' '}Members
                </div>


                {
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <GroupMembersForm 
                            chat={chat} 
                            onComplete={() => this.setState({ visible: false })} 
                        />
                    </Modal>
                }
            </div>
        )
    }
}

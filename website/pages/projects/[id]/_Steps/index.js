import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from 'antd'

import { UserAddOutlined, CommentOutlined } from '@ant-design/icons'

import NewPerson from '../_Sections/People/NewPerson'
import NewChat from '../_Sections/Chats/NewChat'

import EmbedCode from './EmbedCode'

const { Meta } = Card


class ProjectSteps extends Component {
    renderUserCard() {
        return (
            <Card title={null} style={{ border: '2px solid #1890ff', marginBottom: '16px' }}>
                <Meta
                    avatar={<UserAddOutlined />}
                    title="Step 1. Create a user"
                    description="Users let you create chats and messages."
                />

                <div 
                    id='new-person-step-button'
                    style={{ marginLeft: '28px', marginTop: '16px' }}
                >
                    <NewPerson />
                </div>
            </Card>
        )
    }

    renderChatCard() {
        return (
            <Card title={null} style={{ border: '2px solid #1890ff', marginBottom: '16px' }}>
                <Meta
                    avatar={<CommentOutlined />}
                    title="Step 2. Create a chat"
                    description="You can create chats here in the dashboard, or in your app."
                />

                <div
                    id='new-chat-step-button'
                    style={{ marginLeft: '28px', marginTop: '16px' }}
                >
                    <NewChat />
                </div>
            </Card>
        )
    }

    render() {
        const { steps } = this.props
        const needsUsers = steps.people && Object.keys(steps.people).length === 0
        const needsChats = steps.chats && Object.keys(steps.chats).length === 0
        const needsMessages = this.props.steps.message_count === 0
        
        return (
            <div style={{ padding: '16px', height: '100%', backgroundColor: '#1890ff' }}>
                <h1 style={{ textAlign: 'center', fontWeight: '600', color: 'white' }}>
                    Let's setup your<br />
                    project 👍
                </h1>

                { needsUsers && this.renderUserCard() }

                { needsChats && this.renderChatCard() }

                { needsMessages && <EmbedCode /> }
            </div>
        )
    }
}

function mapStateToProps(state){
  return { steps: state.steps }
}

export default connect(mapStateToProps, {})(ProjectSteps)
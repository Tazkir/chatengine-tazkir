import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Menu, Badge } from 'antd'

import Link from 'next/link'

import {
    SettingOutlined,
    UserOutlined,
    CommentOutlined,
    ApiOutlined,
    CreditCardOutlined,
    UsergroupAddOutlined,
    MailOutlined
} from '@ant-design/icons'

class SideMenu extends Component {
    state = {
        section: undefined
    }

    componentDidMount() {
        const urlSection = document.URL.split('#')[1]
        
        this.setState({ 
            section: urlSection ? urlSection : 'settings'
        })
    }

    render() {
        const { steps } = this.props

        if (!this.state.section) return <div />

        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={[this.state.section]}
                style={{ height: '100%', paddingTop: '44px', backgroundColor: '#e9eaef', borderRight: '1px solid rgb(0, 0, 0, 0.27)' }}
            >
                
                <Menu.Item key="settings" icon={<SettingOutlined />} id='settings-section'>
                    <Link href='#settings'>
                        Project Settings
                    </Link>
                </Menu.Item>

                <Menu.Item key="users" icon={<UserOutlined />} id='users-section'>
                    <Link href='#users'>
                        <div>
                            Users

                            {
                                steps.count_people > steps.monthly_users &&
                                <Badge count={'!'} style={{ left: '10px', bottom: '2px' }} />
                            }
                        </div>
                    </Link>
                </Menu.Item>

                <Menu.Item key="chats" icon={<CommentOutlined />} id='chats-section'>
                    <Link href='#chats'>
                        Chats
                    </Link>
                </Menu.Item>

                <Menu.Item key="webhooks" icon={<ApiOutlined />} id='webhooks-section'>
                    <Link href='#webhooks'>
                        Webhooks
                    </Link>
                </Menu.Item>

                <Menu.Item key="notifications" icon={<MailOutlined />} id='notifications-section'>
                    <Link href='#notifications'>
                        Notifications
                    </Link>
                </Menu.Item>

                <Menu.Item key="collaborators" icon={<UsergroupAddOutlined />} id='collaborators-section'>
                    <Link href='#collaborators'>
                        Collaborators + Invites
                    </Link>
                </Menu.Item>

                <Menu.Item key="plan" icon={<CreditCardOutlined />} id='plan-section'>
                    <Link href='#plan'>
                        Plan + Billing
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}

function mapStateToProps(state){
    return { 
        steps: state.steps,
    }
}

export default connect(mapStateToProps, {})(SideMenu)

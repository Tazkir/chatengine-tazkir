import React, { Component } from 'react'

import { notification } from 'antd'
import { ShareAltOutlined } from '@ant-design/icons'

export default class EditInvite extends Component {
    onClick() {
        const { invite } = this.props 
        notification.success({
            message: 'Invite link copied',
            description: `This link is just for ${invite.to_email}`,
            placement: 'bottomLeft'
        })
        const link = window.location.hostname === 'localhost' ?
            `http://localhost:3000/invite/${invite.access_key}` :
            `https://chatengine.io/invite/${invite.access_key}`
        navigator.clipboard.writeText(link);
    }

    render() {
        const { invite } = this.props 
        
        return (
            <div>
                <div 
                    id={`copy-invite-${invite.to_email}-link`}
                    className={`copy-invite-link`}
                    onClick={() => this.onClick()} style={{ color: '#1890ff', cursor: 'pointer' }}
                >
                    <ShareAltOutlined />{' '}Copy Invite Link
                </div>
            </div>
        )
    }
}

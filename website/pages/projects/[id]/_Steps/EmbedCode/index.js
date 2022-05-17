import React, { Component } from 'react'

import { Card } from 'antd'
import { CodeOutlined } from '@ant-design/icons'

import EmbedCodeModal from './EmbedCodeModal'

const { Meta } = Card


export default class EmbedCode extends Component {
    render() {
        return (
            <Card title={null} style={{ marginBottom: '16px' }}>
                <Meta
                    avatar={<CodeOutlined />}
                    title="Step 3. Embed Chat Engine"
                    description="Now you can embed Chat Engine into your app. Then your users can chat."
                />

                <div id='embed-chat-engine-step-button'>
                    <EmbedCodeModal />
                </div>
            </Card>
        )
    }
}
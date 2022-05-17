import React, { Component } from 'react'

import { PageHeader } from 'antd'

import NewWebhook from './NewWebhook'
import WebhooksTable from './WebhooksTable'


export default class WebhooksSection extends Component {
    render() {
        return (
            <div style={{ padding: 24, backgroundColor: 'white' }}>
                <PageHeader
                    title="Webhooks"
                    backIcon={false}
                    className="site-page-header"
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                />

                <div style={{ width: '100%', textAlign: 'right', paddingRight: '24px', height: '0px', position: 'relative', bottom: '58px' }}>
                    <NewWebhook />
                </div>

                <WebhooksTable />
            </div>
        )
    }
}

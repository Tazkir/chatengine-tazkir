import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Space, Pagination } from 'antd'

import WebhookDetails from './WebhookDetails'
import EditWebhook from './EditWebhook'
import DeleteWebhook from './DeleteWebhook'

const columns = [
    {
        title: 'Event Trigger',
        dataIndex: 'event_trigger',
        key: 'event_trigger',
        render: (text) => {
            return <div>{text}</div>
        },
    },
    {
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
        render: (text) => {
            return <div>{text ? text.slice(0, 20) + '...' : ''}</div>
        },
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <WebhookDetails webhook={record} />
                
                <EditWebhook webhook={record} />
                
                <DeleteWebhook webhook={record} />
            </Space>
        ),
    },
];

class WebhooksTable extends Component {
    state = {
        current: 1
    }

    render() {
        const { webhooks } = this.props.steps 
        
        let dataList = webhooks ? webhooks : {}
        const lo = (this.state.current - 1) * 10
        const hi = (this.state.current - 1) * 10 + 9
        const arr = Object.values(dataList).filter((x, i) => lo <= i && i <= hi)

        return (
            <div>
                <Table
                    id='webhooks-table'
                    columns={columns} 
                    pagination={false}
                    dataSource={arr}
                />

                <div style={{ backgroundColor: 'white', width: '100%', paddingTop: '24px', textAlign: 'right' }}>
                    <Pagination 
                        current={this.state.current}
                        total={Object.values(dataList).length}
                        onChange={(current) => this.setState({ current })}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { steps: state.steps }
}

export default connect(mapStateToProps, {})(WebhooksTable)
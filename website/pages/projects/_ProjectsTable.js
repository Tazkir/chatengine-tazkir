import React, { Component } from 'react'

import { Table, Tag, Pagination } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text, record) => {
            return (
                <span>
                    <span>{text}{' '}</span>
                    {
                        record.count_people >= record.monthly_users &&
                        <Tag color='red'>
                            Upgrade Required
                        </Tag>
                    }
                </span>
            )
        },
    },
    {
        title: '',
        dataIndex: 'public_key',
        key: 'public_key',
        render: (public_key) => {
            return <div>{public_key.slice(0, 8) + '...'}</div>
        },
    },
    {
        title: 'Plan',
        key: 'plan_type',
        dataIndex: 'plan_type',
        render: (plan) => {
            const words = plan.replace("_", " ");
            const finalSentence = words.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            return <div>{finalSentence}</div>
        },
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <a href={`/projects/${record.public_key}`} id={`project-${record.title}-settings`}>
                <SettingOutlined />
                {' '}Settings
            </a>
        ),
    },
];

export default class ProjectsTable extends Component {
    state = {
        current: 1
    }

    render() {
        const { projects } = this.props

        let dataList = projects ? projects : {}
        const lo = (this.state.current - 1) * 10
        const hi = (this.state.current - 1) * 10 + 9
        const arr = Object.values(dataList).filter((x, i) => lo <= i && i <= hi)

        return (
            <div>
                <Table
                    id='projects-table'
                    columns={columns}
                    pagination={false}
                    dataSource={arr}
                />

                <div style={{ backgroundColor: 'white', width: '100%', padding: '12px', textAlign: 'right' }}>
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

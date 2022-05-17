import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Space, Pagination } from 'antd'

import ChatDetails from './ChatDetails'
import EditChat from './EditChat'
import DeleteChat from './DeleteChat'
import GroupMembers from './GroupMembers'

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (title) => {
            return <div>{title}</div>
        },
    },
    {
        title: 'Admin User',
        dataIndex: 'admin',
        key: 'admin',
        render: (admin) => {
            return <div>{admin.username}</div>
        },
    },
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: (id) => {
            return <div>{id}</div>
        },
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space>
                <ChatDetails chat={record} />

                <EditChat chat={record} />

                <GroupMembers chat={record} />

                <DeleteChat chat={record} />
            </Space>
        ),
    },
];
class ChatsTable extends Component {
    state = {
        current: 1
    }

    render() {
        const { chats } = this.props.steps

        let dataList = chats ? chats : {}
        const lo = (this.state.current - 1) * 10
        const hi = (this.state.current - 1) * 10 + 9
        const arr = Object.values(dataList).filter((x, i) => lo <= i && i <= hi)

        return (
            <div>
                <Table 
                    id='chats-table'
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

export default connect(mapStateToProps, {})(ChatsTable)

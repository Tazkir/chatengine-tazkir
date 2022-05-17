import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Space, Pagination } from 'antd'

import LinkInvite from './LinkInvite'
import EditInvite from './EditInvite'
import DeleteInvite from './DeleteInvite'

const columns = [
    {
        title: 'User',
        dataIndex: 'to_email',
        key: 'to_email',
        render: (to_email) => {
            return <div>{to_email}</div>
        },
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        render: (role) => {
            return <div className={`invite-role-${role}`}>{role}</div>
        },
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space>
                <LinkInvite invite={record} />

                <EditInvite invite={record} />

                <DeleteInvite invite={record} /> 
            </Space>
        ),
    },
];
class InvitesTable extends Component {
    state = {
        current: 1
    }

    render() {
        const { invites } = this.props.steps

        let dataList = invites ? invites : {}
        const lo = (this.state.current - 1) * 10
        const hi = (this.state.current - 1) * 10 + 9
        const arr = Object.values(dataList).filter((x, i) => lo <= i && i <= hi)

        return (
            <div>
                <Table 
                    id='invites-table'
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

export default connect(mapStateToProps, {})(InvitesTable)

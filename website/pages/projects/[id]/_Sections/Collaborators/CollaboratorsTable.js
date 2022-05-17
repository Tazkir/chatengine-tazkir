import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Space, Pagination } from 'antd'

import EditCollaborator from './EditCollaborator'
import DeleteCollaborator from './DeleteCollaborator'

const columns = [
    {
        title: 'User',
        dataIndex: 'user',
        key: 'user',
        render: (user) => {
            return <div>{user}</div>
        },
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        render: (role) => {
            return <div className={`collaborator-role-${role}`}>{role}</div>
        },
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space>
                <EditCollaborator collaborator={record} />

                <DeleteCollaborator collaborator={record} /> 
            </Space>
        ),
    },
];
class CollaboratorsTable extends Component {
    state = {
        current: 1
    }

    render() {
        const { collaborators } = this.props.steps

        let dataList = collaborators ? collaborators : {}
        const lo = (this.state.current - 1) * 10
        const hi = (this.state.current - 1) * 10 + 9
        const arr = Object.values(dataList).filter((x, i) => lo <= i && i <= hi)

        return (
            <div>
                <Table 
                    id='collaborators-table'
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

export default connect(mapStateToProps, {})(CollaboratorsTable)

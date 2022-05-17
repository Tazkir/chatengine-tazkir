import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Space, Pagination } from 'antd'

import EditPerson from './EditPerson'
import DeletePerson from './DeletePerson'

const columns = [
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        render: (text) => {
            return <div>{text}</div>
        },
    },
    {
        title: 'Created',
        dataIndex: 'created',
        key: 'created',
        render: (text) => {
            return <div>{text}</div>
        },
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <EditPerson person={record} />
                
                <DeletePerson person={record} />
            </Space>
        ),
    },
];

class PeopleTable extends Component {
    state = {
        current: 1
    }

    render() {
        const { people } = this.props.steps 
        
        let dataList = people ? people : {}
        const lo = (this.state.current - 1) * 10
        const hi = (this.state.current - 1) * 10 + 9
        const arr = Object.values(dataList).filter((x, i) => lo <= i && i <= hi)

        return (
            <div>
                <Table
                    id='people-table'
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

export default connect(mapStateToProps, {})(PeopleTable)
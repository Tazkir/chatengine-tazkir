import React, { Component } from 'react'
import { connect } from 'react-redux'

import { PageHeader } from 'antd'

import NewPerson from './NewPerson'
import PeopleTable from './PeopleTable'


class PeopleSection extends Component {
    render() {
        const currentPeopleCount = this.props.steps && this.props.steps.count_people
        const maximumPeopleCount = this.props.steps && this.props.steps.monthly_users

        return (
            <div style={{ padding: 24, backgroundColor: 'white' }}>
                <PageHeader
                    title={`Users: ${currentPeopleCount} of ${maximumPeopleCount}`}
                    subTitle="Upgrade to increase"
                    backIcon={false}
                    className="site-page-header"
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                />

                <div style={{ width: '100%', textAlign: 'right', paddingRight: '24px', height: '0px', position: 'relative', bottom: '58px' }}>
                    <NewPerson />
                </div>

                <PeopleTable />
            </div>
        )
    }
}

function mapStateToProps(state){
    return { steps: state.steps }
}

export default connect(mapStateToProps, {})(PeopleSection)

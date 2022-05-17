import React, { Component } from 'react'
import { connect } from 'react-redux'

import { PageHeader } from 'antd'

import InvitesTable from './InvitesTable'

class InvitesSection extends Component {
    render() {
        return (
            <div style={{ padding: 24, backgroundColor: 'white' }}>
                <PageHeader
                    title={`Invitations:`}
                    backIcon={false}
                    className="site-page-header"
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                />

                <InvitesTable />
            </div>
        )
    }
}

export default connect(null, {})(InvitesSection)

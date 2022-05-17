import React, { Component } from 'react'
import { connect } from 'react-redux'

import { PageHeader } from 'antd'

import CollaboratorsTable from './CollaboratorsTable'

import NewInvite from './NewInvite'

class CollaboratorsSection extends Component {
    render() {
        return (
            <div style={{ padding: 24, backgroundColor: 'white' }}>
                <PageHeader
                    title={`Collaborators:`}
                    backIcon={false}
                    className="site-page-header"
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                />

                <div style={{ width: '100%', textAlign: 'right', paddingRight: '24px', height: '0px', position: 'relative', bottom: '58px' }}>
                    <NewInvite />
                </div>

                <CollaboratorsTable />
            </div>
        )
    }
}

export default connect(null, {})(CollaboratorsSection)

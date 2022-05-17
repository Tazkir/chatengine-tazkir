import React, { Component } from 'react'
import { connect } from 'react-redux'

import { PageHeader } from 'antd'

import Notifications from './Notifications'


class NotificationsSection extends Component {
    render() {
        const { steps } = this.props

        if(!steps.public_key) return <div/>

        return (
            <div style={{ padding: 24, backgroundColor: 'white' }}>
                <PageHeader
                    title={`Notifications: ${steps.is_emails_enabled ? 'On' : 'Off'}`}
                    backIcon={false}
                    className="site-page-header"
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                />

                <Notifications />
            </div>
        )
    }
}

function mapStateToProps(state){
    return { 
        steps: state.steps,
    }
}

export default connect(mapStateToProps, {})(NotificationsSection)
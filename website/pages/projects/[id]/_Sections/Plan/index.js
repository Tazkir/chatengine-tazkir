import React, { Component } from 'react'
import { connect } from 'react-redux'

import { PageHeader } from 'antd'

import ChangePlan from './ChangePlan'


class PlanSection extends Component {
    render() {
        const { steps } = this.props

        if (!steps.public_key) return <div />

        const planStr = steps.plan_type.charAt(0).toUpperCase() + steps.plan_type.slice(1)

        return (
            <div style={{ padding: 24, backgroundColor: 'white' }}>
                <PageHeader
                    title={`Project Plan: ${planStr}`}
                    backIcon={false}
                    className="site-page-header"
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                />

                <ChangePlan />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        steps: state.steps,
    }
}

export default connect(mapStateToProps, {})(PlanSection)
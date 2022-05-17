import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Collapse } from 'antd'


class Options extends Component {
    render() {
        const { plan_type } = this.props.steps
        return (
            <Collapse>
                <Collapse.Panel 
                    key="basic"
                    header={`Basic ${plan_type === 'basic' ? '(Current Plan)' : ''}`}
                >
                    <b>First 25 Users</b><br />
                    <b>$0 per month</b><br />
                    1000 messages / hour<br />
                    SSL Encryption<br />
                    Dedicated Support<br />
                    14 Day Chat history<br />
                </Collapse.Panel>
    
                <Collapse.Panel 
                    key="production"
                    header={`Production ${plan_type === 'production' ? '(Current Plan)' : ''}`}
                >
                    <b>$25 per month per 1000 users</b><br />
                    + 750k messages / month<br />
                    SSL Encryption<br />
                    Dedicated Support<br />
                    3 Year Chat history<br />
                </Collapse.Panel>
    
                <Collapse.Panel 
                    key="professional"
                    header={`Professional ${plan_type === 'professional' ? '(Current Plan)' : ''}`}
                >
                    <b>$36 per month per 1000 users</b><br />
                    + 1M messages / month<br />
                    SSL Encryption<br />
                    Dedicated Support<br />
                    2 Year Chat history<br />
                </Collapse.Panel>
            </Collapse>
        )
    }
}

function mapStateToProps(state){
    return { 
        accounts: state.accounts,
        projects: state.projects,
        steps: state.steps,
    }
}

export default connect(mapStateToProps, {})(Options)

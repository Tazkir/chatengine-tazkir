import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { PageHeader } from 'antd'

import EditTitle from './EditTitle'

class TitleSection extends Component {

    render() {
        return (
            <div style={{ padding: 24, backgroundColor: 'white' }}>
                <PageHeader
                    title={`Title: ${this.props.steps.title}`}
                    backIcon={false}
                    className="site-page-header"
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                />

                <div style={{ width: '100%', textAlign: 'right', paddingRight: '24px', height: '0px', position: 'relative', bottom: '58px' }}>
                    <EditTitle />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        steps: state.steps,
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleSection)

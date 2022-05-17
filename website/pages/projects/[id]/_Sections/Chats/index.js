import React, { Component } from 'react'
import { connect } from 'react-redux'

import { PageHeader } from 'antd'

import NewChat from './NewChat'
import ChatsTable from './ChatsTable'

class ChatsSection extends Component {
    render() {
        const currentChatsCount = this.props.steps && this.props.steps.count_chats

        return (
            <div style={{ padding: 24, backgroundColor: 'white' }}>
                <PageHeader
                    title={`Chats: ${currentChatsCount}`}
                    backIcon={false}
                    className="site-page-header"
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                />

                <div style={{ width: '100%', textAlign: 'right', paddingRight: '24px', height: '0px', position: 'relative', bottom: '58px' }}>
                    <NewChat />
                </div>

                <ChatsTable />
            </div>
        )
    }
}

function mapStateToProps(state){
    return { steps: state.steps }
}

export default connect(mapStateToProps, {})(ChatsSection)

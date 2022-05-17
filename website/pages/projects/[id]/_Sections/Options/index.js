import React, { Component } from 'react'

import { PageHeader } from 'antd'

import DeleteProject from './DeleteProject'


export default class OptionsSection extends Component {
    
    render() {
        return (
            <div style={{ padding: 24, backgroundColor: 'white' }}>
                <PageHeader
                    title="Options"
                    backIcon={false}
                    className="site-page-header"
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                />

                <DeleteProject />
            </div>
        )
    }
}

import React, { Component } from 'react'

import { Spin, Layout } from 'antd'


export default class PageLoader extends Component {
    render() {
        return (
            <Layout style={{ height: 'calc(100vh - 64px)', textAlign: 'center' }}>
                <Spin 
                    size="large" 
                    style={{ margin: '0px', position: 'absolute', top: '50%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)', left: 'calc(50vw - 16px' }}
                />
            </Layout>
        )
    }
}
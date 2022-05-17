import React, { Component } from 'react'

import { Row, Col } from 'antd'

export default class Footer extends Component {
    render() {    
        return (
            <div style={{ backgroundColor: '#2f54eb' }}>
                <Row style={{ padding: '72px 0px 72px 0px', color: 'white' }}>
                    <Col xs={1} sm={3} />

                    <Col xs={22} sm={9}>
                        <a href='/security'>
                            <h3 style={{ color: 'white' }}>
                                Security
                            </h3>
                        </a>

                        <a href='https://chat-engine-assets.s3.amazonaws.com/legal/Chat-Engine-Privacy-Policy.pdf'>
                            <h3 style={{ color: 'white' }}>
                                Privacy Policy
                            </h3>
                        </a>

                        <a href='https://chat-engine-assets.s3.amazonaws.com/legal/Chat-Engine-Terms-and-Conditions.pdf'>
                            <h3 style={{ color: 'white' }}>
                                Terms of Service
                            </h3>
                        </a>
                    </Col>

                    <Col xs={22} sm={9} style={{ textAlign: 'right' }} />
                    
                    <Col xs={1} sm={3} />
                </Row>
            </div>
        )
    }
}

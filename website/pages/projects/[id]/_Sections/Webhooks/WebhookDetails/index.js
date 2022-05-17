import React, { Component } from 'react'

import { Modal, Row, Col } from 'antd'
import { SelectOutlined } from '@ant-design/icons'

export default class WebhookDetails extends Component {
    state = {
        visible: false
    }

    render() {
        const { webhook } = this.props 
        
        return (
            <div>
                <div
                    id={`webhook-details-${webhook.event_trigger.replace(/ /g, "-")}-link`} 
                    onClick={() => this.setState({ visible: true })} style={{ color: '#1890ff', cursor: 'pointer' }}
                >
                    <SelectOutlined />{' '}Details
                </div>
                    
                {
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <Row style={{ width: "100%" }}>
                            <Col offset={8} xs={16}>
                                <h2 style={{ marginTop: '16px', paddingBottom: '8px' }}>
                                    Webhook Details
                                </h2>
                            </Col>

                            <Col xs={8} style={styles.label}>Trigger:</Col>
                            <Col xs={16} style={styles.field} id='webhook-event_trigger'>{webhook.event_trigger}</Col>

                            <Col xs={8} style={styles.label}>URL:</Col>
                            <Col xs={16} style={styles.field} id='webhook-url'>{webhook.url}</Col>

                            <Col xs={8} style={styles.label}>Secret:</Col>
                            <Col xs={16} style={styles.field} id='webhook-secret'>{webhook.secret}</Col>
                        </Row>
                    </Modal>
                }
            </div>
        )
    }
}

const styles = {
    label: {
        textAlign: 'right',
        paddingRight: '12px',
        height: '42px',
    },
    field: {
        fontWeight: '600',
        height: '42px',
    }
}
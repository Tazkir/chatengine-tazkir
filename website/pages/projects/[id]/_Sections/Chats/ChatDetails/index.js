import React, { Component } from 'react'

import { Modal, Row, Col } from 'antd'
import { SelectOutlined } from '@ant-design/icons'

export default class EditChat extends Component {
    state = {
        visible: false
    }

    render() {
        const { chat } = this.props 
        
        return (
            <div>
                <div 
                    id={`chat-details-${chat.title}-link`}
                    onClick={() => this.setState({ visible: true })} 
                    style={{ color: '#1890ff', cursor: 'pointer' }}
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
                                    Chat Details
                                </h2>
                            </Col>

                            <Col xs={8} style={styles.label}>Title:</Col>
                            <Col xs={16} style={styles.field}>{chat.title}</Col>

                            <Col xs={8} style={styles.label}>ID:</Col>
                            <Col xs={16} style={styles.field}>{chat.id}</Col>

                            <Col xs={8} style={styles.label}>Members:</Col>
                            <Col xs={16} style={styles.field}>{chat.people.length}</Col>

                            <Col xs={8} style={styles.label}>Admin:</Col>
                            <Col xs={16} style={styles.field}>{chat.admin.username}</Col>

                            <Col xs={8} style={styles.label}>Access Key:</Col>
                            <Col xs={16} style={styles.field}>{chat.access_key}</Col>
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
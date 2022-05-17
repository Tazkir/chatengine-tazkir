import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Row, Col, Button, Tooltip, PageHeader } from 'antd'
import { CopyOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

import { getPrivateKey } from '../../../../../actions/Keys'

class ApiKeysSection extends Component {
    state = {
        private_key: null
    }

    getPrivateKey() {
        this.props.getPrivateKey(
            this.props.steps.public_key,
            (data) => this.setState({ private_key: data.key }),
            () => {}
        )
    }

    copyToClipboard() {
        const el = document.createElement('textarea');
        el.value = this.state.private_key;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    render() {
        return (
            <div style={{ padding: 24, backgroundColor: 'white' }}>
                <PageHeader
                    title="API Keys"
                    backIcon={false}
                    className="site-page-header"
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                />

                <Row>
                    
                    <Col 
                        xs={24} 
                        sm={8} 
                        style={{ width: '100%', textAlign: 'right', paddingRight: '16px', paddingTop: '24px' }}
                    >
                        Project ID: 
                    </Col>
                    <Col xs={24} sm={16} style={{ paddingTop: '24px' }} id='public-key'>
                        { this.props.steps.public_key }
                    </Col>
                    
                    <Col 
                        xs={24} 
                        sm={8} 
                        style={{ width: '100%', textAlign: 'right', paddingRight: '16px', paddingTop: '24px' }}
                    >
                        Private Key: 
                    </Col>
                    <Col xs={24} sm={16} style={{ paddingTop: '20px' }}>
                        <span>
                            <span id='private-key'>
                                { this.state.private_key ? this.state.private_key : '********* **** **** **** ************' }
                            </span>
                            
                            {' '}

                            { 
                                this.state.private_key ? 
                                <span>
                                    <Button id='copy-key' onClick={() => this.copyToClipboard()} shape="circle" icon={<Tooltip title="Copy to clipboard"><CopyOutlined /></Tooltip>} /> 
                                    {' '}
                                    <Button id='hide-key' onClick={() => this.setState({ private_key: null })} shape="circle" icon={<Tooltip title="Hide"><EyeInvisibleOutlined /></Tooltip>} /> 
                                </span> :
                                <Button 
                                    id='show-key' 
                                    shape="circle"
                                    onClick={() => this.getPrivateKey()} 
                                    disabled={!this.props.steps.public_key}
                                    icon={<Tooltip title="View"><EyeOutlined /></Tooltip>} 
                                />
                            }
                            
                        </span>
                    </Col>
                </Row>
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
  return bindActionCreators({ getPrivateKey }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiKeysSection)

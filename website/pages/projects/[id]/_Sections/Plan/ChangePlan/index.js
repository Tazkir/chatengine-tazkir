import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Row, Col, Modal, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

import PlanOptions from './PlanOptions'
import ChangePlanForm from './ChangePlanForm'

import { getProject } from '../../../../../../actions/Projects'


class ChangePlan extends Component {
    state = {
        visible: false
    }

    onSubscribe() {
        this.props.getProject(this.props.steps.public_key)
        this.setState({ visible: false })
    }

    render() {
        return (
            <div style={{ width: '100%', float: 'right', paddingRight: '24px', height: '0px' }}>
                <Button 
                    size='large'
                    type="primary" 
                    id='change-project-plan'
                    icon={<ShoppingCartOutlined />}
                    style={{ float: 'right', bottom: '58px' }}
                    onClick={() => this.setState({ visible: true })}
                >
                    Change Plan
                </Button>

                {
                    this.state.visible &&
                    <Modal
                        width={750}
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <Row gutter={16}>
                            <Col xs={24} sm={12}>
                                <PlanOptions />
                            </Col>
                            
                            <Col xs={24} sm={12}>
                                <ChangePlanForm 
                                    onSubscribe={() => this.onSubscribe()}
                                    onClose={() => this.setState({ visible: false })} 
                                />
                            </Col>
                        </Row>
                    </Modal>
                }
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
  return bindActionCreators({ getProject }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePlan)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Modal, Button } from 'antd'
import { MailOutlined } from '@ant-design/icons'

import NotificationsForm from './NotificationsForm'


class EnableNotifications extends Component {
    state = {
        visible: false
    }

    render() {
        return (
            <div style={{ width: '100%', float: 'right', paddingRight: '24px', height: '0px' }}>
                <Button 
                    size='large'
                    type="primary" 
                    id='edit-notifications-button'
                    icon={<MailOutlined />}
                    style={{ float: 'right', bottom: '58px' }}
                    onClick={() => this.setState({ visible: true })}
                >
                    { this.props.steps.is_emails_enabled ? 'Change' : 'Enable' }
                </Button>

                {
                    this.state.visible &&
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <NotificationsForm onComplete={() => this.setState({ visible: false })} />
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
  return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EnableNotifications)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Form, Button } from 'antd'

import { deleteAccount, logout } from '../../actions/Accounts'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class AccountForm extends Component {
    state = {
        error: null,
        loading: false,
        clicked: false
    }

    deleteMe() {
        this.setState({ loading: true })

        this.props.deleteAccount(
            () => this.props.logout(),
            () => this.setState({ loading: false, error: 'Oops, something went wrong...' })
        )
    }

    render(){
        return (
            <div style={{ width: "100%", paddingBottom: '26px' }}>
                <Form layout='basic' {...layout}>
                    <Form.Item {...tailLayout}>
                        {
                            this.state.clicked ?
                            <span>
                                <span>
                                    <Button 
                                        style={{ marginRight: '12px' }} 
                                        onClick={() => this.setState({ clicked: false })}
                                    >
                                        Cancel
                                    </Button> 

                                    <Button 
                                        type='danger'
                                        id='confirm-delete-account-button'
                                        loading={this.state.loading}
                                        onClick={() => this.deleteMe()}
                                    >
                                        Yes, I'm sure.
                                    </Button> 
                                </span>
                            </span>:
                            <Button 
                                type='danger' 
                                id='delete-account-button'
                                onClick={() => this.setState({ clicked: true })}
                            >
                                Delete Account
                            </Button>
                        }

                        {
                            this.state.error &&
                            <div style={{ color: 'red' }}>{this.state.error}</div>
                        }
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
function mapStateToProps(state){
  return { accounts: state.accounts }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteAccount, logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm)
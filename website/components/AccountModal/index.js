import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Modal } from 'antd'

import AccountForm from './AccountForm'
import AccountDelete from './AccountDelete'

import { openEditAccount, closeEditAccount } from '../../actions/EditAccount'

class AccountModal extends Component {
    render() {
        return (
            <div>
                <div type="primary" onClick={() => this.props.openEditAccount()} id='account-tab'>
                    Account
                </div>

                {
                    this.props.accounts.isEditAccountVisisble &&
                    <Modal
                        footer={null}
                        onCancel={() => this.props.closeEditAccount()}
                        visible={this.props.accounts.isEditAccountVisisble}
                    >
                        <AccountForm onComplete={() => this.props.closeEditAccount()} />

                        <AccountDelete />
                    </Modal>
                }
            </div>
        );
    }
}

function mapStateToProps(state){
  return { accounts: state.accounts }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ openEditAccount, closeEditAccount }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountModal);

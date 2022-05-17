import React from 'react'
import { connect } from 'react-redux'

import LoggedInHeader from './LoggedInHeader'
import LoggedOutHeader from './LoggedOutHeader'

function Header(props) {
    const authenticated = props.accounts.token && props.accounts.token !== null
    return (
        <div>
            { authenticated ? <LoggedInHeader /> : <LoggedOutHeader /> }
        </div>
    )

}

function mapStateToProps(state){
  return { accounts: state.accounts }
}

export default connect(mapStateToProps, {})(Header)

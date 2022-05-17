import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { LoadingOutlined } from '@ant-design/icons'

import { resetAccount } from '../../../actions/Accounts'
import { openEditAccount } from '../../../actions/EditAccount'

import { useRouter } from 'next/router'

const ResetPage = props => {
    const router = useRouter()
    const didMountRef = useRef(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!didMountRef.current && typeof window !== 'undefined') {
            didMountRef.current = true 

            const { pathname } = window.location
            const uuid = pathname.split('/')[pathname.split('/').length - 1]

            props.resetAccount(
                uuid,
                () => {
                    props.openEditAccount()
                    router.push('/projects')                
                },
                () => setLoading(false),
            )
        }
    })

    return (
        <div style={{ height: 'calc(100vh - 64px)' }}>
            <div
                style={{
                    width: '100%',
                    position: 'relative',
                    textAlign: 'center',
                    top: 'calc(50vh - 100px)',
                    fontSize: '26px',
                }}
            >
                { 
                    loading ?
                    <div><LoadingOutlined />{' '}Loading...</div> :
                    <div id='bad-reset-uuid'>404: Nothing is here :(</div>
                }
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ resetAccount, openEditAccount }, dispatch)
}

export default connect(null, mapDispatchToProps)(ResetPage)

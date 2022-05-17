import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { LoadingOutlined } from '@ant-design/icons'

import { getInvite, applyInvite } from '../../../actions/Invites'

import { useRouter } from 'next/router'

import { SignUpForm, LogInForm } from '../../../components/Auth'

import { Row, Col, notification } from 'antd'


const InvitePage = props => {
    const router = useRouter()

    const [loading, setLoading] = useState(true)
    const [noInvite, setNoInvite] = useState(false)
    const [applyIssue, setApplyIssue] = useState()
    const [invite, setInvite] = useState(null)
    const [inviteID, setInviteID] = useState(null)

    useEffect(() => {
        if (typeof window !== "undefined" && inviteID === null) {
            const path = window.location.pathname
            const id = path.split('/')[path.split('/').length - 1]
            setInviteID(id)

            props.getInvite(
                id,
                invite => {
                    setInvite(invite)
                    setLoading(false)
                },
                () => {
                    setLoading(false)
                    setNoInvite(true)
                }
            )
        }

        if (inviteID !== null && props.accounts.token && !applyIssue) {
            props.applyInvite(
                inviteID,
                project => {
                    router.push(`/projects/${project.public_key}`)
                    notification.success({
                        message: `Welcome to ${project.title}`,
                        description: `You're now a ${invite.role}`,
                        placement: 'bottomLeft'
                    })
                },
                () => setApplyIssue(true)
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
                { loading && <div><LoadingOutlined />{' '}Loading...</div> }
                { noInvite && <div id='bad-invite-key'>404: Nothing is here :(</div>}
                { !noInvite && applyIssue && <div id='bad-bad-email'>{`Opps, this invite is for ${invite && invite.to_email} :(`}</div>}
            </div>

            { 
                (!loading && !noInvite && !applyIssue) && 
                <Row style={{ paddingTop: '8vw' }}>
                    <Col xs={24} style={{ textAlign: 'center', fontSize: '28px', fontWeight: '500', paddingBottom: '12px' }}>
                        You're invited to collaborate!
                    </Col>

                    <Col xs={24} style={{ textAlign: 'center', fontSize: '16px', fontWeight: '500', color: 'red', paddingBottom: '12px' }}>
                        Please use <u>{invite && invite.to_email}</u> as your email.
                    </Col>

                    <Col xs={1} ms={2} md={3} />

                    <Col xs={22} ms={20} md={9}>
                        <LogInForm />
                    </Col>

                    <Col xs={22} ms={20} md={9}>
                        <SignUpForm />
                    </Col>
                </Row>
            }
        </div>
    )
}

function mapStateToProps(state){
  return { accounts: state.accounts }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getInvite, applyInvite }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InvitePage)

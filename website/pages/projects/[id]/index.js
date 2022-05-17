import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import _ from 'lodash'

import { useRouter } from 'next/router'

import { getChats } from '../../../actions/Chats'
import { getPeople } from '../../../actions/People'
import { getProject } from '../../../actions/Projects'
import { getWebhooks } from '../../../actions/Webhooks'
import { resetProject } from '../../../actions/Project'
import { getMessageCount } from '../../../actions/Messages'
import { getCollaborators } from '../../../actions/Collaborators'
import { getInvites } from '../../../actions/Invites'

import { Row, Col, Layout, Breadcrumb } from 'antd'
import { UnorderedListOutlined, RadarChartOutlined } from '@ant-design/icons'

import Loading from '../../../components/Loading'

import TitleSection from './_Sections/Title'
import ApiKeysSection from './_Sections/ApiKeys'
import OptionsSection from './_Sections/Options'
import PeopleSection from './_Sections/People'
import ChatsSection from './_Sections/Chats'
import WebhooksSection from './_Sections/Webhooks'
import PlanSection from './_Sections/Plan'
import NotificationsSection from './_Sections/Notifications'
import CollaboratorsSection from './_Sections/Collaborators'
import InvitesSection from './_Sections/Invites'

import SideMenu from './_SideMenu'

import Steps from './_Steps'

const { Content, Footer } = Layout

export function getStaticProps() {
    return {
        props: {}
    }
}

export function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}


const ProjectPage = props => {
    const router = useRouter()
    const [pageActive, setPageActive] = useState(false)

    const [projectInterval, setProjectInterval] = useState(0)
    const [routeInterval, setRouteInterval] = useState(0)

    const [id, setProjectID] = useState('')
    const [section, setSection] = useState('')

    useEffect(() => {
        if (typeof window !== "undefined" && !pageActive) {
            setPageActive(true)

            const path = window.location.pathname
            const tail = path.split('/')[path.split('/').length - 1]
            const projectID = tail.split('#')[0]

            setProjectID(projectID)
            props.getProject(projectID, () => {})
            props.getWebhooks(projectID, () => {})
            pollProjectData(projectID)

            const pi = setInterval(() => pollProjectData(projectID), 60000)
            setProjectInterval(pi)

            const ri = setInterval(() => {
                setSection(window.location.hash.split('#')[1])
            }, 100)
            setRouteInterval(ri)

            console.log(pi, ri)

            return () => {
                props.resetProject()
                clearInterval(projectInterval)
                clearInterval(routeInterval)
            }
        }
    }, [window])

    function pollProjectData(id) {
        props.getChats(id, () => {})
        props.getPeople(id, () => {})
        props.getMessageCount(id, () => {})
        props.getCollaborators(id, () => {})
        props.getInvites(id, () => {})
    }

    const { accounts, steps } = props

    const hasSteps = steps.message_count === 0 ||
        (steps.people && Object.values(steps.people).length === 0) || 
        (steps.chats && Object.values(steps.chats).length === 0)

    if (!accounts || !accounts.token) { router.push("/") }

    if (_.isEmpty(steps)) { return <Loading /> }
    
    return (
        <Row>
            <Col xs={4} style={{ minHeight: 'calc(100vh - 64px)', backgroundColor: '#f0f2f5' }}>
                <SideMenu />
            </Col>

            <Col xs={20} xl={hasSteps ? 14 : 20}>
                <Layout style={{ minHeight: 'calc(100vh - 64px)'}}>
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 42 }}>
                        <Breadcrumb style={{ margin: '16px 24px' }}>
                            <Breadcrumb.Item style={{ cursor: 'pointer' }} onClick={() => router.push("/projects")}>
                                <UnorderedListOutlined /> Projects
                            </Breadcrumb.Item>

                            <Breadcrumb.Item>
                                <RadarChartOutlined /> { steps.title }
                            </Breadcrumb.Item>
                        </Breadcrumb>

                        <div style={{ height: '32px' }} />

                        <div className="site-layout-background">
                            {
                            <div>
                                    {
                                        (section === 'settings' || !section) &&
                                        <div>
                                            <TitleSection />

                                            <div style={{ height: '24px' }} />

                                            <ApiKeysSection />

                                            <div style={{ height: '24px' }} />
                                            
                                            <OptionsSection />
                                        </div>
                                    }

                                    { section === 'users' && <PeopleSection /> }

                                    { section === 'chats' && <ChatsSection /> }

                                    { section === 'webhooks' && <WebhooksSection /> }

                                    { section === 'notifications' && <NotificationsSection /> }

                                    { 
                                        section === 'collaborators' && 
                                        <div>
                                            <CollaboratorsSection /> 

                                            <div style={{ height: '24px' }} />

                                            <InvitesSection />
                                        </div>
                                    }

                                    { section === 'plan' && <PlanSection /> }
                                </div>
                            }
                        </div>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>
                        Chat Engine is a La Morre Company
                    </Footer>
                </Layout>
            </Col>

            <Col xs={0} xl={hasSteps ? 6 : 0}>
                <Steps />
            </Col>
        </Row>
    )
}

function mapStateToProps(state){
    return { 
        accounts: state.accounts,
        steps: state.steps,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        { 
            getChats, 
            getPeople, 
            getProject, 
            getWebhooks,
            resetProject,
            getMessageCount,
            getCollaborators, 
            getInvites,
        }, 
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Modal, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import EditTitleForm from './EditTitleForm'

class NewPerson extends Component {
    state = {
        visible: false
    }

    render() {        
        return (
            <div>
                <Button 
                    size='large'
                    type="primary" 
                    id='edit-project-button'
                    icon={<EditOutlined />}
                    onClick={() => this.setState({ visible: true })}
                    disabled={this.props.steps.count_people >= this.props.steps.monthly_users}
                >
                    Edit Title
                </Button>                    

                {
                    this.state.visible && 
                    <Modal
                        footer={null}
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                    >
                        <EditTitleForm onComplete={() => this.setState({ visible: false })} />
                    </Modal>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return { steps: state.steps }
}

export default connect(mapStateToProps, {})(NewPerson)
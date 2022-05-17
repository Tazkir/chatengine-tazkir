import React, { useState } from 'react'

import { Modal } from 'antd'

import LogInForm from './LogInForm'

import { useRouter } from 'next/router'

const LogInModal = props => {
    const router = useRouter()
    const [visible, setVisible] = useState(false)

    function showModal() {
        setVisible(true)
    }

    function handleCancel(){
        setVisible(false)
    }

    return (
        <div>
            <div type="primary" onClick={showModal} id='login-tab'>
                Log In
            </div>

            {
                visible &&
                <Modal
                    footer={null}
                    visible={visible}
                    onCancel={handleCancel}
                >
                    <LogInForm onComplete={() => router.push('/projects')} />
                </Modal>
            }
        </div>
    );
}

export default LogInModal;
import React, { useState } from "react";

import { Modal } from "antd";

import SignUpForm from "./SignUpForm";

import { useRouter } from "next/router";

const LogInModal = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <div>
      <div onClick={showModal} id="sign-up-tab">
        Sign Up
      </div>

      {visible && (
        <Modal footer={null} visible={visible} onCancel={handleCancel}>
          {process.env.NEXT_PUBLIC_IS_SIGNUP_BLOCKED !== "true" && (
            <SignUpForm onComplete={() => router.push("/projects")} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default LogInModal;

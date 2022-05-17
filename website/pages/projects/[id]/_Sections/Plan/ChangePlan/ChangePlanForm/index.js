import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CreditCardForm from "./CreditCardForm";

import { Button, Radio, Form, InputNumber } from "antd";

const ChangePlanForm = (props) => {
  const didMountRef = useRef(false);
  const [value, setValue] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    if (!didMountRef.current && typeof window !== "undefined") {
      didMountRef.current = true;
      const stripeKey =
        window.origin && window.origin.indexOf("chatengine") !== -1
          ? "pk_live_4B39rwi7bplEbiAqMRMFTRQX00T5Noi596"
          : "pk_test_mxmb1MVxMQ64ib1Kugz1AnpD00voyO8aIr";
      setStripePromise(loadStripe(stripeKey));
    }
  });

  function renderOptions(plans) {
    return plans.map((plan, index) => {
      return (
        <Radio style={radioStyle} value={plan.plan} key={`plan_${index}`}>
          {plan.name}
        </Radio>
      );
    });
  }

  const newPlans = plans.filter((plan) => plan.plan !== props.steps.plan_type);

  return (
    <div>
      <h2>Change Plan</h2>

      <div>New Plan:</div>

      <Radio.Group
        value={value}
        style={{ paddingBottom: "24px" }}
        onChange={(event) => setValue(event.target.value)}
      >
        {renderOptions(newPlans)}
      </Radio.Group>

      <Form>
        <Form.Item
          label="Packs of 1000 Users"
          name="users"
          rules={[
            { required: true, message: "Please select a user quantity!" },
          ]}
        >
          <InputNumber
            min={1}
            max={100}
            value={1}
            defaultValue={1}
            onChange={(quantity) => setQuantity(quantity)}
          />
        </Form.Item>
      </Form>

      <Elements stripe={stripePromise}>
        <CreditCardForm
          plan={value}
          user={props.accounts}
          project={props.steps}
          quantity={quantity}
          onSubscribe={() => props.onSubscribe()}
        />
      </Elements>

      <Button block={true} onClick={() => props.onClose()}>
        Cancel
      </Button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    steps: state.steps,
  };
}

export default connect(mapStateToProps, {})(ChangePlanForm);

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const plans = [
  {
    name: "Basic (Free)",
    plan: "basic",
  },
  {
    name: "Light Monthly",
    plan: "light",
  },
  {
    name: "Production Monthly",
    plan: "production",
  },
  {
    name: "Professional Monthly",
    plan: "professional",
  },
];

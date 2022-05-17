import React, { useState } from "react";

import axios from "axios";

import { Button } from "antd";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import * as str from "../../../../../../../actions";

import CardInput from "./CardInput";

const planToStripe = {
  basic: {
    price: 0,
    taxes: 0,
    discount: 0,
    total: 0,
  },
  light: {
    price: 7,
    taxes: 0.91,
    discount: 0,
    total: 7.91,
  },
  production: {
    price: 25,
    taxes: 3.25,
    discount: 0,
    total: 28.25,
  },
  professional: {
    price: 36.0,
    taxes: 4.68,
    discount: 0,
    total: 40.68,
  },
  // "light_annual": {
  //     price: 82.00,
  //     taxes: 10.66,
  //     discount: 0.50,
  //     total: 46.33,
  // },
  // "production_annual": {
  //     price: 300.00,
  //     taxes: 39.00,
  //     discount: 0.50,
  //     total: 169.50,
  // },
  // "professional_annual": {
  //     price: 432.00,
  //     taxes: 56.16,
  //     discount: 0.50,
  //     total: 244.08,
  // },
};

export default function CreditCardForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const plan = props.plan;
  const pricePlan = plan ? planToStripe[plan].price : 0;
  const taxesPlan = plan ? planToStripe[plan].taxes : 0;
  const discount = plan ? planToStripe[plan].discount : 0;

  function setFormError(message) {
    setError(message);
    setLoading(false);
  }

  const handleSubmit = async () => {
    setLoading(true);

    const { email, token } = props.user;

    if (!stripe || !elements) return;

    if (plan !== "basic") {
      const result = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: { email },
      });

      if (result.error) {
        return setFormError(result.error);
      }

      try {
        const res = await axios.patch(
          `${str.ROOT_URL}/subscriptions/${props.project.public_key}/`,
          {
            plan,
            payment_method: result.paymentMethod.id,
            quantity: props.quantity,
          },
          { headers: { Authorization: `Token ${token}` } }
        );

        if (res.data.status === "requires_action") {
          stripe
            .confirmCardPayment(res.data.client_secret)
            .then(function (result) {
              if (result.error) {
                return setFormError("Your Credit Card info is incorrect!");
              }
            });
        }

        if (res.status === 400) {
          return setFormError("Your C.C. info is incorrect");
        }
      } catch {
        return setFormError("Your Credit Card info is incorrect");
      }
    } else {
      await axios.delete(
        `${str.ROOT_URL}/subscriptions/${props.project.public_key}/`,
        { headers: { Authorization: `Token ${token}` } }
      );
    }

    setLoading(false);
    props.onSubscribe();
  };

  return (
    <div>
      <h4 style={{ marginBottom: "2px" }}>Users: {props.quantity * 1000}</h4>

      <h4 style={{ marginBottom: "2px" }}>
        Subscription: ${pricePlan.toFixed(2)}
      </h4>

      <h4 style={{ marginBottom: "2px" }}>
        Taxes (HST): ${taxesPlan.toFixed(2)}
      </h4>
      {discount > 0 && (
        <h4 style={{ marginBottom: "2px", color: "#fa541c" }}>
          Discount: {discount * 100}
          {discount && "% off your first year"}
        </h4>
      )}
      <h3 style={{ marginBottom: "2px", fontWeight: "700" }}>
        {`Total: $${(
          props.quantity *
          (pricePlan + taxesPlan) *
          (1 - discount)
        ).toFixed(2)} USD`}
      </h3>

      {plan !== "basic" && (
        <div style={{ paddingTop: "12px", paddingBottom: "14px" }}>
          <CardInput />
        </div>
      )}

      {error && <div style={{ color: "red" }}>{error}</div>}

      <Button
        block={true}
        loading={loading}
        onClick={handleSubmit}
        style={{ marginBottom: "12px" }}
        type={plan === "basic" ? "danger" : "primary"}
        disabled={!plan || plan === props.project.plan_type}
      >
        {plan === "basic" ? "Cancel Subscription" : "Subscribe"}
      </Button>
    </div>
  );
}

import React, { useState } from "react";
import FormOrderDetails from "../layout/FormOrderDetails";
import Confirmation from "./Confirmation";
import Thankyou from "./Thankyou";
import { BrowserRouter as Route } from "react-router-dom";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    step: 1,
    time: "",
    date: "",
    guests: 0,
    name: "",
    wishes: "",
    phone: "",
  });

  //Proceed to Next Step
  const nextStep = () => {
    const { step } = formData;
    setFormData({ ...formData, step: step + 1 });
  };

  //go back to prev Step
  const prevStep = () => {
    const { step } = formData;
    setFormData({ ...formData, step: step - 1 });
  };

  const { step, time, date, guests, name, wishes, phone } = formData;

  const values = { step, time, date, guests, name, wishes, phone };

  switch (step) {
    case 1:
      return (
        <FormOrderDetails
          nextStep={nextStep}
          formData={formData}
          values={values}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 2:
      return (
        <Confirmation
          nextStep={nextStep}
          formData={formData}
          prevStep={prevStep}
          values={values}
          formData={formData}
          setFormData={setFormData}
        />
      );

    case 3:
      return <Thankyou values={values} formData={formData} />;

    case 4:
      return <h1>Success</h1>;
  }
};

export default OrderForm;

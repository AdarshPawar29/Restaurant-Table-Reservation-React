import React from "react";
import checked from "../../images/checked.png";

const Thankyou = (props) => {
  const { values, formData, setFormData, nextStep, prevStep } = props;
  const { guests, date, time, wishes, name, phone } = values;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="display-2">Thank You</h2>
      <div className="my-3">
        <img src={checked} alt="no-img" style={{ width: "100px" }} />
      </div>
      <div>
        <div className="mt-4">
          <h6 className="lead fw-bold">Order Confirmed:</h6>
          <h6 className="lead text-primary">{`${date}, ${time}`}</h6>
          <h6 className="lead text-primary">{`${guests} guests, ${wishes}`}</h6>
        </div>

        <div className="mt-4">
          <h6>Name:</h6>
          <h6 className="display-6">{`${name}`}</h6>
        </div>

        <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
          <p
            style={{
              backgroundColor: "#d2f8d2",
              color: "#66AD47",
            }}
            className="p-3 lead"
          >
            <i className="fas fa-info-circle"></i>Tell your name to hostess You
            will be invited to a table.
          </p>
          <p
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
            }}
            className="p-3 lead"
          >
            <i className="fas fa-info-circle"></i>You can Close this window now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;

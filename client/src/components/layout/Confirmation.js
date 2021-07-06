import React from "react";
import { loadOrder } from "../../actions/reserve";
import { connect } from "react-redux";

const Confirmation = (props) => {
  const { values, nextStep, prevStep } = props;

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const { guests, date, time, wishes, name, phone } = values;

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="display-3">Confirmation</h2>
        <div>
          <div className="mt-4">
            <h6 className="lead fw-bold">Order Information:</h6>
            <h3>
              Date:- <span className="text-primary">{`${date}`}</span>
            </h3>
            <h3>
              Time:- <span className="text-primary">{`${time}`}</span>
            </h3>
            <h3>
              Guests:- <span className="text-primary">{`${guests}`}</span>
            </h3>
            <h3>
              Name:- <span className="text-primary">{`${name}`}</span>
            </h3>
            <h3>
              Phone No.:- <span className="text-primary">{`${phone}`}</span>
            </h3>
            <h3>
              Wishes:- <span className="text-primary">{`${wishes}`}</span>
            </h3>
          </div>
          <div className="my-3">
            <div>
              <button
                className="btn btn-dark mb-3"
                style={{ width: "100%" }}
                onClick={(e) => {
                  back(e);
                }}
              >
                Back
              </button>
            </div>
            <div>
              <button
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={(e) => {
                  Continue(e);
                }}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderData: state.reserve,
});

export default connect(mapStateToProps, { loadOrder })(Confirmation);

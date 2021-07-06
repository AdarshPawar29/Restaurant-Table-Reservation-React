import React from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

const FormOrderDetails = ({
  values,
  formData,
  setFormData,
  nextStep,
  setAlert,
}) => {
  // const { values, formData, setFormData, nextStep } = props;
  const { guests, date, time, wishes, name, phone } = values;

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const onChangeTime = (e) => {
    setFormData({ ...formData, time: e.target.value });
  };

  const onChangeDate = (e) => {
    setFormData({ ...formData, date: e.target.value });
  };

  const onChangeWishes = (e) => {
    setFormData({ ...formData, wishes: e.target.value });
  };

  const onChangeGuestCounterMinus = () => {
    if (guests <= 0) {
      setFormData({ ...formData, guests: 0 });
    } else {
      setFormData({ ...formData, guests: guests - 1 });
    }
  };

  const onChangeGuestCounterPlus = () => {
    setFormData({ ...formData, guests: guests + 1 });
  };

  const onChangeName = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const onChangePhone = (e) => {
    setFormData({ ...formData, phone: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      guests == "" ||
      name == "" ||
      phone == "" ||
      date == "" ||
      time == "" ||
      wishes == ""
    ) {
      setAlert("Please enter all the details", "danger");
    } else {
      Continue(e);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="display-4">Table Reservation</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mt-4">
            <h6>Date</h6>
            <input
              type="date"
              className="form-control"
              id="selectDate"
              name="date"
              value={date}
              onChange={(e) => onChangeDate(e)}
            />
          </div>
          <div className="my-3">
            <h6>Guests</h6>
            <input
              type="button"
              className="btn btn-primary me-2"
              value="-"
              onClick={() => onChangeGuestCounterMinus()}
            />
            <input type="button" className="btn btn-light" value={guests} />
            <input
              type="button"
              className="btn btn-primary ms-2"
              value="+"
              onClick={() => onChangeGuestCounterPlus()}
            />
          </div>
          <div className="my-3">
            <h6>Time</h6>
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option1"
                    autoComplete="off"
                    value="16:00"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option1">
                    16:00
                  </label>
                </div>

                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option2"
                    autoComplete="off"
                    value="16:30"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option2">
                    16:30
                  </label>
                </div>
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option3"
                    autoComplete="off"
                    value="17:00"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option3">
                    17:00
                  </label>
                </div>
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option4"
                    autoComplete="off"
                    value="17:30"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option4">
                    17:30
                  </label>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option5"
                    autoComplete="off"
                    value="18:00"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option5">
                    18:00
                  </label>
                </div>
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check "
                    name="options"
                    id="option6"
                    autoComplete="off"
                    value="18:30"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option6">
                    18:30
                  </label>
                </div>
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check "
                    name="options"
                    id="option7"
                    autoComplete="off"
                    value="19:00"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option7">
                    19:00
                  </label>
                </div>
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option8"
                    autoComplete="off"
                    value="19:30"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option8">
                    19:30
                  </label>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option9"
                    autoComplete="off"
                    value="20:00"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option9">
                    20:00
                  </label>
                </div>
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check col-md-3"
                    name="options"
                    id="option10"
                    autoComplete="off"
                    value="20:30"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option10">
                    20:30
                  </label>
                </div>
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check col-md-3"
                    name="options"
                    id="option11"
                    autoComplete="off"
                    value="21:00"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option11">
                    21:00
                  </label>
                </div>
                <div className="col-3">
                  <input
                    type="radio"
                    className="btn-check col-md-3"
                    name="options"
                    id="option12"
                    autoComplete="off"
                    value="21:30"
                    onClick={(e) => onChangeTime(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="option12">
                    21:30
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h6>Name:</h6>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => onChangeName(e)}
            />
          </div>
          <div className="mt-4">
            <h6>Phone:</h6>
            <input
              type="number"
              className="form-control"
              value={phone}
              onChange={(e) => onChangePhone(e)}
            />
          </div>
          <div>
            <label htmlFor="textarea1">
              <h6>Wishes</h6>
            </label>
            <textarea
              className="form-control"
              id="textarea1"
              rows="3"
              value={wishes}
              onChange={(e) => onChangeWishes(e)}
            ></textarea>
          </div>
          <div>
            <button
              className="btn btn-primary my-4"
              style={{ width: "50%" }}
              onClick={(e) => onSubmit(e)}
            >
              RESERVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { setAlert })(FormOrderDetails);

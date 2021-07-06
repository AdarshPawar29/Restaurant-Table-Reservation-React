import { ORDER_SUCCESS, LOAD_ORDER } from "../actions/Types";
const initialState = {
  time: "",
  date: "",
  guests: 0,
  name: "",
  wishes: "",
  phone: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ORDER_SUCCESS:
      return {
        ...state,
        ...payload,
        time: payload.time,
        date: payload.date,
        guests: payload.guests,
        name: payload.name,
        wishes: payload.wishes,
        phone: payload.phone,
      };

    case LOAD_ORDER:
      return {
        ...state,
        ...payload,
        time: payload.time,
        date: payload.date,
        guests: payload.guests,
        name: payload.name,
        wishes: payload.wishes,
        phone: payload.phone,
      };

    default:
      return state;
  }
}

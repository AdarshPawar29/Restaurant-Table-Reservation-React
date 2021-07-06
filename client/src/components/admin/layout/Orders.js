import React, { useContext } from "react";
import { ReservationContext } from "../../context/ReservationContext";
import { APIContextProvider } from "../../context/ApiContextProvider";
const Orders = () => {
  const { reservation, setReservation } = useContext(ReservationContext);
  const { orders, setOrders } = useContext(APIContextProvider);
  const { dated } = reservation;

  return (
    <div>
      <div>dated</div>
    </div>
  );
};

export default Orders;

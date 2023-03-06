import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../api";
import { OrderList } from "../components/OrderList";
import { Sidebar } from "../components/Sidebar";

export const ManagmentPaymentPage = () => {
  const [data, setData] = useState([]);
  const [payed, setPayed] = useState(false);
  const loadOrders = async () => {
    const result = await getOrder("false");
    console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <Sidebar />
      <OrderList data={data} />
    </>
  );
};

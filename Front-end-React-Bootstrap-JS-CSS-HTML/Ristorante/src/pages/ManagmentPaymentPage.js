import { useState, useEffect } from "react";
import { getOrder } from "../api";
import { OrderList } from "../components/OrderCategory/OrderList";
import { Sidebar } from "../components/Sidebar";
import { updatePaymentApi } from "../api";
export const ManagmentPaymentPage = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState({ payed: true });

  const loadOrders = async () => {
    const result = await getOrder("false");
    console.log(result.data);
    setData(result.data);
  };
  const updatePayment = async (id) => {
    const result = await updatePaymentApi(order,id);
    loadOrders();
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <Sidebar />
      <OrderList data={data} update={updatePayment} />
    </>
  );
};

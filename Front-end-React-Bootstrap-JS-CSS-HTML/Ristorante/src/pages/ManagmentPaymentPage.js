import { useState, useEffect } from "react";
import { getOrder, getOrderDTO, updatePaymentApi } from "../api";
import { OrderList } from "../components/OrderCategory/OrderList";
import { Sidebar } from "../components/Sidebar";

export const ManagmentPaymentPage = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState({ payed: true });
  const [dataDto, setDataDto] = useState([]);

  const loadOrders = async () => {
    const result = await getOrder("false");
    if (result.ok) {
      setData(result.data);
    } else {
      console.log(result.data, "Errroreeee");
    }
  };

  const loadOrdersDTO = async () => {
    const result = await getOrderDTO("false");
    if (result.ok) {
      setDataDto(result.data);
    } else {
      console.log(result.data);
    }
  };
  const updatePayment = async (id) => {
    const result = await updatePaymentApi(order, id);

       if (result.ok) {
         setDataDto(result.data);
       } else {
         console.log(result.data);
       }
    loadOrdersDTO();
  };

  useEffect(() => {
    loadOrders();
    loadOrdersDTO();
  }, []);

  return (
    <>
      <Sidebar />
      <OrderList data={data} update={updatePayment} dataDto={dataDto} />
    </>
  );
};

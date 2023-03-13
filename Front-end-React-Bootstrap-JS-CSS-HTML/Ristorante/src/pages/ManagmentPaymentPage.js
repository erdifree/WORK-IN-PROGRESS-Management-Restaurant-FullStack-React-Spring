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
    console.log(result.data);
    setData(result.data);
   
  };

  const loadOrdersDTO = async () => {
    const result = await getOrderDTO("false");
    console.log(result.data);
    setDataDto(result.data);
  };
  const updatePayment = async (id) => {
    const result = await updatePaymentApi(order, id);
    loadOrders();
  };
 
  useEffect(() => {
     loadOrdersDTO();
    loadOrders();
    
  }, []);

  return (
    <>
      <Sidebar />
      <OrderList data={data} update={updatePayment} dataDto={dataDto} />
    </>
  );
};

import { useState, useEffect } from "react";
import { getOrder, getOrderDTO, updatePaymentDTOApi } from "../api";
import { OrderList } from "../components/OrderCategory/OrderList";
import { Sidebar } from "../components/Sidebar";

export const ManagmentPaymentPage = () => {

  const [order, setOrder] = useState({ payed: true });
  const [dataDto, setDataDto] = useState([]);



  const loadOrdersDTO = async () => {
    const result = await getOrderDTO("false");
    if (result.ok) {
      setDataDto(result.data);
    } else {
      console.log(result.data);
    }
  };
  
  const updatePayDto = async (id) => {
    const result = await updatePaymentDTOApi(order, id);
   console.log(" Ordini rimasti aperti",result);
  };

  useEffect(() => {
    loadOrdersDTO();
  }, []);

  return (
    <>
      <Sidebar />
      <OrderList updateDto={updatePayDto} dataDto={dataDto} />
    </>
  );
};

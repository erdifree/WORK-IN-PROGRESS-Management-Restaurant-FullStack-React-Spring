import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder, getOrderDTO } from "../api";
import { OrderList } from "../components/OrderCategory/OrderList";
import { Sidebar } from "../components/Sidebar";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { deliteOrderApi } from "../api";

export const OrderPage = () => {
  const [data, setData] = useState([]);
  const { payed } = useParams();

  const loadOrders = async () => {
    const result = await getOrder(payed);
    console.log(result.data);
    setData(result.data);
  };
  const deleteOrders = async (orderId) => {
    const result = await deliteOrderApi(orderId);
    if(result.ok){
      loadOrders();
    }else{
      console.log(result.result);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <Sidebar />
      <Container>
        <OrderList data={data} payed={payed} deleteOrder={deleteOrders} />
      </Container>
    </>
  );
};

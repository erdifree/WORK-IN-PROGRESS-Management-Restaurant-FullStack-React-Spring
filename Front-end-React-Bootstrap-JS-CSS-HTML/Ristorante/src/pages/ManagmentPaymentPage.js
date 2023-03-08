import { useState, useEffect } from "react";
import { getOrder } from "../api";
import { OrderList } from "../components/OrderList";
import { Sidebar } from "../components/Sidebar";
import { Button } from "react-bootstrap";
import { ModalOrder } from "../components/ModalOrder";
import Row from "react-bootstrap";
import Col from "react-bootstrap";


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

      <OrderList
        data={data}
        order={
          <Button>
            <ModalOrder />
          </Button>
        }
      />
    </>
  );
};

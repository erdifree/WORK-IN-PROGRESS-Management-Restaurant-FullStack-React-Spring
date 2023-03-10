import { useState, useEffect } from "react";
import { geTable } from "../api";
import { TableList } from "../components/TableList";
import { Sidebar } from "../components/Sidebar";
import { ManagmentPaymentPage } from "./ManagmentPaymentPage";
import { getOrder } from "../api";

export const TablePage = () => {
  const [data, setData] = useState([]);
  const [orderToPaued, setOrderToPaued] = useState(true);

  const loadTable = async () => {
    const result = await geTable();
    console.log(result.data);
    setData(result.data);

  };
  const handleLinkClick=(event)=> {
    event.preventDefault();
  }

  

  useEffect(() => {
    loadTable();
  }, []);

  return (
    <>
      <Sidebar />
      <TableList table={data} disable={handleLinkClick} />
    </>
  );
};

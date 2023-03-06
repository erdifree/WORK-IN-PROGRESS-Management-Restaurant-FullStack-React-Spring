import { useState,useEffect } from "react"
import { getOrder } from "../api"
import { OrderList } from "../components/OrderList";
import { Sidebar } from "../components/Sidebar";

export const OrderPage=()=>{
const [data, setData] = useState([]);
 const loadOrders = async () => {
   const result = await getOrder();
   console.log(result.data);
   setData(result.data);
 };
 useEffect(() => {
   loadOrders();
 }, []);

 return (
    <>
 <Sidebar/>
 <OrderList data={data}/></>)

}
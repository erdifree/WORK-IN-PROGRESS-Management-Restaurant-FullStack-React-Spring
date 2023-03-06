import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import { getOrder } from "../api"
import { OrderList } from "../components/OrderList";
import { Sidebar } from "../components/Sidebar";

export const OrderPage=()=>{
const [data, setData] = useState([]);
const { payed } = useParams();
console.log("sono il payed da passare",payed)
 const loadOrders = async () => {
   const result = await getOrder(payed);
   console.log(result.data);
   setData(result.data);
 };
 useEffect(() => {
   loadOrders();
 },[]);

 return (
    <>
 <Sidebar/>
 <OrderList data={data}/></>)

}
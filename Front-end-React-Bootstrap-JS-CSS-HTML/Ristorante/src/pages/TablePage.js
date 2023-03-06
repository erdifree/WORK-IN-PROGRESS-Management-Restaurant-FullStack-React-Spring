import { useState, useEffect } from "react";
import { geTable } from "../api";
import { TableList } from "../components/TableList";


export const TablePage = () => {
  const [data, setData] = useState([]);

  const loadTable = async () => {
    const result = await geTable();
    console.log(result.data);
    setData(result.data);
  };

 

  useEffect(() => {
    loadTable();
  }, []);

  return <TableList table={data} />;
};

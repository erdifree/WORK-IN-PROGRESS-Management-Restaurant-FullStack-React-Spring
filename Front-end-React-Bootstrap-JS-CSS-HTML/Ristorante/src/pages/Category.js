import { FoodList } from "../components/FoodList";
import { useState, useEffect } from "react";
import { getFoodsByType } from "../api";
import { useParams } from "react-router-dom";
export const Category = ({ addFood }) => {
  const [foods, setFoods] = useState([]);
  const { type } = useParams();

  console.log("Sono il type", { type });
  console.log("Sono il addfood", { addFood });

  const loadFood = async () => {
    const result = await getFoodsByType(type);
    setFoods(result.data);
  };
  console.log("LISTA PIATTTIIIII", foods);
  useEffect(() => {
    loadFood();
  },[]);
  return <FoodList food={foods} addFood={addFood} />;
};

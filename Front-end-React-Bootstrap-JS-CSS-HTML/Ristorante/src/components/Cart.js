import { BsCart2, BsFillPatchCheckFill } from "react-icons/bs";
import { BiDish } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { postOrderApi, putOrderApi } from "../api";

const Cart = ({ add, del, cartProducts, tableId, reset, elId }) => {
  const [showList, setShowList] = useState(false);
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState({});
  console.log("sono id del ordine che serve per far update dell'ordine", {
    elId,
  });
  const navigate = useNavigate();

  console.log("questa e la lista che devo registrare", cartProducts, tableId);
  console.log("sono id del ordine che serve per far update dell'ordine", {
    elId,
  });

  const handlePost = async (order, id, orderId) => {
    orderId == undefined
      ? postOrderApi(order,id)
      : putOrderApi(order,orderId);
    /* const result = await postOrderApi(order, id);
    if (result.ok) {
      console.log("Ordine  Confermoato e Registrato");
    }*/
  };
  /*Find all list food  in cart and prepare a arry with id to insert in order body */
  const listFood = () => {
    let foodList = [];
    cartProducts.map((el) => {
      foodList.push({ id: el.id });
    });
    return foodList;
  };
  /**  function that create a body of Object ready to pass to the Rest service post */
  const createOrder = () => {
    const order = {
      localDate: new Date(),
      seats: 2,
      food_id: listFood(),
      drink_id: listFood(),
      table_id: parseInt(tableId),
      payed: false,
    };
    setOrder(order);
    handlePost(order, tableId, elId);
  };

  const updateOrder = () => {
    const order = {
      food_id: listFood(),
      drink_id: listFood(),
      payed: false,
    };
    setOrder(order);
    handlePost(order, tableId,elId);
  };

  /**Function of callback of ofcanvas of cart */
  const handleClose = () => {
    setShow(false);
    setShowList(!showList);
  };
  const handleShow = () => {
    setShow(true);
    setShowList(!showList);
  };
  /**function  calcolate the total price of all  article  of the card */
  function calculateTotal() {
    let total = 0;
    for (let item of cartProducts) {
      total += item.price.toFixed(2) * item.quantity;
    }
    return total.toFixed(2);
  }
  console.log("Sono Cart", cartProducts);
  let content = <></>;
  if (showList) {
    content = (
      <ul>
        {cartProducts.map((el) => {
          return (
            <li key={el.id}>
              <div className="row ">
                <div className="col-6 text-light ">{el.description}</div>
                <div className="col-6 text-end  text-light ">
                  {el.price.toFixed(2)} &euro;
                  <button className="btnCart " onClick={() => del(el)}>
                    -
                  </button>
                  {el.quantity}
                  <button className="btnCart" onClick={() => add(el)}>
                    +
                  </button>
                </div>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div className=" row d-flex justify-content-center">
      <button className="btn cart mb-3" onClick={handleShow}>
        <BiDish size={"52px"} />

        <span className="badge bg-secondary">{cartProducts.length}</span>
      </button>
      <Offcanvas className="alert bg-black " show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className=" text-info ">
            Le Portate Da Ordinare
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{content}</Offcanvas.Body>
        <div className="text-end text-light">
          Total <BsCart2 />: {calculateTotal()} &euro;
          <button className="btn cart mb-3" onClick={handleShow}>
            <BsFillPatchCheckFill
              className="text-light"
              size={"40px"}
              onClick={() => {
                elId === undefined ? createOrder():updateOrder();
                reset();
                navigate("/table");
              }}
            />

            <span className="badge bg-secondary"></span>
          </button>
          <hr />
        </div>
      </Offcanvas>
    </div>
  );
};

export default Cart;

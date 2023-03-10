import { Button, Card } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from "react-icons/bs";
import { OrderList } from "./OrderList";
import imgTavolo from "./img/tavolo.avif"
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Table = ({ table, disable }) => {
  console.log("sono il tavolo", table.ordersSet);

  const func = (event) => {
    const result = table.ordersSet.map((el) => {
      console.log(el.payed);
      if (el.payed === false) {
        console.log("hahahahahahaha");
         event.preventDefault();
       
      }
    });
  };

  return (
    <>
      <Link
        to={`/table/${table.id}`}
        className=" text-decoration-none text-reset text-center"
        onClick={func}
      >
        <Card className="c_task" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imgTavolo} />
          <Card.Body>
            <div>{table.name}</div>
          </Card.Body>
          <Card.Footer>
            <Button onClick={func}>edit</Button>
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
};

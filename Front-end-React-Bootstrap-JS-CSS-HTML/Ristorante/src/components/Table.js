import { Button, Card } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from "react-icons/bs";
import { OrderList } from "./OrderCategory/OrderList"; 
import imgTavolo from "./img/tavolo.avif";
import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Table = ({ table }) => {
  const [stateButton, setStateButton] = useState(true);
  console.log("sono il tavolo", table.ordersSet);
  const navigate = useNavigate();

  const func = (event) => {
    const result = table.ordersSet.map((el) => {
      console.log(el.payed);
      if (el.payed === false) {
        setStateButton(false);
        event.preventDefault();
      }
    });
  };

  const funcedit = (event) => {
    const result = table.ordersSet.map((el) => {
      console.log(el.payed);
      if (el.payed === false) {
        navigate(`/table/${table.id}/order-id/${el.id}`);
      }
    });
  };

  return (
    <>
      <Link
        to={`/table/${table.id}`}
        className=" text-decoration-none text-reset text-center"
        onLoad={func}
        onClick={func}
      >
        <Card className="c_task" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imgTavolo} />
          <Card.Body>
            <div>{table.name}</div>
          </Card.Body>
          <Card.Footer>
            <Button hidden={stateButton} onClick={funcedit} >
              edit
            </Button>
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
};

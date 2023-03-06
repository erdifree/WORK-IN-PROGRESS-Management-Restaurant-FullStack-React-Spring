
import { Button, Card } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from "react-icons/bs";
import { OrderList } from "./OrderList";
import imgTavolo from "./img/tavolo.avif";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Order = ({ getOrderList }) => {
 
  return (
    <>
      <Card className="c_task" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgTavolo} />
        <Card.Body>
          <div>{getOrderList.localDate}</div>
          <div>{getOrderList.seats}</div>
          <div>{getOrderList.payed}</div>
        </Card.Body>
        <Card.Footer>
          <Button variant="light">
            <BsFillTrashFill />
          </Button>
          <Button variant="light">
            <BsPencilFill />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
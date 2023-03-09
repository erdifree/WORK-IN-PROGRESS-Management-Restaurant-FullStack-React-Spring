
import { Button, Card } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsPencilFill,
} from "react-icons/bs";
import imgTavolo from "./img/tavolo.avif";
import { ModalOrder } from "./ModalOrder";
export const Order = ({ getOrderList, update }) => {
  return (
    <>
      <Card className="c_task" style={{ width: "18rem" }}>
        <Card.Body>
          <div>Data di Conferma Ordine: {getOrderList.localDate}</div>
          <div>Coperti: {getOrderList.seats}</div>
        </Card.Body>
        <Card.Footer>
          <Button>
            <ModalOrder getOrder={getOrderList} update={update} />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
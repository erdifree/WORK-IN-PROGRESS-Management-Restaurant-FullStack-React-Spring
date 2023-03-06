
import { Button, Card } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsPencilFill,
} from "react-icons/bs";
import imgTavolo from "./img/tavolo.avif";
export const Order = ({ getOrderList }) => {
 
  return (
    <>
      <Card className="c_task" style={{ width: "18rem" }}>
        
        <Card.Body>
          <div>Data di Conferma Ordine: {getOrderList.localDate}</div>
          <div>Coperti: {getOrderList.seats}</div>
        </Card.Body>
        <Card.Footer>
          <Button variant="light">
           Change state of Payment <BsPencilFill />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
import { Button, Card } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from "react-icons/bs";
import { ModalOrder } from "../ModalOrder";
import Table from "react-bootstrap/Table";
import { Row, Col } from "react-bootstrap";
import LogoOrdineCassa from "../img/LogoOrdineCassa.jpg";
import { useState } from "react";
export const Order = ({ getOrderList, update, deleteOrder, dto }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("DTOOOOOOOOOOOOO", dto);
  console.log("DTaaaaaaaaaa", getOrderList.id);
  const flag = false;
  return (
    <>
      {getOrderList.payed === flag ? (
        <Card className="c_task " style={{ width: "18rem" }}>
          <Button
            className=" btn btn-dark accordion-button "
            onClick={handleShow}
          >
            <Card.Img variant="top" src={LogoOrdineCassa} />
          </Button>
          <Card.Body>
            <h4 className=" text-center">Ordine Tavolo N: {dto.table_id}</h4>
            <ModalOrder
              getOrder={getOrderList}
              update={update}
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
            />
          </Card.Body>
        </Card>
      ) : (
        <tr className=" text-bg-light">
          <td>{getOrderList.id}</td>
          <td>{getOrderList.localDate}</td>
          <td>
            <Button variant="light">
              <BsFillTrashFill
                onClick={() => {
                  deleteOrder(getOrderList.id);
                }}
              />
            </Button>

            <Button variant="light">
              <ModalOrder
                getOrder={getOrderList}
                update={update}
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
              />
            </Button>
          </td>
        </tr>
      )}
    </>
  );
};

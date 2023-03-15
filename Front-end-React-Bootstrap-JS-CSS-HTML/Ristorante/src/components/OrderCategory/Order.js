import { Button, Card } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsPencilFill,
  BsClipboardCheck,
  BsClipboardX,
} from "react-icons/bs";
import { ModalOrder } from "../NavComponent/ModalOrder";
import { ModalOrderDTO } from "../NavComponent/ModalOrderDTO";
import Table from "react-bootstrap/Table";
import { Row, Col } from "react-bootstrap";
import LogoOrdineCassa from "../img/LogoOrdineCassa.jpg";
import { useState } from "react";
export const Order = ({ getOrderList, deleteOrder, dataDto, updateDto }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("ORDER DTO SINGOLO", dataDto);
  console.log("ORDER SINGOLO", getOrderList.id);
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
            <h4 className=" text-center">
              Ordine Tavolo N: {dataDto.table_id}
            </h4>
            <ModalOrderDTO
              dataDto={dataDto}
              updateDto={updateDto}
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

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
export const Order = ({ getOrderList, update, deleteOrder, dto }) => {
  console.log("DTOOOOOOOOOOOOO", dto);
  console.log("DTaaaaaaaaaa", getOrderList.id);
  const flag = false;
  return (
    <>
      {getOrderList.payed === flag ? (
        <Card className="c_task" style={{ width: "18rem" }}>
          <Card.Body>
            <div>Ordine Tavolo N: {dto.table_id}</div>
          </Card.Body>
          <Card.Footer>
            <Button>
             
            </Button>
          </Card.Footer>
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
              <ModalOrder getOrder={getOrderList} update={update} />
            </Button>
          </td>
        </tr>
      )}
    </>
  );
};

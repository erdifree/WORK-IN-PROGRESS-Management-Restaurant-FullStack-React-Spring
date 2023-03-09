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

export const Table = ({ table, disable }) => {
  console.log("sono il tavolo", table);

  return (
    <Link
      to={`/table/${table.id}`}
      className=" text-decoration-none text-reset text-center"
      onClick={disable}
    >
      <Card className="c_task" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgTavolo} />
        <Card.Body>
          <div>{table.name}</div>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Link>
  );
};

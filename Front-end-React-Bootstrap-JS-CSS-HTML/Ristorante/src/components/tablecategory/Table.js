import { Button, Card } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";

import imgTavolo from "../img/tavolo.avif";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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
        const ORDERID = localStorage.setItem("OrderID", el.id);
        console.log("Log orderrrrrrrrr local", ORDERID);
        navigate(`/table/${table.id}/${el.id}`); /*/${el.id}*/
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
            <h3>
              {table.name}
              <Button
                hidden={stateButton}
                onClick={funcedit}
                className="btn btn-sm bg-light btn-outline-light mb-3"
              >
                <BsFillPencilFill className="text-dark " size={"20px"} />
              </Button>
            </h3>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

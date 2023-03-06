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


export const Food = ({ food,addFood}) => {
  console.log(" fooooood",{food});

  console.log("Sono addFood del food", {addFood});
  return (
    <>
      <Card className="c_task" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={food.img} />
        <Card.Body>
          <div>Name: {food.name}</div>
          <div>Description: {food.description}</div>
          <div>Price: {food.price}</div>
        </Card.Body>
        <Card.Footer>
          <Button variant="light">
            <BsFillTrashFill />
          </Button>
          <button
            className="btn btn-sm btn-info shadow-lg"
            onClick={() => {
              addFood(food);
            }}
          >
            Add to cart
          </button>
        </Card.Footer>
      </Card>
     
    </>
  );
};

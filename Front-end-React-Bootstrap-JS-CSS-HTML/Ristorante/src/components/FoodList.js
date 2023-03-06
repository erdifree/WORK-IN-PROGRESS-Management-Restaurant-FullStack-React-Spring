import { Food } from "./Food";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
export const FoodList = ({ food = [], addFood }) => {
  console.log("sono addfood nel food list",{addFood})
  return (
    <>
      <Row className="gy-3">
        {food.map((el) => {
          return (
            <Col xs={4} key={el.id}>
              <Food food={el} addFood={addFood} />
            </Col>
          );
        })}
      </Row>
      <Row className=" d-flex justify-content-center">
        <Col className=" d-flex justify-content-center">
          <Link to="/table/:tableId/">
            <BiArrowBack size={"52px"} className=" text-light" />
          </Link>
        </Col>
      </Row>
    </>
  );
};

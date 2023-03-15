import { Drink } from "./Drink";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
export const DrinkList = ({ drinks = [],addDrink }) => {

  const { tableId } = useParams();
  return (
    <>
      <Row className="gy-3">
        {drinks.map((el) => {
          return (
            <Col
              xs={12}
              md={6}
              lg={3}
              key={el.id}
              className=" d-flex justify-content-between"
            >
              <Drink drink={el} addDrink={addDrink} />
            </Col>
          );
        })}
      </Row>
      <Row className=" d-flex justify-content-center">
        <Col className=" d-flex justify-content-center">
          <Link to={`/table/${tableId}`}>
            <BiArrowBack size={"52px"} className=" text-light" />
          </Link>
        </Col>
      </Row>
    </>
  );
};

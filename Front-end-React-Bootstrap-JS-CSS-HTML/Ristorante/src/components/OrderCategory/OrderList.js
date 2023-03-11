import { Order } from "./Order";
import { Row, Col } from "react-bootstrap";
export const OrderList = ({ data = [], update }) => {
  return (
    <>
      <Row className="gy-3 pt-5 mt-5">
        {data.map((el) => {
          return (
            <Col xs={4} key={el.id}>
              <Order getOrderList={el} update={update} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

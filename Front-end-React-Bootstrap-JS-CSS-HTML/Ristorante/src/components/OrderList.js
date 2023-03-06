import {Order} from "./Order";
import { Row, Col } from "react-bootstrap";
export const OrderList = ({ data = [] }) => {
  return (
    <>
      <Row className="gy-3">
        {data.map((el) => {
          return (
            <Col xs={4} key={el.id}>
              <Order getOrderList={el} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
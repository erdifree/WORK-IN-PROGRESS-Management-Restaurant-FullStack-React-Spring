import { Order } from "./Order";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export const OrderList = ({ data = [], update, payed, deleteOrder }) => {
  const flag = true;
  return (
    <>
      {payed ? (
        <Row className="gy-3 pt-5 mt-5">
          <Table striped bordered hover size="sm">
            <thead className=" text-bg-light">
              <tr>
                <th>Id Order</th>
                <th>Local Date</th>
                <th>Managment Order</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el) => {
                return (
                  <Order
                    getOrderList={el}
                    update={update}
                    deleteOrder={deleteOrder}
                  />
                );
              })}
            </tbody>
          </Table>
        </Row>
      ) : (
        <Row className="gy-3 pt-5 mt-5">
          {data.map((el) => {
            return (
              <Col xs={4} key={el.id}>
                <Order getOrderList={el} update={update} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

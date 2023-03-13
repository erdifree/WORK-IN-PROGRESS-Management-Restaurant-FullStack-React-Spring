import { Order } from "./Order";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export const OrderList = ({ data = [],dataDto=[], update, payed, deleteOrder }) => {
console.log(" ordini dataDTO di orderlist", dataDto);
  console.log(" ordini data di orderlist", data);
  const flag = true;
  return (
    <>
      {payed ? (
        <Row className="gy-3 pt-5 mt-5">
          <Table striped bordered hover size="sm">
            <thead className=" text-bg-light text-center">
              <tr>
                <th>Id Order</th>
                <th>Date of Created Order</th>
                <th>Managment Order</th>
              </tr>
            </thead>
            <tbody className=" text-bg-light text-center">
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
          {dataDto.map((el) => {
            return (
              <Col xs={4} key={el.id}>
                <Order getOrderList={el} update={update} dto={el} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

import { Order } from "./Order";
import { Row, Col, Alert } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export const OrderList = ({
  data = [],
  dataDto = [],
  updateDto,
  payed,
  deleteOrder,
}) => {
  console.log(" ORDERT DT", dataDto);
  console.log(" ORDERLIST", data);
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
                return <Order getOrderList={el} deleteOrder={deleteOrder} />;
              })}
            </tbody>
          </Table>
        </Row>
      ) : (
        <Row className="gy-3 pt-5 mt-5">
          {dataDto.length !== 0 ? (
            <>
              {dataDto.map((el) => {
                return (
                  <Col xs={4} key={el.id}>
                    <Order getOrderList={el} updateDto={updateDto} dataDto={el} />
                  </Col>
                );
              })}
            </>
          ) : (
            <Alert
              variant="info"
              className=" text-center text-dark text-uppercase"
            >
              Non ci sono Ordini Aperti
            </Alert>
          )}
        </Row>
      )}
    </>
  );
};

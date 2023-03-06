import { Row, Col } from "react-bootstrap";
import { Table } from "./Table";
export const TableList = ({ table = [] }) => {
  return (
    <Row className="gy-3">
      {table.map((el) => {
        return (
          <Col xs={4} key={el.id}>
            <Table table={el}  />
          </Col>
        );
      })}
    </Row>
  );
};

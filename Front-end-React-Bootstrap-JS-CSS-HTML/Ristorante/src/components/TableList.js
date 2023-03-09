import { Row, Col } from "react-bootstrap";
import { Table } from "./Table";
export const TableList = ({ table = [], disable }) => {
  return (
    <Row className="gy-3 mt-5 pt-5 justify-content-center">
      {table.map((el) => {
        return (
          <Col xs={4} key={el.id} className=" pt-5">
            <Table table={el} disable={disable} />
          </Col>
        );
      })}
    </Row>
  );
};

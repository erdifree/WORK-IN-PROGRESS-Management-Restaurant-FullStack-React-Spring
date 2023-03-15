import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar";
export const OrderCategory = () => {
  return (
    <>
      <Sidebar />
      <Row className=" d-flex  justify-content-between pt-5 ">
      
            <Col xs={12} md={6} lg={4}>
              <Link
                to="/managmentPaymentPage"
                className=" text-decoration-none text-reset text-center"
              >
                <Card style={{ width: "18rem" }} className="my-5">
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>Ordini Da Saldare</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Link
                to={`/order/${true}`}
                className=" text-decoration-none text-reset text-center"
              >
                <Card style={{ width: "18rem" }} className="my-5">
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>Ordini Saldati</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
     
    </>
  );
};

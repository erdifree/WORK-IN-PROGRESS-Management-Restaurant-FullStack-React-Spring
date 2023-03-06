import { Row,Col,Card,Link } from "react-bootstrap";
const OrderCategory=()=>{

     return (
       <Row className=" d-flex  justify-content-between justify-content-evenly flex-wrap ">
         <Col xs={12} md={6} lg={4}>
           <Link
             to={`/table/primo`}
             className=" text-decoration-none text-reset text-center"
           >
             <Card style={{ width: "18rem" }} className="my-5">
               <Card.Img variant="top"  />
               <Card.Body>
                 <Card.Title>Primi Piatti</Card.Title>
               </Card.Body>
             </Card>
           </Link>
         </Col>
         <Col xs={12} md={6} lg={4}>
           <Link
             to={`/table/secondo`}
             className=" text-decoration-none text-reset text-center"
           >
             <Card style={{ width: "18rem" }} className="my-5">
               <Card.Img variant="top"  />
               <Card.Body>
                 <Card.Title>Secondi Piatti</Card.Title>
               </Card.Body>
             </Card>
           </Link>
         </Col>
       
    
       </Row>
     );
}
import { postFoodApi,putOrderApi,deliteFoodApi } from "../api";
import { useState, useEffect } from "react";
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const ModalInsert = ({ data }) => {
  const defaultInputState = {
    img: "",
    name: "",
    description: "",
    price: "",
    type: "",
  };
  const [inputState, setInputState] = useState(defaultInputState);
  const [show, setShow] = useState(false);
  const [data1, setData1] = useState([]);
  const [inputErrors, setInputErrors] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // validazioni per i campi della form
  const validate = (inputObject) => {
    const errorObj = {};
    if (inputObject.name === "") {
      errorObj.name = "Brand name is mandatory";
    }
    if (inputObject.image === "") {
      errorObj.image = "Brand image is mandatory";
    }
    if (inputObject.yearOfFondation < 1882) {
      errorObj.yearOfFondation = "The first Brand was born in 1883";
    }
    return errorObj;
  };

  // acquisizione valori form
  const handleInputChange = (input, value) => {
    const newInputState = { ...inputState, [input]: value };
    setInputState(newInputState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorObject = validate(inputState);
    if (Object.keys(errorObject).length === 0) {
      const response = await postFoodApi(inputState);
      if (response.ok) {
        setInputErrors({});
        setInputState(defaultInputState);
      } else {
        console.log("error");
      }
    } else {
      setInputErrors(errorObject);
    }
  };

  const handleDeleteBrand = async (data) => {
    const result = await deliteFoodApi(data.id);
    if (result.ok) {
      const updatedBrand = data.filter((el) => {
        return el.id !== data.id;
      });
      setData1(updatedBrand);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {}, []);
  return (
    <>
    
      <div className="container mt-3 fw-bold" id="admin">
    
        <button onClick={handleShow}>Insert a new Dish </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter all fields</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Brand's name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Alfa, Audi, Ferrari ecc.."
                  value={inputState.name}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.name ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="image">
                <Form.Label>Brand's image link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="http//: ..."
                  value={inputState.image}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.image ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.image}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="yearOfFondation">
                <Form.Label>Year of Fondation</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Year"
                  value={inputState.yearOfFondation}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.yearOfFondation ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.yearOfFondation}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

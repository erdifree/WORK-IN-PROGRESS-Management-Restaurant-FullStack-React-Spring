import { postFoodApi, putOrderApi, deliteFoodApi } from "../api";
import { useState, useEffect } from "react";
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const ModalInsert = ({ showModal, closeModal, type }) => {
  console.log(type)
  const defaultInputState = {
    img: "",
    name: "",
    description:"",
    price: "",
    type: "",
  };
  const [inputState, setInputState] = useState(defaultInputState);
  const [show, setShow] = useState(false);
  const [data1, setData1] = useState([]);
  const [inputErrors, setInputErrors] = useState({});

  // Validation  form
  const validate = (inputObject) => {
    const errorObj = {};
    if (inputObject.name === "") {
      errorObj.name = "Brand name is mandatory";
    }
    if (inputObject.image === "") {
      errorObj.image = "Brand image is mandatory";
    }
    if (inputObject.yearOfFondation < 0) {
      errorObj.yearOfFondation =
        " thet lower price of product is  hight then 0 euro";
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

  return (
    <>
      <div className="container mt-3 fw-bold" id="admin">
        <Modal
          show={showModal}
          onHide={() => {
            closeModal();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>{type}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name Dish</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name of Product"
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
              <Form.Group className="mb-3" controlId="img">
                <Form.Label>Pictur of Dish</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="http//: ..."
                  value={inputState.img}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.img ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.img}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  value={inputState.price}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.price ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.price}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={inputState.description}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.description ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.description}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="type">
                <Form.Label>{type}</Form.Label>
                <Form.Control
                  type="text"
                  value={inputState.type}
                  onChange={(e) => {
                    handleInputChange(e.target.id, e.target.value);
                  }}
                  isInvalid={inputErrors.description ? true : false}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrors.description}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  closeModal();
                }}
              >
                Save Product
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

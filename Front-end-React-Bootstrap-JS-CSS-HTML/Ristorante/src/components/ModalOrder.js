import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { BsFillPatchCheckFill, BsClipboardCheck } from "react-icons/bs";
import { updatePayment } from "../api";

export const ModalOrder = ({ getOrder, update }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("Id che mi serveeeeeee", getOrder.id);
  const flag = false;

  function calcoloTotale() {
    let total = 0;
    for (let item of getOrder.drink_id) {
      total += item.price;
    }
    for (let item of getOrder.food_id) {
      total += item.price;
    }
    console.log(total);
    const iva = (total + getOrder.seats * 2) * 0.1;
    return total + getOrder.seats * 2 + iva;
  }

  return (
    <>
      {getOrder.payed === flag ? (
        <>
          <Button variant="primary" onClick={handleShow}>
            <BsClipboardCheck className="text-light" size={"10px"} />
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            className=" d-flex text-center"
          >
            <Modal.Header closeButton>
              <Modal.Title>Riepilogo Ordine Selezionato</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                Id Ordine {getOrder.id} Tavolo:{}
              </div>
              <hr />
              <div> Confermato il: {getOrder.localDate}</div>
              <hr />

              <div>
                Riepilogo Ordinazioni
                <div>
                  Food:
                  {getOrder.food_id.map((element) => {
                    return (
                      <>
                        <div>
                          {element.name} {element.price.toFixed(2)} &euro;
                        </div>
                      </>
                    );
                  })}
                </div>
                <div>
                  Drink:
                  {getOrder.drink_id.map((element) => {
                    return (
                      <>
                        <div>
                          {element.name} Prezo:
                          {element.price.toFixed(2)} &euro;
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <hr />
              <div>Coperti: {getOrder.seats}x 2.00 &euro;</div>
              <div>Iva: 10%</div>
              <hr />
              <div>Stato saldo: {getOrder.payed ? "Pagato" : "Non Pagato"}</div>
              <hr />
              <div>Totale: {calcoloTotale().toFixed(2)}&euro;</div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  update(getOrder.id);
                  handleClose();
                }}
              >
                Confirm Payment
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <>
          <Button variant="primary" onClick={handleShow}>
            <BsClipboardCheck className="text-light" size={"10px"} />
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            className=" d-flex text-center"
          >
            <Modal.Header closeButton>
              <Modal.Title>Riepilogo Ordine Selezionato</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div> Id Ordine {getOrder.id}</div>
              <hr />
              <div> Registrato il: {getOrder.localDate}</div>
              <hr />

              <div> Coperti: {getOrder.seats}</div>
              <hr />
              <div>
                Riepilogo Ordinazioni
                <div>
                  Food:
                  {getOrder.food_id.map((element) => {
                    return (
                      <>
                        <div>
                          {element.name} {element.price.toFixed(2)} &euro;
                        </div>
                      </>
                    );
                  })}
                </div>
                <div>
                  Drink:
                  {getOrder.drink_id.map((element) => {
                    return (
                      <>
                        <div>
                          {element.name} Prezo:
                          {element.price.toFixed(2)} &euro;
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <hr />
              <div>Coperti: {getOrder.seats}x 2.00 &euro;</div>
              <div>Iva: 10%</div>
              <hr />
              <div>Stato saldo: {getOrder.payed ? "Pagato" : "Non Pagato"}</div>
              <hr />
              <div>Totale: {calcoloTotale().toFixed(2)}&euro;</div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();

                  handleClose();
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

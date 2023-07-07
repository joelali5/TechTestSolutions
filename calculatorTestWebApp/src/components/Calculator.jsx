import { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

function Calculator({ modalStyle }) {
  const [start, setStart] = useState(0);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5039/api/calculator/add?start=${start}&amount=${amount}`
      );
      setResult(response.data);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubtract = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5039/api/calculator/subtract?start=${start}&amount=${amount}`
      );
      setResult(response.data);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modalContentStyle = {
    backgroundColor: modalStyle.backgroundColor,
    color: modalStyle.color,
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="start" className="form-label">
            Start
          </label>
          <input
            type="number"
            className="form-control"
            id="start"
            aria-describedby="emailHelp"
            onChange={(event) => setStart(parseInt(event.target.value))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            onChange={(event) => setAmount(parseInt(event.target.value))}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary add-btn" onClick={handleAdd}>
            Add
          </button>
          <button
            type="submit"
            className="btn btn-secondary ml-1"
            onClick={handleSubtract}
          >
            Subtract
          </button>
        </div>
      </form>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton style={modalContentStyle}>
          <Modal.Title>Calculator Result</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalContentStyle}>Result: {result}</Modal.Body>
        <Modal.Footer style={modalContentStyle}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Calculator;

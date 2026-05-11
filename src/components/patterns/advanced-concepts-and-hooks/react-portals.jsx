import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

function ReactPortals() {
  const [show, setShow] = useState(false);

  return (
    <div 
    onClickCapture={() => {
        console.log('Outer div');
    }}
    style={{ position: "absolute", marginTop: "200px" }}>
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show.
        <br />
        Click it to close.
      </Alert>
    </div>
  );
}

const AlertContent = styled.div`
    position: absolute;
    top: 10px;
    left: 50%;
    translate: -50%;
    background-color: aquamarine;
    color: black;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
`;

const Alert = ({ children, onClose, show }) => {
  if (!show) return;

  return createPortal(
    <AlertContent onClickCapture={() => {
        onClose();
        console.log('Inner div');
    }}>
      {children}
    </AlertContent>,
    document.querySelector("#alert-holder")
  );
};

export default ReactPortals;

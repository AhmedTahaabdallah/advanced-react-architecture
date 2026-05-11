import { useState, useRef, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

const TooltipContent = styled.div`
  position: absolute;
  border: 2px solid black;`;

function AppUseLayoutEffect() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    if (buttonRef.current === null || !show) return setTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setTop(bottom + 30);
  }, [show]);

  // const now = performance.now();
  // while (now > performance.now() - 100) {
  //   //Do something
  // }

  return (
    <>
      <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
        Show
      </button>
      {show && (
        <TooltipContent
          style={{
            top: `${top}px`,
          }}
        >
          Some text ...
        </TooltipContent>
      )}
    </>
  );
}

export default AppUseLayoutEffect;

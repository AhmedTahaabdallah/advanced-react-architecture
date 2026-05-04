import { useState } from "react";
import { UncontrolledFlow } from "./uncontrolled-flow";
import { ControlledFlow } from "./controlled-flow";
import { UncontrolledForm } from "./uncontrolled-form";
import { ControlledForm } from "./controlled-form";
import { UncontrolledModal } from "./uncontrolled-modal";
import { ControlledModal } from "./controlled-modal";

const StepOne = ({ next }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next({ name: "TestName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ next }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => next({ age: 30 })}>Next</button>
    </>
  );
};
const StepThree = ({ next }) => {
  return (
    <>
      <h1>Step #3: You qualify!</h1>
      <button onClick={() => next({})}>Next</button>
    </>
  );
};

const StepFour = ({ next }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() => next({ country: "Poland" })}>Next</button>
    </>
  );
};

function AppControlledComponents() {
  // const [shouldDisplay, setShouldDisplay] = useState(false);
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = (dataFromStep) => {
    setData({...data, ...dataFromStep});
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      {/* <UncontrolledForm/> */}

      {/* <ControlledForm/> */}

      {/* <UncontrolledModal>Hi Ahmed</UncontrolledModal> */}

      {/* <ControlledModal
      shouldShow={shouldDisplay}
      close={() => setShouldDisplay(false)}>
        <h3>I am the body of modal!!!</h3>
      </ControlledModal>
      <button
      onClick={() => setShouldDisplay(!shouldDisplay)}
      >
        {shouldDisplay ? 'Hide Modal' : 'Display Modal'}
      </button> */}

      {/* <UncontrolledFlow onDone={data => {
        console.log('data : ', data);
        alert('Final step!!');
      }}>
        <StepOne />
        <StepTwo />
        <StepFour />
      </UncontrolledFlow> */}

      <ControlledFlow 
      currentStepIndex={currentStepIndex} 
      onNext={next}
      onDone={data => {
        console.log('data : ', data);
        alert('Final step!!');
      }}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default AppControlledComponents;

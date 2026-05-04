import React from "react";

export const ControlledFlow = ({
  children,
  onDone,
  currentStepIndex,
  onNext,
}) => {
  const allChildrens = React.Children.toArray(children);

  const next = (data) => {
    if (allChildrens.length !== currentStepIndex + 1) {
      onNext(data);
    } else {
      onDone(data);
    }
  };

  const currentChild = allChildrens[currentStepIndex];
  
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { next });
  }

  return currentChild;
};

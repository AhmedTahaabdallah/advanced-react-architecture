import ParentComponent from "./parent";
import mitt from "mitt";

export const emitter = mitt();

function AppObserverPattern() {
  return (
    <>
      <ParentComponent />
    </>
  );
}

export default AppObserverPattern;

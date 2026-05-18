import Ingredients from "./ingredients";
import IngredientsInfoHelper from "./ingredients-info-helper";

function AppUseCallback() {
  return (
    <>
      <Ingredients ingredientsInfoHelper={<IngredientsInfoHelper />}/>
    </>
  );
}

export default AppUseCallback;

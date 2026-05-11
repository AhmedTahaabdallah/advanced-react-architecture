import { useState } from "react";
import Counter from "./keys-counter";

function Keys() {
  const [changeShirts, setChangeShirts] = useState(false);
  return (
    <div>
      <span>{changeShirts ? 'Shirts' : 'Shoes'} counts: </span> 
      <Counter key={changeShirts ? "shirts" : "shoes"} />{" "}
      
      <br />
      <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
}

export default Keys;

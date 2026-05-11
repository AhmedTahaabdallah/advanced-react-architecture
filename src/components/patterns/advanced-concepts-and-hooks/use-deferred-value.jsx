import { useState, useDeferredValue } from "react";
import { HeavyComponent } from "./use-deferred-value-heavy-component";

function AppUseDeferredValue() {
  const [keyword, setKeyword] = useState("");
  const deferredKeyword = useDeferredValue(keyword);
  return (
    <>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <HeavyComponent keyword={deferredKeyword} />
    </>
  );
}

export default AppUseDeferredValue;

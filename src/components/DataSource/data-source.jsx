import axios from "axios";
import React, { useEffect, useState } from "react";

export const DataSource = ({ resources = {}, children }) => {
  const [resolvedData, setResolvedData] = useState({});

  useEffect(() => {
    const loadResources = async () => {
      const entries = await Promise.all(
        Object.entries(resources).map(async ([key, value]) => {
          if (typeof value === "string" && value.startsWith("/")) {
            const response = await axios.get(value);
            return [key, response.data];
          } else if (typeof value === "function") {
            return [key, await value()];
          }
          return [key, value];
        })
      );

      setResolvedData(Object.fromEntries(entries));
    };

    loadResources();
  }, [resources]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, resolvedData);
        }

        return child;
      })}
    </>
  );
};
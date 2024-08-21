import React, { useEffect } from "react";
import { error } from "console";
import { useState } from "react";

export const Facts = () => {
  const [fact, setFact] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFact(data.fact);
      })
      .catch((error) => console.error(error));
  }, []);

  return <p>{fact}</p>;
};

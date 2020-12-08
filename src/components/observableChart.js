import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "73c68590a6b8ba4c";

function Notebook() {
  const ref = useRef();

  useEffect(() => {
    (new Runtime).module(notebook, name => {
      if (name === "viewof cc") return Inspector.into(ref.current.querySelector(".viewof-cc"))();
      if (name === "share") return Inspector.into(ref.current.querySelector(".share"))();

    });
  }, []);

  return (
    <div ref={ref}>
      <div className="Notebook">
      <div className="share"></div>
        <div className="viewof-cc"></div>
      </div>
    </div>
  );
}

export default Notebook;
import "./styles.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useMachine } from "@xstate/react";
import { appMachine } from "./machine";
function App() {
  const [current, send, service] = useMachine(appMachine);

  React.useEffect(() => {
    console.log(current);
  }, [current]);
  return (
    <div className="App">
      <h1>XState React Template</h1>
      <button
        onClick={() => {
          send("PROFILE", {});
        }}
      >
        XState React Template
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

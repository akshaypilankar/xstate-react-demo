import "./styles.css";
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <h1>XState React Template</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

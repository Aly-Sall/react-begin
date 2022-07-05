import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
const rootElement = document.querySelector("#root");
//const myh4 = React.createElement("h1", null, "hello React");
const Mydiv = () => (
  <div>
    <h4 className="alert alert-success display-4">Hello React</h4>
    <ul type="square">
      <li className="alert alert-warning">2 + 1 </li>
      <li className="alert alert-warning">{1 + "1"}</li>
      <li className="alert alert-warning">{1 + 1}</li>
    </ul>
  </div>
);

ReactDOM.render(<Mydiv />, rootElement);

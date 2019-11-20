import React from "react";
import { render } from "react-dom";

import App from "./views/app/App";

const Root = () => (
  <div>
    <App />
  </div>
);

render(<Root />, document.getElementById("root"));

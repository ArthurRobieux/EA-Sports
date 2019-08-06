import React from "react";
import ReactDOM from "react-dom";
import { initi18n } from "./i18n";

import { App } from "./containers/App";
import * as serviceWorker from "./serviceWorker";

initi18n();

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

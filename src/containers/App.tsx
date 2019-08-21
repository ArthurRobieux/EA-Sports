import React from "react";

import { Page } from "../modules/common-ui";
import { Home } from "../modules/quiz";

import "./styles.css";
// import { EaHeader } from "../modules/quiz/containers/EaHeader";
// import { EaFooter } from "../modules/quiz/containers/EaFooter";

export const App = () => {
  return (
    <>
      {/* <EaHeader /> */}
      <Page>
        <Home />
      </Page>
      <div>
        <div onClick={() => (window.location.href = "/en/")}>en</div>
        <div onClick={() => (window.location.href = "/fr/")}>fr</div>
      </div>
      {/* <EaFooter /> */}
    </>
  );
};

import React from "react";

import { Page } from "../modules/common-ui";
import { Home } from "../modules/quiz";

import "./styles.css";

export const App = () => {
  return (
    <>
      <Page>
        <Home />
      </Page>
    </>
  );
};

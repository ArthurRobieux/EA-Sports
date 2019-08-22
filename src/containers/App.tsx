import React from "react";

import { Page } from "../modules/common-ui";
import { Home } from "../modules/quiz";

import "./styles.css";
import { EaHeader } from "../modules/quiz/containers/EaHeader";
import { FifaHeader } from "../modules/quiz/containers/FifaHeader";
import { EaFooter } from "../modules/quiz/containers/EaFooter";
import { FifaFooter } from "../modules/quiz/containers/FifaFooter";

export const App = () => {
  return (
    <>
      <EaHeader />
      <FifaHeader />
      <Page>
        <Home />
      </Page>
      <FifaFooter />
      <EaFooter />
    </>
  );
};

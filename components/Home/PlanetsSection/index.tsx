import React, { FunctionComponent } from "react";
import s from "./styles";

const PlanetsSection: FunctionComponent = function () {
  return (
    <section {...s.planetSection}>
      <div {...s.containerPlanetSection}>
        <div {...s.containerPlanetSectionBordered}>
          planet
        </div>
      </div>
    </section>
  );
};

export default PlanetsSection;

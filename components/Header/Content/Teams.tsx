import { FunctionComponent } from "react";
import s from "./styles";

const Teams: FunctionComponent = function () {
  return (
    <div {...s.wrapper}>
      <ul {...s.wrapper}>
        <li {...s.item}>temp content</li>
        <li>temp content</li>
        <li>temp content</li>
        <li>temp content</li>
        <li>temp content</li>
      </ul>
    </div>
  );
};

export default Teams;

import { FunctionComponent } from "react";
import s from "./styles";

const Whitepaper: FunctionComponent = function () {
  return (
    <div {...s.wrapper}>
      <ul {...s.wrapper}>
        <li {...s.itemWhitepaper}>some long temp content</li>
        <li {...s.itemWhitepaper}>some images maybe?</li>
        <li {...s.item}>temp content</li>
        <li {...s.item}>temp content</li>
        <li {...s.item}>temp content</li>
      </ul>
    </div>
  );
};

export default Whitepaper;

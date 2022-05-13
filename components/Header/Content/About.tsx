import { FunctionComponent } from "react";
import s from "./styles";

const About: FunctionComponent = function () {
  return (
    <div {...s.wrapper}>
      <ul {...s.wrapper}>
        <li {...s.shortItem}>Lore</li>
        <li {...s.shortItem}>FAQ</li>
        <li {...s.shortItem}>Contact</li>
      </ul>
    </div>
  );
};

export default About;

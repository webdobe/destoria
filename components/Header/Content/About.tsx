import { FunctionComponent } from "react";
import s from "./styles";

const About: FunctionComponent = function () {
  return (
    <div {...s.wrapper}>
      <ul {...s.wrapper}>
        <li {...s.shortItem} onClick={() => window.location.href = '/lore'}>Lore</li>
        <li {...s.shortItem} onClick={() => window.location.href = '/#faq'}>FAQ</li>
        <li {...s.shortItem} onClick={() => window.location.href = '/contact'}>Contact</li>
      </ul>
    </div>
  );
};

export default About;

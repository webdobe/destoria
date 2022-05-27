import { FunctionComponent } from "react";
import s from "./styles";

const Teams: FunctionComponent = function () {
  return (
    <div {...s.wrapper}>
      <ul {...s.wrapperTeam}>
        <li {...s.shortItem} onClick={() => window.location.href = `/team#3`}>Careers</li>
        <li {...s.shortItem}>Collabs</li>
      </ul>
    </div>
  );
};

export default Teams;

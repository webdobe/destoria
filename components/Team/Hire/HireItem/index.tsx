import s from "./styles";
import {
  FunctionComponent,
  useEffect,
  useRef,
  useMemo,
  useState,
  useCallback,
} from "react";
import Image from "next/image";
import Faqbox from "./FaqBox";
import NavigationTabs from "components/NavigationTabs";

interface IHireItem {
    position: {
        name: string;
        field: string;
      id: number;
      real: boolean;
    }
}

const HireItem: FunctionComponent<IHireItem> = function ({position}) {
  return (
    <div {...position.real ? {...s.hireItem} : {...s.hireBlurred}}>
      <div {...s.hireDescription}>
        <div {...s.positionName}>{position.name}</div>
        <div>{ position.field}</div>
      </div>
      <div {...s.hireNav} onClick={() => position.real && (window.location.href = `/team/careers/${position.id}`)}>
        <Image
          src="/hire-forward.svg"
          alt="Forward"
          width={27.75}
          height={27.75}
        />
      </div>
    </div>
  );
};s

export default HireItem
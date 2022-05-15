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
    }
}

const HireItem: FunctionComponent<IHireItem> = function ({position}) {
  return (
    <div {...s.hireItem}>
      <div {...s.hireDescription}>
        <div {...s.positionName}>{position.name}</div>
        <div>{ position.field}</div>
      </div>
      <div {...s.hireNav}>
        <Image
          src="/hire-forward.svg"
          alt="Forward"
          width={27.75}
          height={27.75}
        />
      </div>
    </div>
  );
};

export default HireItem
import {
  FunctionComponent,
  useEffect,
  useRef,
  useMemo,
  useState,
  useCallback,
  Dispatch,
} from "react";
import s from "./styles";

interface INavigationTabs {
  options: string[];
  setTab: Dispatch<React.SetStateAction<number>>;
  currentTab: number;
}

const NavigationTabs: FunctionComponent<INavigationTabs> = function ({
  options,
  setTab,
  currentTab
}) {

  const getStyle = (tab) => {
    let style = {};
    if (currentTab === tab) {
      style.color = '#050D1D';
      style.backgroundColor = '#F0F0F0';
    }
    return style;
  }

  return (
    <>
      <div {...s.tabs}>
        <div {...s.tabButtonFirst} onClick={() => setTab(0)} >
          <div {...s.tabButtonInnerFirst} style={getStyle(0)}>
          {options[0]}
          </div>
        </div>
        <div {...s.tabButton} onClick={() => setTab(1)}>
          <div {...s.tabButtonInner} style={getStyle(1)}>
          {options[1]}
          </div>
        </div>
        <div {...s.tabButton} onClick={() => setTab(2)}>
          <div {...s.tabButtonInner} style={getStyle(2)}>
          {options[2]}
          </div>
        </div>
        <div {...s.tabButtonLast} onClick={() => setTab(3)}>
          <div {...s.tabButtonInnerLast} style={getStyle(3)}>
          {options[3]}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationTabs;

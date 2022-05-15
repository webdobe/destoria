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
  return (
    <>
      <div {...s.tabs}>
        <div {...s.tabButtonFirst} onClick={() => setTab(0)} >
          <div {...s.tabButtonInnerFirst} style={{color: currentTab === 0 ? '#050D1D' : '', backgroundColor: currentTab === 0 ? '#F0F0F0' : ''}}>
          {options[0]}
          </div>
        </div>
        <div {...s.tabButton} onClick={() => setTab(1)}>
          <div {...s.tabButtonInner} style={{color: currentTab === 1 ? '#050D1D' : '', backgroundColor: currentTab === 1 ? '#F0F0F0' : ''}}>
          {options[1]}
          </div>
        </div>
        <div {...s.tabButton} onClick={() => setTab(2)}>
          <div {...s.tabButtonInner} style={{color: currentTab === 2 ? '#050D1D' : '', backgroundColor: currentTab === 2 ? '#F0F0F0' : ''}}>
          {options[2]}
          </div>
        </div>
        <div {...s.tabButtonLast} onClick={() => setTab(3)}>
          <div {...s.tabButtonInnerLast} style={{color: currentTab === 3 ? '#050D1D' : '', backgroundColor: currentTab === 3 ? '#F0F0F0' : ''}}>
          {options[3]}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationTabs;

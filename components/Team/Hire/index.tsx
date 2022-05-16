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
import NavigationTabs from "components/NavigationTabs";
import HireItem from 'components/Team/Hire/HireItem'
import Engineering from "jobs/engineering";
import Design from "jobs/design";
import Others from "jobs/others";
import Marketing from "jobs/marketing";

const orderTabs = ["Design", "Engineering", "Marketing", "Others"]
const selectTabs = {
  Design: Design,
  Engineering: Engineering,
  Marketing: Marketing,
  Others: Others,
}

const Hire: FunctionComponent = function () {
  const [currentTab, setCurrentTab] = useState(0);
  const containerRef = useRef(null);
  const current = selectTabs[orderTabs[currentTab]]
  
  return (
    <section {...s.faq}>
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div {...s.containerFaq} style={{ maxWidth: "1440px", width: "100%" }}>
          <div {...s.containerFaqBordered}>
            <div {...s.faqContent}>
              <h3 {...s.titleContent}>Want to be part of the team?</h3>
              We are looking for creative and visionary people who share our
              love of gaming, creating, and making a difference in the world.
            </div>
            <div>
              <NavigationTabs
                options={orderTabs}
                setTab={setCurrentTab}
                currentTab={currentTab}
              />
            </div>
            <div {...s.hireList}>
              {current.map(profession => {
                return (
                  <HireItem key={profession.id} position={profession} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hire;

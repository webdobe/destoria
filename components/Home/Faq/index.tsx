import s from "./styles";
import { FunctionComponent, useEffect, useRef, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import Faqbox from './FaqBox'
const Faq: FunctionComponent = function () {
  const containerRef = useRef(null)
  const [selected, setSelected] = useState(-1)
  const handleSelect = useCallback((index) => {
    if (index === selected) return setSelected(-1)
    if (index === -1) return setSelected(index)
    setSelected(-1)
    setTimeout(() => {
      setSelected(index)
    }, 400);
  }, [selected, setSelected])
  return (
    <section {...s.faq} ref={containerRef} id="faq">
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div
          {...s.containerFaq}
          style={{ maxWidth: "1440px", width: "100%"}}
        >
          <div {...s.containerFaqBordered}>
            <div {...s.faqContent}>
              <Faqbox handleSelect={ () => handleSelect(0) } selected={selected === 0}/>
              <Faqbox handleSelect={ () => handleSelect(1) } selected={selected === 1}/>
              <Faqbox handleSelect={ () => handleSelect(2) } selected={selected === 2}/>
              <Faqbox handleSelect={ () => handleSelect(3) } selected={selected === 3}/>
              <Faqbox handleSelect={ () => handleSelect(4) } selected={selected === 4}/>
              <Faqbox handleSelect={ () => handleSelect(5) } selected={selected === 5}/>
              <Faqbox handleSelect={ () => handleSelect(6) } selected={selected === 6}/>
              <Faqbox handleSelect={ () => handleSelect(7) } selected={selected === 7}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;

//garagem 412

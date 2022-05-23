import s from "./styles";
import { FunctionComponent, useEffect, useRef, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import Faqbox from './FaqBox'
import FaqContent from './content'

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
    <section {...s.faq} ref={containerRef} id="3">
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div
          {...s.containerFaq}
          style={{ maxWidth: "1440px", width: "100%"}}
        >
          <div {...s.containerFaqBordered}>
            <div {...s.faqContent}>
              {FaqContent.map((item, index) => {
                return (
                  <Faqbox key={index} handleSelect={() => handleSelect(index)} selected={selected === index} q={item.q} a={item.a}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;

//garagem 412

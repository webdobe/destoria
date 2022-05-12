import s from "./styles";
import { FunctionComponent, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Faqbox from './FaqBox'
const Faq: FunctionComponent = function () {
  const containerRef = useRef(null)


  return (
    <section {...s.faq} ref={containerRef}>
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div
          {...s.containerFaq}
          style={{ maxWidth: "1440px", width: "100%"}}
        >
          <div {...s.containerFaqBordered}>
            <div {...s.faqContent}>
              <Faqbox />
              <Faqbox />
              <Faqbox />
              <Faqbox />
              <Faqbox />
              <Faqbox />
              <Faqbox />
              <Faqbox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;

//garagem 412

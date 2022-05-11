import s from "./styles";
import { FunctionComponent, useEffect, useRef, useMemo } from "react";

const FaqBox: FunctionComponent = function () {
  const containerRef = useRef(null);

  return (
    <div {...s.faqBox}>
      <div {...s.titleBox}>
        <div {...s.leftBox}>
          Some question
        </div>
        <div {...s.rightBox}>
          <div {...s.topBox}>

          </div>
          <div {...s.bottomBox}>
            <div {...s.bottomInsideBox}>
              
            </div>
          </div>
        </div>
      </div>
      <div {...s.titleAnswer}>

      </div>
    </div>
  );
};
export default FaqBox;

//garagem 412

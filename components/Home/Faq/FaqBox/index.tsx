import s from "./styles";
import { FunctionComponent, useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
const FaqBox: FunctionComponent = function ({ isOpen }) {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div {...s.faqBox} data-open={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div {...s.titleBox}>
        <div {...s.leftBox}>
          <p style={{ width: "calc(100% - 30px)" }}>Some question</p>
          <div {...s.dropdownImage}>
            <Image
              src="/dropdown-arrow.svg"
              alt="Dropdown"
              width={20}
              height={10}
            />
          </div>
        </div>
        <div {...s.rightBox}>
          <div {...s.topBox}></div>
          <div {...s.bottomBox}>
            <div {...s.bottomInsideBox}></div>
          </div>
        </div>
      </div>
      <div {...s.answerBox}>
        <div {...s.offsetTopBox}></div>
        <div {...s.answerTextBox}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
        </div>
        {/* <div {...s.answerRightBox}>
          <div {...s.answerTopBox}></div>
          <div {...s.answerBottomBox}>
            <div {...s.answerBottomInsideBox}></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default FaqBox;

//garagem 412

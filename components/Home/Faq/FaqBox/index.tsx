import s from "./styles";
import { FunctionComponent, useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";


const FaqBox: FunctionComponent = function ({ handleSelect, selected, q, a }) {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div {...s.faqBox}
      data-open={selected}
      onClick={() => {
        console.log(containerRef.current.offsetHeight + 82)
        handleSelect()
      }}
      animate={{
        height: selected ? containerRef.current.offsetHeight + 82 +  "px" : '50px',
      }}

    >
      <div {...s.titleBox}>
        <div {...s.leftBox}>
          <p style={{ width: "calc(100% - 30px)", lineHeight: '15px' }}>{q}</p>
          <div {...s.dropdownImage}>
            <Image
              src="/dropdown-arrow.svg"
              alt="Dropdown"
              width={20}
              height={10}
            />
          </div>
        </div>
        <motion.div
          {...s.rightBox}

        >
          <div {...s.topBox}></div>
          <div {...s.bottomBox}>
            <div {...s.bottomInsideBox}></div>
          </div>
        </motion.div>
      </div>
      <div {...s.answerBox}>
        <div {...s.offsetTopBox}></div>
        <div {...a.length > 250 ? { ...s.answerTextBox } : { ...s.answerTextBox }} >
          <p ref={containerRef}>
            {a}

          </p>
        </div>
        {/* <div {...s.answerRightBox}>
          <div {...s.answerTopBox}></div>
          <div {...s.answerBottomBox}>
            <div {...s.answerBottomInsideBox}></div>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};
export default FaqBox;

//garagem 412

import s from "./styles";
import { FunctionComponent, useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";

const FaqBox: FunctionComponent = function ({ handleSelect, selected, q, a }) {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      {...s.faqBox}
      data-open={selected}
      onClick={() => {
        handleSelect();
      }}
      animate={{
        height: selected
          ? containerRef.current.offsetHeight + 82 + "px"
          : "50px",
      }}
    >
      <div {...s.titleBox}>
        <div {...s.leftBox}>
          <p style={{ width: "calc(100% - 30px)", lineHeight: "15px" }}>{q}</p>
          <div {...s.dropdownImage}>
            <motion.div
              initial={false}
              animate={{ rotate: selected ? 180 : 0, y: selected ? 0 : 0 }}
            >
              <Image
                src="/dropdown-arrow.svg"
                alt="Dropdown"
                width={20}
                height={10}
              />
            </motion.div>
          </div>
        </div>
        <motion.div {...s.rightBox}>
          <div {...s.topBox}></div>
          <div {...s.bottomBox}>
            <div {...s.bottomInsideBox}></div>
          </div>
        </motion.div>
      </div>
      <div {...s.answerBox}>
        <div {...s.offsetTopBox}></div>
        <div
          {...(a.length > 250
            ? { ...s.answerTextBox }
            : { ...s.answerTextBox })}
        >
          <p ref={containerRef}>{a}</p>
        </div>
      </div>
    </motion.div>
  );
};
export default FaqBox;

//garagem 412

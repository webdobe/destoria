import s from "./styles";
import { useEffect, useState, FunctionComponent } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
const colorOutput = ["#f00", "#fff", "#0f0"]

const Followup: FunctionComponent = function () {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange);
  const [currentView, setCurrentView] = useState(0);
  const [currentY, setCurrentY] = useState(0)

  return (
    <div
      {...s.container}
      onClick={() => console.log(pathLength)}
      style={{opacity: 0, pointerEvents: 'none'}}
    >
      <motion.p
        style={{
         height: pathLength
        }}
      >
        About
      </motion.p>
      <motion.p>Upcoming</motion.p>
      <motion.p>Classes</motion.p>
      <motion.p>Roadmap</motion.p>
      <motion.p>Game Specs</motion.p>
      <motion.p>Partners</motion.p>
      <motion.p>FAQ</motion.p>
    </div>
  );
};

export default Followup;

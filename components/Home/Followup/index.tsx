import s from "./styles";
import { useEffect, useState, FunctionComponent } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

const Followup: FunctionComponent = function () {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  const [currentView, setCurrentView] = useState(0)
  useEffect(() => yRange.onChange(v => {
    console.log(v)
    setIsComplete(v >= 1)
  }, [yRange]));


  return (
    <div className="sticky top-10 bg-red z-50">
      <p>{JSON.stringify(pathLength)}</p>
      <p>{JSON.stringify(yRange)}</p>
      <p>{JSON.stringify(scrollYProgress)}</p>
    </div>
  );
};

export default Followup;

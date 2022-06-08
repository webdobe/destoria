import s from "./styles";
import { useEffect, useState, useRef, FunctionComponent } from "react";
import { gsap } from "gsap";
import styled from "@emotion/styled";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Followup: FunctionComponent = (props) => {
  const {sectionRefs} = props;
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress, scrollXProgress, scrollY } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange);
  const [currentView, setCurrentView] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
      let link = revealRefs.current[index];
      //console.log(el.getAttribute("data-trigger"));
      gsap.to(link, {
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          toggleClass: {targets: link, className: "active"},
          start: "top center",
          end: "bottom center",
          //markers: true,
        }
      });

    });
  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <List
      {...s.container}
      onClick={() => console.log(pathLength)}
    >
      <ListItem ref={addToRefs} data-trigger="about">About</ListItem>
      <ListItem ref={addToRefs} data-trigger="upcoming">Upcoming</ListItem>
      <ListItem ref={addToRefs} data-trigger="classes">Classes</ListItem>
      <ListItem ref={addToRefs} data-trigger="roadmap">Roadmap</ListItem>
      <ListItem ref={addToRefs} data-trigger="game-specs">Game Specs</ListItem>
      <ListItem ref={addToRefs} data-trigger="gallery">Gallery</ListItem>
      <ListItem ref={addToRefs} data-trigger="faq">FAQ</ListItem>
    </List>
  );
};

export default Followup;

const List = styled(motion.ul)`
  width: 100%;
  max-width: 1400px;
  left: 50%;
  top: 50%;
  justify-content: center;
  transform: translate(-50%, -50%);
  padding-left: 2rem;
  pointer-events: none;
`

const ListItem = styled(motion.li)`
  font-family: 'Chakra Petch';
  pointer-events: all;
  padding: 8px 5px;
  color: #F8F8F8;
  font-variant: small-caps;
  mix-blend-mode: normal;
  font-size: 18px;
  line-height: 23px;
  font-style: normal;
  
  &.active {
    font-weight: 700;
    color: #F83600;
  }
`
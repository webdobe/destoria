import s from "./styles";
import { useEffect, useState, useRef, FunctionComponent } from "react";
import Link from "next/link";
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
  const linkRefs = useRef([]);
  const [sections, setSections] = useState([]);
  linkRefs.current = [];

  useEffect(() => {
    if (sections.length === sectionRefs.current.length) {
      sectionRefs.current.forEach((el, index) => {
        let link = linkRefs.current[index];
        if (link) {
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
        }
      });
    } else {
      let elements = [];
      sectionRefs.current.forEach((el) => {
        if (el && !sections.includes(el)) {
          elements.push(el);
        }
      });
      setSections(elements);
    }
  }, [sections]);

  const addToRefs = el => {
    if (el && !linkRefs.current.includes(el)) {
      linkRefs.current.push(el);
    }
  };

  return (
    <List {...s.container}>
      {sections.length && sections.map((el) => {
        const label = el.getAttribute("data-label");
        const id = el.getAttribute("id");
        return (
          <ListItem key={id} ref={addToRefs}>
            <Link href={`#${id}`}>{label}</Link>
          </ListItem>
        );
      })}
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
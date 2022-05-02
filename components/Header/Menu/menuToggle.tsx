import * as React from "react";
import { motion } from "framer-motion";
import s from "./styles";

const Path = props => (
  <motion.path
    fill={props.fill}
    strokeWidth="3"
    stroke={props.fill}
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} {...s.navBurger}>
    <svg width="60" height="36" viewBox="0 0 23 23" fill="#F83600">
      <Path
        fill="#F83600"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        fill="#F83600"
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        fill="#F83600"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

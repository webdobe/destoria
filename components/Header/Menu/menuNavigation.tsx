import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";
import s from "./styles";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.0 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} {...s.navUl}>
      <MenuItem link={"none"}>Connect Wallet</MenuItem>
    <MenuItem link={"mint"}>Mint</MenuItem>
      <MenuItem link={"mint"}>3D Mint</MenuItem>
      <MenuItem link={"mint"}>Free Mint</MenuItem>
      <MenuItem link={""}>About</MenuItem>
      <MenuItem link={"lore"}>Lore</MenuItem>
      <MenuItem link={"contact"}>Contact</MenuItem>
      <MenuItem link={"contact"}>Collabs</MenuItem>
      <MenuItem link={"team#3"}>Careers</MenuItem>
    <MenuItem link={"#3"}>FAQ</MenuItem>
  </motion.ul>
);


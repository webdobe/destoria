import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "contexts/Dropdown";
import s from "./styles";
function DropdownSection({ option }) {
  const { updateOptionProps, cachedId } = useContext(Context);

  const { id, optionDimensions, contentDimensions, optionCenterX } = option;

  const contentWidth = contentDimensions?.width || 0;
  const x = (optionCenterX - contentWidth / 2) - 20;

  const isActive = cachedId === id;

  return (
    <motion.div
      {...s.dropdownSection}
      initial={{
        x,
      }}
      animate={{
        x,
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? "unset" : "none",
      }}
      transition={{
        ease: "easeOut",
        opacity: { duration: 0.45 }
      }}
    >
      <option.WrappedContent />
    </motion.div>
  );
}

export default DropdownSection;

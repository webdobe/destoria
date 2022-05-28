import React, { useContext, useMemo, useState } from "react";
import s from "./styles";
import { Context } from "contexts/Dropdown";
import { motion } from "framer-motion";
import DropdownSection from "./dropdownSection";

const refDuration = 0.22;
function DropdownRoot() {
  const { options, cachedId, getOptionById, targetId } = useContext(Context);

  const cachedOption = useMemo(
    () => getOptionById(cachedId),
    [cachedId, getOptionById]
  );

  let [width, height, x] = [0, 0, 0];

  if (cachedOption) {
    const { optionCenterX, contentDimensions } = cachedOption;
    width = contentDimensions?.width;
    height = contentDimensions?.height;
    x = optionCenterX - width / 2 - (targetId == 1 ? 35 : targetId == 2 ? 35 : targetId == 4 ? 30 : targetId == 5 ? 20 :targetId == 6 ? 35 : targetId == 8 ? 30 : targetId == 35 ? 30 : 20);
  }

  const [hovering, setHovering] = useState(false);

  const isActive = targetId !== null || hovering;

  const [hasInteracted, setHasInteracted] = useState(false);
  const isFirstInteraction = isActive && !hasInteracted;
  return (
    <div>
      <motion.div {...s.dropdownRoot}
        animate={{
          opacity: isActive ? 1 : 0,
          rotateX: isActive ? 0 : -15,
        }}
        transition={{
          opacity: { duration: refDuration, delay: 0.00 },
          rotateX: { duration: refDuration, delay: 0.00 },
        }}
      >
        <motion.div
          {...s.dropdownContainer}
          animate={{
            x,
            width,
            height,
            pointerEvents: isActive ? "unset" : "none",
          }}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
          transition={{
            ease: "easeOut",
            x: -x,
            width: { duration: isFirstInteraction ? 0 : refDuration * 0.93 },
            height: { duration: isFirstInteraction ? 0 : refDuration * 0.93 },
            pointerEvents: { delay: 0.00 },
          }}
          >
          <DropdownBackground />
          <motion.div
            animate={{
              x: -x,
            }}
          >
            {options.map((item) => (
              <DropdownSection key={item.id} option={item} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function DropdownBackground() {
  const { cachedId, getOptionById } = useContext(Context);

  const cachedOption = useMemo(() => getOptionById(cachedId), [
    cachedId,
    getOptionById,
  ]);

  const backgroundHeight = cachedOption?.backgroundHeight || 0;
  const backgroundWidth = cachedOption?.backgroundWidth || 200;

  return (
    <motion.div
      {...s.background}
      animate={{
        height: backgroundHeight,
        width: backgroundWidth
      }}
      transition={{
        ease: 'easeOut',
        duration: refDuration,
      }}
    />
  );
}

export default DropdownRoot;

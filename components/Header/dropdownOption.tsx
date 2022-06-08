import React, { useRef, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import s from "./styles";
import { motion } from "framer-motion";
import { useDimensions } from "hooks/useDimensions";
import { Context } from "contexts/Dropdown";
import Image from "next/image";

let lastOptionId = 0;

export function DropdownOption({
  name,
  content: Content,
  backgroundHeight,
  backgroundWidth,
}) {
  const router = useRouter();
  const idRef = useRef(++lastOptionId);
  const id = idRef.current;

  const [optionHook, optionDimensions] = useDimensions();
  const [registered, setRegistered] = useState(false);
  const {
    registerOption,
    updateOptionProps,
    deleteOptionById,
    setTargetId,
    targetId,
    cachedId,
    setCachedId,
  } = useContext(Context);

  const isBlackDropDown = ['/team', '/lore', '/mint'].includes(router.pathname);

  useEffect(() => {
    if (!registered && optionDimensions) {
      const WrappedContent = () => {
        const contentRef = useRef<HTMLDivElement>();

        useEffect(() => {
          const contentDimensions =
            contentRef.current && contentRef.current.getBoundingClientRect();
          updateOptionProps(id, { contentDimensions });
        }, []);

        return (
          <div ref={contentRef}>
            <Content />
          </div>
        );
      };

      registerOption({
        id,
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
        WrappedContent,
        backgroundHeight,
        backgroundWidth,
      });

      setRegistered(true);
    } else if (registered && optionDimensions) {
      updateOptionProps(id, {
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
      });
    }
  }, [
    registerOption,
    id,
    registered,
    optionDimensions,
    updateOptionProps,
    deleteOptionById,
    backgroundHeight,
    backgroundWidth,
  ]);

  const handleOpen = () => setTargetId(id);
  const handleClose = () => setTargetId(null);
  const handleOpenContent = () => setCachedId(id);
  const handleCloseContent = () => setCachedId(null);
  const handleTouch = () => (window.isMobile = true);

  const handleClick = (e) => {
    e.preventDefault();

    return targetId === id ? handleClose() : handleOpen();
  };

  const isOpened = () =>
    (targetId && targetId === id) || (cachedId && cachedId === id);

  return (
    <motion.li
      {...s.navLi}
      ref={optionHook}
      onMouseDown={handleClick}
      onHoverStart={() => !window.isMobile && handleOpen()}
      onHoverEnd={() => !window.isMobile && handleClose()}
      onTouchStart={handleTouch}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      <div
        className={`flex flex-col align-middle justify-center relative ${
          (name === "Marketplace" || name == "Whitepaper") && "opacity-60"
        }`}
        onClick={() => {
          if (name === "About" || name == "Whitepaper" || name == "Marketplace")
            return false;
          window.location.href = `/${name.toLowerCase()}`;
        }}
      >
        {name}
        <div className="absolute top-full leading-none -mt-1">
          <motion.div
            initial={false}
            animate={isOpened() ? { rotate: 180, y: 5 } : { rotate: 0, y: 0 }}
          >
            <Image
              src="/arrow-dropdown.svg"
              alt="Dropdown"
              width={16}
              height={8}
            />
          </motion.div>
        </div>
        {isOpened() && (
          <motion.div
            className={classNames(
              s.dropdownContainer.className,
              s.background.className,
              isBlackDropDown ? 'bg-black-border' : ''
            )}
            initial={{
              translateY: "-1rem",
              opacity: 0,
            }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onHoverStart={() => !window.isMobile && handleOpenContent()}
            onHoverEnd={() => !window.isMobile && handleCloseContent()}
          >
            <Content />
          </motion.div>
        )}
      </div>
    </motion.li>
  );
}

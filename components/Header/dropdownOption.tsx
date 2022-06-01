import React, { useRef, useState, useContext, useEffect } from 'react';
import classNames from 'classnames';
import s from './styles';
import { motion, m } from 'framer-motion';
import { useDimensions } from 'hooks/useDimensions';
import { Context } from 'contexts/Dropdown';
import Image from 'next/image';

let lastOptionId = 0;

export function DropdownOption({
  name,
  content: Content,
  backgroundHeight,
  backgroundWidth,
}) {
  const idRef = useRef(++lastOptionId);
  const id = idRef.current;

  const [optionHook, optionDimensions] = useDimensions();
  const [registered, setRegistered] = useState(false);
  const [open, setOpen] = useState(false);
  const {
    registerOption,
    updateOptionProps,
    deleteOptionById,
    setTargetId,
    targetId,
  } = useContext(Context);

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

  const handleOpen = () => (setOpen(true), setTargetId(id));
  const handleClose = () => (setOpen(false), setTargetId(null));
  const handleTouch = () => (window.isMobile = true);

  const handleClick = (e) => {
    e.preventDefault();

    return targetId === id ? handleClose() : handleOpen();
  };

  console.log('targetId = ', targetId, 'id =', id);

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
          (name === 'Marketplace' || name == 'Whitepaper') && 'opacity-60'
        }`}
        onClick={() => {
          if (name === 'About' || name == 'Whitepaper' || name == 'Marketplace')
            return false;
          window.location.href = `/${name.toLowerCase()}`;
        }}
      >
        {name}
        <div className="absolute top-full leading-none -mt-1">
          <motion.div
            initial={false}
            animate={{ rotate: open ? 180 : 0, y: open ? 5 : 0 }}
          >
            <Image
              src="/arrow-dropdown.svg"
              alt="Dropdown"
              width={16}
              height={8}
            />
          </motion.div>
        </div>
        <motion.div
          className={classNames(
            s.dropdownContainer.className,
            s.background.className
          )}
          initial={{
            translateY: '-1rem',
            opacity: 0
          }}
          animate={{ translateY: open ? 0 : '-1rem', opacity: open ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <Content />
        </motion.div>
      </div>
    </motion.li>
  );
}

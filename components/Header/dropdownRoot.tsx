import React, {useContext, useMemo} from "react";
import s from './styles'
import { Context } from 'contexts/Dropdown'
import { motion } from 'framer-motion'
import DropdownSection from './dropdownSection'

function DropdownRoot() {
  const { options } = useContext(Context)

  return (
    <div {...s.dropdownRoot}>
      <motion.div
        {...s.dropdownContainer}
      >
        <div>
          {options.map(item => <DropdownSection key={item.id} option={item} />)}
        </div>
      </motion.div>
    </div>
  );
}

export default DropdownRoot;

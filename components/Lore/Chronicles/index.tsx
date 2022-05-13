import s from "./styles";
import { FunctionComponent, useEffect, useRef, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import Faqbox from './FaqBox'

const Lore: FunctionComponent = function () {
  const containerRef = useRef(null)
  return (
    <section {...s.lore} style={{ maxWidth: "1440px", width: "100%" }}>
      <div {...s.loreContent}>
          The chronicles of destoria
      </div>
    </section>
  );
};
export default Lore;

//garagem 412

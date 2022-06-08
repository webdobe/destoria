import s from "./styles";
import {
  FunctionComponent,
  useEffect,
  useRef,
  useMemo,
  useState,
  useCallback,
} from "react";
import Image from "next/image";
import Link from "next/link";
const MintDescription: FunctionComponent = function () {
  return (
    <section
      {...s.mintDescription}
      style={{ maxWidth: "1440px", width: "100%" }}
    >
      <div {...s.photoLayer}></div>
      <div {...s.mintDescriptionContent}>
        <div {...s.mintDescriptionTitle}>
          This isn’t just a free PFP. This is a meta-pass into the Destoria
          ecosystem!
        </div>
        <div {...s.mintDescriptionBox}>
          <div {...s.gridForm}>
            <div {...s.gridInside}>
              <ul {...s.gridUl}>
                <li {...s.specialItemTwo}>Free mint for 3D project.</li>
                <li {...s.listLitem}>Loot box air drops for free mint.</li>
                <li {...s.listLitem}>
                  Anyone who mints a B.O.P. gets a chance at finding a another
                  one of Sebby’s keys.
                </li>
                <li {...s.listLitem}>Holders can enter in 3D character giveaways.</li>
                <li {...s.listLitem}>
                  Animal and a character holder receives free plot in special
                  metaverse section.
                </li>
                <li {...s.specialItemOne}>
                  Animals get their own p2e mini game in a special metaverse as
                  well.
                </li>
              </ul>
            </div>
            <div {...s.gridInside}>
              <ul {...s.gridUl}>
                <li {...s.specialItemTwo}>Animal and character holder gets presale stori token.</li>
                <li {...s.listLitem}>Staking multiplier.</li>
                <li {...s.listLitem}>
                Merch drop.
                </li>
                <li {...s.listLitem}>Holders can enter in 3D character giveaways.</li>
                <li {...s.listLitem}>
                MMORPG loot box airdropped With B.O.P. summoning capability.
                </li>
                <li {...s.listLitem}>
                Animal has B.O.P. storage capabilities within the metaverse.
                </li>
                <li {...s.listLitem}>
                Battle royale skins airdrop.
                </li>
              </ul>
            </div>
          </div>
          <span className="hidden md:block">
            <Image
              src="/mint-monsters.png"
              width={960}
              height={446}
              alt="DESTORIA-Feral"
            />
          </span>
          <span className="block md:hidden pt-10">
            <Image
              src="/mint-monsters-mb.png"
              width={390}
              height={505}
              alt="DESTORIA-Feral"
            />
          </span>
        </div>
      </div>
    </section>
  );
};
export default MintDescription;

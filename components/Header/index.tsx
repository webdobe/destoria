import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";
import { DropdownOption } from "./dropdownOption";
import Teams from "./Content/Teams";
import About from "./Content/About";
import Marketplace from "./Content/Marketplace";
import Mint from "./Content/Mint";
import Whitepaper from "./Content/Whitepaper";
import DropdownRoot from "./dropdownRoot";
import { DropdownProvider } from "contexts/Dropdown";
import { motion, useCycle } from "framer-motion";
import { useMobileDimensions } from "hooks/useMobileDimensions";
import { Navigation } from "./Menu/menuNavigation";
import { MenuToggle } from "./Menu/menuToggle";
import { useRef } from "react";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 230px 45px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


const Header: FunctionComponent = function () {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useMobileDimensions(containerRef);


  return (
    <header style={{ maxWidth: "1440px" }} {...s.header}>
      <DropdownProvider>
        <h1 {...s.pageName}>Destoria</h1>
        <h2 {...s.pageDescription}>Explore the Metaverse</h2>
        <div {...s.container}>
          <div {...s.logo} onClick={() => window.location.href = `/`}>
            <div className="absolute top-5">
            <Image
              src="/destoria.svg"
              alt="Destoria"
              width={47}
              height={42}
              {...s.logoImage}
            />
            </div>
          </div>
          <div {...s.navBox}>
            <nav {...s.nav}>
              <ul {...s.navUl}>
              <DropdownOption
                  name="About"
                  content={About}
                  backgroundHeight={140}
                  backgroundWidth={125}
                />
                <DropdownOption
                  name="Whitepaper"
                  content={Whitepaper}
                  backgroundHeight={195}
                  backgroundWidth={160}
                />
                <DropdownOption
                  name="Team"
                  content={Teams}
                  backgroundHeight={140}
                  backgroundWidth={125}
                />
                <DropdownOption
                  name="Marketplace"
                  content={Marketplace}
                  backgroundHeight={195}
                  backgroundWidth={160}
                />
                <DropdownOption
                  name="Mint"
                  content={Mint}
                  backgroundHeight={135}
                  backgroundWidth={105}
                />
              </ul>
            </nav>

            <div {...s.connectWallet}>
              <span
                {...s.connectWalletText}
                style={{
                  whiteSpace: "nowrap",
                  position: "relative",
                  left: "25px",
                }}
              >
                Connect Wallet
              </span>
              <img
                {...s.connectWalletImage}
                src="/connect-wallet.svg"
                alt="Burger Menu"
                width={200}
                height={45}
              />
            </div>
          </div>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            {...s.navMenu}
          >
            <motion.div
              {...s.menuBackground}
              variants={sidebar}
              style={{
                pointerEvents: isOpen ? "none" : "unset",
              }}
            />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} {...s.navBurger}/>
          </motion.nav>
        </div>
        <DropdownRoot />
      </DropdownProvider>
    </header>
  );
};

export default Header;

import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";
import { DropdownOption } from "./dropdown";
import Teams from "./Content/Teams";
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
          <div {...s.logo}>
            <Image
              src="/destoria.svg"
              alt="Burger Menu"
              width={47}
              height={42}
              {...s.logoImage}
            />
          </div>
          <div {...s.navBox}>
            <nav {...s.nav}>
              <ul {...s.navUl}>
                <DropdownOption
                  name="Whitepaper"
                  content={Whitepaper}
                  backgroundHeight={160}
                  backgroundWidth={380}
                />
                <DropdownOption
                  name="Marketplace"
                  content={Teams}
                  backgroundHeight={160}
                  backgroundWidth={185}
                />
                <DropdownOption
                  name="About"
                  content={Teams}
                  backgroundHeight={250}
                  backgroundWidth={185}
                />
                <DropdownOption
                  name="Team"
                  content={Teams}
                  backgroundHeight={220}
                  backgroundWidth={185}
                />
                <DropdownOption
                  name="Mint"
                  content={Teams}
                  backgroundHeight={220}
                  backgroundWidth={185}
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
              <Image
                {...s.connectWalletImage}
                src="/connect-wallet.svg"
                alt="Burger Menu"
                width={200}
                height={45}
                style={{ position: "absolute" }}
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

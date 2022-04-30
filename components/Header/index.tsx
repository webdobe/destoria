import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";
import { DropdownOption } from "./dropdown";
import Teams from "./Content/Teams";
import DropdownRoot from "./dropdownRoot";
import { DropdownProvider } from "contexts/Dropdown";

const Header: FunctionComponent = function () {
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
            />
          </div>
          <div {...s.navBox}>
            <nav {...s.nav}>
              <ul {...s.navUl}>
                <DropdownOption
                  name="About"
                  content={Teams}
                  backgroundHeight={250}
                  backgroundWidth={150}
                />
                <DropdownOption
                  name="Whitepaper"
                  content={Teams}
                  backgroundHeight={160}
                  backgroundWidth={250}
                />
                <DropdownOption
                  name="Team"
                  content={Teams}
                  backgroundHeight={220}
                  backgroundWidth={200}
                />
                <DropdownOption
                  name="Marketplace"
                  content={Teams}
                  backgroundHeight={160}
                  backgroundWidth={200}
                />
                <DropdownOption
                  name="Mint"
                  content={Teams}
                  backgroundHeight={220}
                  backgroundWidth={200}
                />
              </ul>
            </nav>
            
            <div {...s.connectWallet}>
              <span
                {...s.connectWalletText}
                style={{
                  whiteSpace: "nowrap",
                  position: "relative",
                  left: "20px",
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
          <div {...s.navBurger}>
            <Image src="/burger.svg" alt="Burger Menu" width={72} height={24} />
          </div>
        </div>
        <DropdownRoot />
      </DropdownProvider>
    </header>
  );
};

export default Header;

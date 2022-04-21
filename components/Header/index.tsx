import { FunctionComponent } from "react";
import s from "./styles";

const Header: FunctionComponent = function () {
  return (
    <header style={{ maxWidth: "1440px" }} {...s.header}>
      <h1 {...s.pageName}>Destoria</h1>
      <h2 {...s.pageDescription}>Explore the Metaverse</h2>
      <div {...s.container}>
        <div {...s.logo}>
          LOGO
        </div>
        <div {...s.navBox}>
          <nav {...s.nav}>
            <ul {...s.navUl}>
              <li>About</li>
              <li>Whitepaper</li>
              <li>Team</li>
              <li>Marketplace</li>
              <li>Mint</li>
            </ul>
          </nav>
          <div {...s.connectWallet}>
            Connect Wallet
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

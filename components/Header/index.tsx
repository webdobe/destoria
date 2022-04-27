import { FunctionComponent } from "react";
import s from "./styles";
import Image from 'next/image'

const Header: FunctionComponent = function () {
  return (
    <header style={{ maxWidth: "1440px" }} {...s.header}>
      <h1 {...s.pageName}>Destoria</h1>
      <h2 {...s.pageDescription}>Explore the Metaverse</h2>
      <div {...s.container}>
        <div {...s.logo}>
          <Image src="/destoria.svg" alt="Burger Menu" width={47} height={42} />
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
            <span {...s.connectWalletText} style={{whiteSpace: 'nowrap', position: 'relative', left: '20px'}}>Connect Wallet</span>
            <Image {...s.connectWalletImage} src="/connect-wallet.svg" alt="Burger Menu" width={200} height={45} style={{position: 'absolute'}}/>
          </div>
        </div>
        <div {...s.navBurger}>
          <Image src="/burger.svg" alt="Burger Menu" width={72} height={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;

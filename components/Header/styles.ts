import classNameAdder from 'utils/classNameAdder'

const styles = {
    header: "mx-auto text-dhOrange px-7 md:px-4 bg-no-repeat bg-cover",
    pageName: "hidden",
    pageDescription: "hidden",
    container: "w-full flex h-24 justify-between items-center text-base",
    navBox: "hidden md:flex items-center grow max-w-6xl justify-end gap-0 lg:gap-8 pb-2 text-xl font-bold tracking-wide",
    logo: " cursor-pointer",
    nav: "grow flex justify-end",
    navUl: "grow justify-end gap-1 lg:gap-3 hidden md:flex",
    navLi: "cursor-pointer outline-0 p-4 font-semibold",
    connectWallet: "w-45 h-12 flex justify-center items-center cursor-pointer connect-wallet neon-1",
    navBurger: "md:hidden relative z-10",
    connectWalletText: "w-0 ",
    connectWalletImage: "neon-1",
    dropdownRoot: "z-10 absolute top-20 left-0",
    dropdownArrow: "",
    dropdownContainer: "absolute p-3 w-auto h-auto",
    dropdownSection: "absolute h-auto",
    background: "backdrop-filter backdrop-blur-sm bg-white/30 absolute top-0 w-full bg-opacity-20 custom-dropdown",
    logoImage: "",
    menuBackground: "absolute top-0 right-0 backdrop-filter bottom-0 w-72 z-10 backdrop-blur-sm bg-dblue/80",
    navMenu: "flex md:hidden"
}


export default classNameAdder(styles)
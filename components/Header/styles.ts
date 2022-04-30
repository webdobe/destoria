import classNameAdder from 'utils/classNameAdder'

const styles = {
    header: "mx-auto text-dhOrange px-7",
    pageName: "hidden",
    pageDescription: "hidden",
    container: "w-full flex h-24 justify-between items-center text-base",
    navBox: "hidden md:flex items-center grow max-w-6xl justify-end gap-8 pb-2 text-xl font-bold tracking-wide",
    logo: "p-1",
    nav: "grow flex justify-end",
    navUl: "flex grow justify-end gap-9",
    navLi: "cursor-pointer outline-0 p-4 transition-opacity hover:opacity-50 focus:opacity-50 font-semibold",
    connectWallet: "w-45 h-10 flex justify-center items-center cursor-pointer connect-wallet",
    navBurger: "md:hidden",
    connectWalletText: "w-0 glower",
    connectWalletImage: "w-0",
    dropdownRoot: "z-10 absolute top-20 left-0",
    dropdownArrow: "",
    dropdownContainer: "absolute p-3 w-auto h-auto",
    dropdownSection: "absolute h-auto",
    background: "backdrop-blur-sm bg-white/30 absolute top-0 w-full bg-opacity-20 custom-dropdown w-44"
}


export default classNameAdder(styles)
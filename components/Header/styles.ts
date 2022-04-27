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
    connectWallet: "w-45 h-10 flex justify-center items-center cursor-pointer ",
    navBurger: "md:hidden",
    connectWalletText: "w-0 glower",
    connectWalletImage: "w-0"
}


export default classNameAdder(styles)
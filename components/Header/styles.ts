import classNameAdder from 'utils/classNameAdder'

const styles = {
    header: "mx-auto text-dorange",
    pageName: "hidden",
    pageDescription: "hidden",
    container: "w-full flex h-24 justify-between items-center text-base",
    navBox: "flex items-center grow max-w-6xl justify-end",
    nav: "grow flex justify-end",
    navUl: "flex space-x-4 grow justify-end",
    connectWallet: "pl-4"
}


export default classNameAdder(styles)
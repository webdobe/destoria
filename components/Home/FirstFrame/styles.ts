import classNameAdder from 'utils/classNameAdder'

const styles = {
    exploreTheMetaverse: "flex flex-col justify-center items-center text-dwhite bg-no-repeat bg-cover",
    containerExploreTheMetaverse: "",
    containerExploreTheMetaverseBordered: "flex flex-col justify-center items-center layout-first-border md:py-24 md:mx-5 lg:mx-5",
    destoria: "pl-2",
    destoriaLogo: "w-80",
    exploreTheMetaverseText: "uppercase tracking-wide text-dwhite md:text-5xl md:font-bold md:pt-16",
    connectWallet: "w-45 h-10 flex justify-center items-center cursor-pointer connect-wallet pt-2 md:pt-16",
    connectWalletText: "w-0 text-xl",
    connectWalletImage: "w-0",
    destoriaTheVideo: "flex flex-col justify-center items-center text-dwhite bg-no-repeat bg-cover",
    containerDestoriaTheVideo: "",
    textBoxDestoriaTheVideoBordered: "grid gap-10 grid-cols-2 grid-rows-1 justify-around layout-border md:px-24 md:py-28 md:mx-5",
    textBoxDestoriaTheVideo: "flex flex-col gap-8 text-xl lg:ml-16 lg:pl-10 lg:pr-8"
}


export default classNameAdder(styles)
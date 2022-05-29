import classNameAdder from 'utils/classNameAdder'

const styles = {
    exploreTheMetaverse: "flex flex-col justify-center items-center text-dwhite bg-no-repeat relative explore-metaverse",
    containerExploreTheMetaverse: "",
    containerExploreTheMetaverseBordered: "flex flex-col justify-center items-center layout-first-border md:py-24 md:mx-5 xl:mx-5 h-60 md:h-auto",
    destoria: "pl-2",
    destoriaLogo: "w-80",
    exploreTheMetaverseText: "uppercase tracking-wide text-dwhite md:text-5xl md:font-bold my-5 md:my-0 md:pt-16",
    connectWallet: "w-45 h-10 flex justify-center items-center cursor-pointer connect-wallet pt-2 md:pt-16 neon-1",
    connectWalletText: "w-0 text-xl",
    connectWalletImage: "w-0",
    destoriaTheVideo: "flex flex-col justify-center items-center text-dwhite bg-no-repeat bg-cover",
    containerDestoriaTheVideo: "",
    textBoxDestoriaTheVideoBordered: "lg:grid lg:gap-10 lg:grid-cols-2 lg:grid-rows-1 justify-center md:justify-around layout-border md:px-12 xl:px-24 md:py-28 md:mx-5",
    textBoxDestoriaTheVideo: "flex flex-col gap-8 text-xl p-5 my-16 md:my-0 xl:ml-16 xl:pl-10 xl:pr-8 ",
    majorContainer: "bg-full-img",
    photoLayer: "w-full h-full absolute first-img-layer text-dwhite",
    contentLayer: "w-full h-full relative",
    videoScene: "flex justify-between w-full overflow-hidden",
    destoriaHeroVideo: "flex video-box mx-auto px-6 lg:px-0 mb-12 lg:mb-0"
}


export default classNameAdder(styles)
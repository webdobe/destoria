import classNameAdder from 'utils/classNameAdder'

const styles = {
    countdown: "m-auto  overflow-hidden",
    contentLayer: "w-full h-full relative m-auto",
    containerCountdown: "w-full cards-carousel-container m-auto",
    containerCountdownBordered: "layout-border md:py-32 md:mx-5",
    countdownContent: "h-full flex flex-col justify-center items-center text-center text-dwhite bg-no-repeat relative text-5xl font-bold tracking-wider layout-first-border md:mx-5 xl:mx-5",
    countdownTitle: "pt-16 text-6xl relative md:-top-48 font-normal text-5xl",
    countdownSubtitle: "pt-8 md:pt-8 text-2xl",
    countdownBox: "flex flex-col justify-between w-full max-w-5xl m-auto",
    notfound: "opacity-50",
    applyNowText: "w-0 text-base md:text-xl text-dhwite relative z-10 cursor-pointer",
    connectWalletImage: "cursor-pointer",
    interactionsDiv: "w-full flex justify-center gap-1 md:gap-4 interaction",
    connectWalletSpan: "cursor-pointer",
    interactions: "w-full flex relative md:-top-32 justify-center gap-1 md:gap-4 form-interactions py-3",

}


export default classNameAdder(styles)
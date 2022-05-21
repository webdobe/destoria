import classNameAdder from 'utils/classNameAdder'

const styles = {
    countdown: "m-auto  overflow-hidden",
    contentLayer: "w-full h-full relative m-auto",
    containerCountdown: "w-full cards-carousel-container m-auto",
    containerCountdownBordered: "layout-border md:py-32 md:mx-5",
    countdownContent: "flex flex-col justify-center items-center text-center text-dwhite bg-no-repeat relative text-5xl font-bold tracking-wider layout-first-border md:mx-5 xl:mx-5",
    countdownTitle: "pt-16 md:pt-20 text-6xl",
    countdownSubtitle: "pt-8 md:pt-8 text-2xl",
    countdownBox: "flex flex-col justify-between w-full max-w-5xl m-auto md:mt-12 mb-5",
    countdownBoxTitle: "text-xl ",
    countdownItself: "text-5xl md:text-8xl max-w-sm md:max-w-2xl transparent-two-box my-3 p-3 md:p-8 width600 text-center",
    countdownBoxSubtitle: "text-lg font-normal opacity-70 p-3 tracking-widest",
    countdownGrid: "w-full grid grid-cols-1 md:grid-cols-3 py-5 md:py-10",
    countdownGridSubtitle: "text-lg font-normal opacity-70 tracking-widest",
    countdownBoxContent: "text-left w-full py-3 overflow-hidden",
    countdownBoxFormContent: "text-left w-full py-8",
    countdownBoxContentTitle: "text-dhOrange text-xl font-bold pb-5",
    countdownBoxContentText: "text-dwhite text-base font-normal tracking-normal",
    gridForm: "flex flex-col md:grid md:grid-cols-2 gap-4 w-full ",
    gridSingle: "w-full h-12",
    gridDouble: "w-full h-24 col-span-2",
    singleInput: "w-full border-0 outline-0 input-styles px-3 text-base h-full",
    textAreaInput: "w-full border-0 outline-0 input-styles p-3 text-base h-full relative top-2",
    listStyle: "list-disc relative left-5",
    connectWalletText: "w-0 glower text-base md:text-xl text-dhOrange",
    applyNowText: "w-0 text-base md:text-xl text-dhwite relative z-10 cursor-pointer",
    connectWalletImage: "cursor-pointer",
    interactionsDiv: "w-full flex justify-center gap-1 md:gap-4 interaction",
    connectWalletSpan: "cursor-pointer",
    interactions: "w-full flex justify-center gap-1 md:gap-4 form-interactions py-3",
    hexangle: "mr-5 ml-6",
    countdownLabels: "text-xl flex w-full justify-between gap-2 md:gap-2 md:px-5"
}


export default classNameAdder(styles)
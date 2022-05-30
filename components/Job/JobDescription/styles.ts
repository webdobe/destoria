import classNameAdder from 'utils/classNameAdder'

const styles = {
    jobDescription: "m-auto  overflow-hidden",
    contentLayer: "w-full h-full relative m-auto",
    containerJobDescription: "w-full cards-carousel-container m-auto",
    containerJobDescriptionBordered: "layout-border md:py-32 md:mx-5",
    jobDescriptionContent: "flex flex-col justify-center items-center text-center text-dwhite bg-no-repeat relative text-5xl font-bold tracking-wider layout-first-border md:pt-28 md:mx-5 xl:mx-5",
    jobDescriptionTitle: "py-16 md:py-0 ",
    jobDescriptionBox: "flex flex-col justify-between w-full max-w-5xl m-auto md:mt-28 job-description-box p-8 mb-5",
    jobDescriptionBoxTitle: "text-xl ",
    jobDescriptionBoxSubtitle: "text-lg font-normal opacity-70 p-3 tracking-widest",
    jobDescriptionGrid: "w-full grid grid-cols-1 md:grid-cols-3 py-5 md:py-10",
    jobDescriptionGridSubtitle: "text-lg font-normal opacity-70 tracking-widest",
    jobDescriptionBoxContent: "text-left w-full py-3 overflow-hidden",
    jobDescriptionBoxFormContent: "text-left w-full py-8",
    jobDescriptionBoxContentTitle: "text-dhOrange text-xl font-bold pb-5",
    jobDescriptionBoxContentText: "text-dwhite text-base font-normal tracking-normal",
    gridForm: "flex flex-col md:grid md:grid-cols-2 gap-4 w-full ",
    gridSingle: "w-full h-12",
    gridDouble: "w-full h-24 col-span-2",
    singleInput: "w-full border-0 outline-0 input-styles px-3 text-base h-full",
    textAreaInput: "w-full border-0 outline-0 input-styles p-3 text-base h-full relative top-2",
    listStyle: "list-disc relative left-5",
    connectWalletText: "w-0 glower text-base md:text-xl text-dhOrange neon-1-img neon-1 ",
    applyNowText: "w-0 text-base md:text-xl text-dhwite relative z-10 cursor-pointer neon-1-img neon-1 ",
    connectWalletImage: "cursor-pointer neon-1",
    interactionsDiv: "w-full flex justify-between gap-1 md:gap-4 interaction",
    connectWalletSpan: "cursor-pointer neon-1",
    interactions: "w-full flex justify-center gap-1 md:gap-4 form-interactions py-3",
}


export default classNameAdder(styles)
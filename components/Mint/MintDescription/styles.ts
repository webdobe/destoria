import classNameAdder from 'utils/classNameAdder'

const styles = {
    mintDescription: "m-auto  overflow-hidden ",
    contentLayer: "w-full h-full relative m-auto",
    containerMintDescription: "w-full cards-carousel-container m-auto",
    containerMintDescriptionBordered: "layout-border md:py-32 md:mx-5",
    mintDescriptionContent: "flex flex-col justify-center items-center text-center text-dwhite bg-no-repeat relative text-5xl font-bold tracking-wider layout-border md:pt-28 md:mx-5 xl:mx-5",
    mintDescriptionTitle: "py-16 md:py-0 text-2xl text-dhOrange tracking-widest max-w-4xl px-4 md:px-0",
    mintDescriptionBox: "flex flex-col justify-between w-full max-w-5xl m-auto md:mt-28 job-description-box pl-12 pr-8 mb-5",
    mintDescriptionBoxTitle: "text-xl ",
    mintDescriptionBoxSubtitle: "text-lg font-normal opacity-70 p-3 tracking-widest",
    mintDescriptionGrid: "w-full grid grid-cols-1 md:grid-cols-3 py-5 md:py-10",
    mintDescriptionGridSubtitle: "text-lg font-normal opacity-70 tracking-widest",
    mintDescriptionBoxContent: "text-left w-full py-3 overflow-hidden",
    mintDescriptionBoxFormContent: "text-left w-full py-8",
    mintDescriptionBoxContentTitle: "text-dhOrange text-xl font-bold pb-5",
    mintDescriptionBoxContentText: "text-dwhite text-base font-normal tracking-normal",
    gridForm: "flex flex-col md:grid md:grid-cols-2 gap-4 w-full text-left text-xl",
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
    listLitem: "py-3.5 font-medium tracking-normal list-disc",
    specialItemOne: "pt-3.5 font-medium tracking-normal list-disc",
    specialItemTwo: "pb-3.5 font-medium tracking-normal list-disc",
    gridInside: "w-full h-full",
    gridUl: "w-full h-full",
    photoLayer: "w-full h-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover"
}


export default classNameAdder(styles)
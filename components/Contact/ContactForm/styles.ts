import classNameAdder from 'utils/classNameAdder'

const styles = {
    contactForm: "m-auto  overflow-hidden",
    contentLayer: "w-full h-full relative m-auto",
    containerContactForm: "w-full cards-carousel-container m-auto",
    containerContactFormBordered: "layout-border md:py-8 md:mx-5",
    contactFormContent: "flex flex-col justify-center items-center text-center text-dwhite bg-no-repeat relative text-5xl font-bold tracking-wider layout-first-border md:pt-8 md:mx-5 xl:mx-5",
    contactFormTitle: "text-4xl py-8 md:py-16 md:py-7 ",
    contactFormBox: "flex flex-col justify-between w-full max-w-5xl m-auto md:mt-4 job-description-box p-8 mb-10",
    contactFormBoxTitle: "text-2xl pb-3.5",
    contactFormRegularText: "text-lg font-normal pb-5 md:pb-14 tracking-wider",
    contactFormGrid: "w-full grid gap-4 grid-cols-1 md:grid-rows-3 md:grid-flow-col md:grid-cols-2 pb-5 md:pb-10",
    contactFormGridSubtitle: "text-lg font-normal opacity-70 tracking-widest",
    contactFormBoxContent: "text-left w-full py-3 overflow-hidden",
    contactFormBoxFormContent: "text-left w-full py-8",
    contactFormBoxContentTitle: "text-dhOrange text-xl font-bold pb-5",
    contactFormBoxContentText: "text-dwhite text-base font-normal tracking-normal",
    contactFormBoxInfoText: "text-dwhite text-xs font-normal tracking-normal",
    contactFormMessages: "w-full row pt-5 md:pt-10",
    contactFormSuccess: "w-full row text-dhOrange text-base font-normal tracking-normal",
    contactFormError: "w-full row text-dwhite text-base font-normal tracking-normal",
    gridSingle: "w-full h-12",
    gridDouble: "w-full relative top-2 h-36 md:h-auto md:top-0 row-span-3",
    singleInput: "w-full border-0 outline-0 input-styles px-3 text-base h-full",
    textAreaInput: "w-full border-0 outline-0 input-styles p-3 text-base h-full relative top-2",
    listStyle: "list-disc relative left-5",
    connectWalletText: "w-0 glower text-base md:text-xl text-dhOrange",
    applyNowText: "w-0 text-base md:text-xl text-dhwite relative z-10 cursor-pointer",
    contactBtn: "text-base md:text-xl relative z-10 cursor-pointer",
    connectWalletImage: "cursor-pointer",
    interactionsDiv: "w-full flex justify-center gap-1 md:gap-4 interaction",
    connectWalletSpan: "cursor-pointer",
    interactions: "w-full flex justify-between gap-1 md:gap-4 form-interactions py-3",
    highlight: "text-dhOrange font-bold"
}


export default classNameAdder(styles)
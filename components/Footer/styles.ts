import classNameAdder from 'utils/classNameAdder'

const styles = {
    footer: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover",
    contentLayer: "w-full h-full relative m-auto",
    containerFooter: "w-full cards-carousel-container m-auto",
    containerFooterBordered: "layout-border md:mx-5 footer",
    footerContent: "flex justify-between lg:px-2 max-w-6xl m-auto w-full footer-border items-center",
    mediaBox: "flex gap-3",
    contactUs: "relative -top-1",
    footerLower: "flex justify-between lg:px-2 max-w-6xl m-auto w-full items-center",
    policyConditions: "flex gap-4 py-5",
    destoria: "relative md:-left-4"
}


export default classNameAdder(styles)
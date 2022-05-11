import classNameAdder from 'utils/classNameAdder'

const styles = {
    faqBox: "w-full flex text-dwhite items-center text-dwhite",
    contentLayer: "w-full h-full relative m-auto",
    containerFaq: "cards-carousel-container m-auto",
    containerFaqBordered: "layout-border md:py-32 md:mx-5 m-auto",
    faqContent: "flex flex-col lg:flex-row lg:px-2 text-dwhite max-w-4xl m-auto",
    titleBox: "faq-title",
    leftBox: "faq-left",
    rightBox: "faq-right",
    topBox: "faq-right__top",
    bottomBox: "faq-right__bottom",
    bottomInsideBox: "faq-right__bottom--inside"
}


export default classNameAdder(styles)
import classNameAdder from 'utils/classNameAdder'

const styles = {
    faq: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover",
    contentLayer: "w-full h-full relative m-auto z-0 pt-24 md:pt-0",
    containerFaq: "w-full cards-carousel-container m-auto",
    containerFaqBordered: "layout-border md:py-32 md:mx-5",
    faqContent: "flex flex-col text-dwhite max-w-5xl m-auto w-full custom-faq-padding",
}


export default classNameAdder(styles)
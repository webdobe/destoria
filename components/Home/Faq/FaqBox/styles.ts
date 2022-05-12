import classNameAdder from 'utils/classNameAdder'

const styles = {
    faqBox: "w-full flex flex-col text-dwhite items-center text-dwhite py-2 faq-box cursor-pointer",
    contentLayer: "w-full h-full relative m-auto",
    containerFaq: "cards-carousel-container m-auto",
    containerFaqBordered: "layout-border md:py-32 md:mx-5 m-auto",
    faqContent: "flex flex-col lg:flex-row lg:px-2 text-dwhite max-w-4xl m-auto",
    titleBox: "faq-title",
    leftBox: "faq-left flex justify-between align-center",
    rightBox: "faq-right",
    topBox: "faq-right__top",
    bottomBox: "faq-right__bottom",
    bottomInsideBox: "faq-right__bottom--inside",
    dropdownImage: "block relative -left-3",
    answerBox: "answer-box",
    answerTextBox: "answer-text-box",
    offsetTopBox: "answer-offset-top-box",
    answerRightBox: "answer-right-box",
    answerTopBox: "answer-right-top-box",
    answerBottomBox: "answer-right-bottom-box",
    answerBottomInsideBox: "answer-right-bottom-inside-box"
}


export default classNameAdder(styles)
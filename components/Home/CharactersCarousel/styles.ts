import classNameAdder from 'utils/classNameAdder'

const styles = {
    charactersCarousel: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover bg-characters",
    contentLayer: "w-full h-full relative m-auto",
    containerCharactersCarousel: "cards-carousel-container m-auto",
    containerCharactersCarouselBordered: "layout-border md:py-32 md:mx-5 m-auto",
    charactersContent: "flex flex-col lg:flex-row text-dwhite gap-5 max-w-3xl",
    charactersContentBlurred: "flex flex-col lg:flex-row text-dwhite gap-5 max-w-3xl",
    charactersImageContent: "flex flex-row text-dwhite lg:w-72 justify-center align-center grow w-full",
    charactersImageContentBlurred: "flex flex-row text-dwhite lg:w-72 justify-center align-center grow w-full blur-sm",
    charactersTextContent: "text-box-charac",
    charactersTextContentBlurred: "text-box-charac blur-sm",
    charactersTextContentTitle: "text-dhOrange text-base uppercase tracking-widest",
    charactersTextContentSubtitle: "font-bold capitalize tracking-wide text-4xl py-4",
    charactersTextContentText: "text-base tracking-wide pb-5",
    charactersTextContentTextBlurred: "text-base tracking-wide pb-5 blur-sm",
    characterImage: "relative -left-5 justify-center align-center grow w-full",
    characterImageBlurred: "relative -left-5 justify-center align-center grow w-full blur-sm",
    swiperAndControls: "w-full flex items-center justify-between",
    swiper: "lg:h-96",
    controlLeft: "w-12 lg:w-72 relative -top-5 lg:top-0 text-dwhite text-right charac-cursor-left",
    controlRight: "w-12 lg:w-72 relative -top-5 lg:top-0 text-dwhite text-left charac-cursor-right",
    buttonImage: "cursor-pointer"
}


export default classNameAdder(styles)
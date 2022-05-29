import classNameAdder from 'utils/classNameAdder'

const styles = {
    charactersCarousel: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover bg-characters pointer-events-none relative mt-16 md:mt-0",
    contentLayer: "w-full relative m-auto flex justify-center",
    containerCharactersCarousel: "cards-carousel-container m-auto",
    containerCharactersCarouselBordered: "layout-border md:py-32 md:mx-5 mx-auto super-height bg-none pointer-events-auto w-full",
    charactersContent: "flex flex-col lg:flex-row text-dwhite gap-5 max-w-4xl px-10",
    charactersContentBlurred: "flex flex-col lg:flex-row text-dwhite gap-5 max-w-4xl",
    charactersImageContent: "flex flex-row text-dwhite w-max justify-center align-center grow w-full",
    charactersImageContentBlurred: "flex flex-row text-dwhite w-max justify-center align-center grow w-full blur-sm",
    charactersTextContent: "text-box-charac px-8 md:px-0 w-full x-w-xs lg:max-w-sm",
    charactersTextContentBlurred: "text-box-charac px-8 md:px-0 w-full x-w-xs lg:max-w-sm",
    charactersTextContentTitle: "text-dhOrange text-base uppercase tracking-widest text-left px-6 md:px-0",
    charactersTextContentSubtitle: "font-bold capitalize tracking-wide text-4xl py-4 text-left px-6 md:px-0",
    charactersTextContentText: "text-base tracking-wide pb-5 text-left px-6 md:px-0",
    charactersTextContentTextBlurred: "text-base tracking-wide pb-5 blur-sm text-left",
    characterImage: "relative -left-10 justify-center align-center grow w-full h-32 text-left",
    characterImageBlurred: "relative -left-10 justify-center align-center grow w-full blur-sm h-32",
    swiperAndControls: "w-full flex items-center justify-between pointer-events-auto",
    swiper: "lg:h-96",
    controlLeft: "w-36 lg:w-72 relative -top-5 lg:top-0 text-dwhite text-right charac-cursor-left",
    controlRight: "w-36 lg:w-72 relative -top-5 lg:top-0 text-dwhite text-left charac-cursor-right",
    buttonImage: "cursor-pointer"
}


export default classNameAdder(styles)
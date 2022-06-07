import classNameAdder from 'utils/classNameAdder'

const styles = {
    charactersCarousel: "w-full flex flex-col justify-center text-dwhite items-center bg-no-repeat bg-cover bg-characters pointer-events-none relative mt-16 md:mt-0",
    contentLayer: "w-full m-auto characters-content-parent flex justify-center relative",
    containerCharactersCarousel: "relative flex flex-col justify-center characters-container",
    containerCharactersCarouselBordered: "layout-border md:mx-5 md:py-32 mx-auto bg-none pointer-events-auto",
    charactersContent: "flex flex-col lg:flex-row text-dwhite gap-5 justify-center",
    charactersContentBlurred: "flex flex-col lg:flex-row text-dwhite gap-5 justify-center",
    charactersImageContent: "character-image flex flex-row text-dwhite w-max justify-center align-center grow w-full",
    charactersImageContentBlurred: "character-image flex flex-row text-dwhite w-max justify-center align-center grow w-full blur-sm",
    charactersTextContent: "text-box-charac px-8 md:px-0 w-full x-w-xs lg:max-w-sm",
    charactersTextContentBlurred: "text-box-charac px-8 md:px-0 w-full x-w-xs lg:max-w-sm",
    charactersTextContentTitle: "text-dhOrange text-base uppercase tracking-widest text-left px-6 md:px-0",
    charactersTextContentSubtitle: "font-bold capitalize tracking-wide text-4xl py-4 text-left px-6 md:px-0",
    charactersTextContentText: "text-base tracking-wide pb-5 text-left px-6 md:px-0",
    charactersTextContentTextBlurred: "text-base tracking-wide pb-5 blur-sm text-left px-6 md:px-0",
    characterImage: "relative justify-center align-center grow w-full h-32 text-left",
    characterImageBlurred: "relative justify-center align-center grow w-full blur-sm",
    swiperAndControls: "w-full flex items-center justify-between pointer-events-auto",
    swiper: "lg:h-96",
    controlLeft: "w-36 lg:w-72 relative -top-5 lg:top-0 text-dwhite text-right charac-cursor-left",
    controlRight: "w-36 lg:w-72 relative -top-5 lg:top-0 text-dwhite text-left charac-cursor-right",
    buttonImage: "cursor-pointer"
}


export default classNameAdder(styles)
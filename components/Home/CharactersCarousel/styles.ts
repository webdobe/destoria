import classNameAdder from 'utils/classNameAdder'

const styles = {
    charactersCarousel: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover bg-characters",
    contentLayer: "w-full h-full relative m-auto",
    containerCharactersCarousel: "cards-carousel-container m-auto",
    containerCharactersCarouselBordered: "layout-border md:py-32 md: md:mx-5 m-auto",
    charactersContent: "flex flex-row text-dwhite lg:px-72 gap-5",
    charactersImageContent: "flex flex-row text-dwhite w-72 ",
    charactersTextContent: "",
    charactersTextContentTitle: "text-dhOrange text-base uppercase tracking-widest",
    charactersTextContentSubtitle: "font-bold capitalize tracking-wide text-4xl py-4",
    charactersTextContentText: "text-base tracking-wide pb-5"
}


export default classNameAdder(styles)
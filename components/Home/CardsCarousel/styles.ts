import classNameAdder from 'utils/classNameAdder'

const styles = {
    cardsCarousel: "flex flex-col justify-center items-center text-dwhite bg-no-repeat bg-cover bg-full-forest relative",
    photoLayer: "w-full h-full absolute first-img-layer",
    contentLayer: "w-full h-full relative ",
    containerCardsCarousel: "cards-carousel-container m-auto h-auto",
    containerCardsCarouselBordered: "layout-border pb-20 py-16 md:py-32 md:mx-5 cards-swipe",
    swiper: "w-full swiper-slide h-96",
    cardTitle: "text-3xl font-bold pb-4 md:pb-10",
    cardBottom: "text-3xl font-bold pt-10 opacity-70",
    cardContent: "text-base text-center leading-7 px-10",
}


export default classNameAdder(styles)
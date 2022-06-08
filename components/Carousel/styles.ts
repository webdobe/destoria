import classNameAdder from 'utils/classNameAdder'

const styles = {
    cardsCarousel: "flex flex-col justify-center items-center text-dwhite bg-no-repeat bg-cover bg-full-forest relative",
    photoLayer: "w-full h-full absolute first-img-layer",
    contentLayer: "w-full h-full relative",
    containerCardsCarousel: "cards-carousel-container m-auto h-auto py-10",
    containerCardsCarouselBordered: "layout-border md:mx-5 cards-swipe py-10 md:py-16 pointer-events-auto",
    swiper: "w-full swiper-slide h-96",
    cardTitle: "text-2xl font-bold pb-4 md:pb-10",
    cardBottom: "text-2xl font-bold pt-5 opacity-70",
    cardBottomSpecial: "text-2xl font-bold pt-4 opacity-70",
    cardContent: "text-base text-center leading-6 px-10 flex flex-col justify-between",
    dots: "w-full flex justify-center gap-4 pt-5 md:pt-12 relative z-10"
}


export default classNameAdder(styles)
import classNameAdder from 'utils/classNameAdder'

const styles = {
    animatedGallery: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover bg-characters",
    contentLayer: "w-full h-full relative m-auto",
    containerAnimatedGallery: "cards-carousel-container m-auto",
    containerAnimatedGalleryBordered: "layout-border md:py-32 md:mx-5 m-auto",
    animatedGalleryContent: "flex flex-col lg:flex-row lg:px-2 text-dwhite max-w-6xl m-auto animated-gallery",
}


export default classNameAdder(styles)
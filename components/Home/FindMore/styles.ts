import classNameAdder from 'utils/classNameAdder'

const styles = {
    findMore: "flex flex-col justify-center items-center text-dwhite bg-no-repeat bg-cover bg-characters relative",
    photoLayer: "w-full h-full absolute first-img-layer",
    contentLayer: "w-full h-full relative",
    containerFindMore: "cards-carousel-container m-auto h-auto",
    containerFindMoreBordered: "layout-border md:py-10 md:mx-5",
}


export default classNameAdder(styles)
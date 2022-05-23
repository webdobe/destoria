import classNameAdder from 'utils/classNameAdder'

const findMore = "bg-cover flex w-full max-w-4xl find-more-item"

const styles = {
    findMore: "flex flex-col justify-center items-center text-dwhite bg-no-repeat bg-cover bg-characters relative",
    photoLayer: "w-full h-full absolute first-img-layer",
    contentLayer: "w-full h-full relative",
    findmoreContent: "w-full flex justify-center",
    containerFindMore: "cards-carousel-container m-auto h-auto",
    containerFindMoreBordered: "layout-border md:py-10 md:mx-5",
    findmoreBoxOpenWorld: findMore + " " + "bg-openworld",
    findmoreBoxCombat: findMore + " " + "bg-combat",
    findmoreBoxCustomization: findMore + " " + "bg-customization",
    findmoreBoxInteroperability: findMore + " " + "bg-interoperability",
    findmoreBoxText: "find-more-text-box",
    titleContent: "text-lg font-bold pb-5",
    textContent: "text-base font-normal"
}


export default classNameAdder(styles)
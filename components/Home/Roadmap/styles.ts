import classNameAdder from 'utils/classNameAdder'

const styles = {
    roadmap: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover",
    photoLayer: "w-full h-full absolute",
    contentLayer: "w-full h-full relative m-auto",
    containerRoadmap: "w-full cards-carousel-container m-auto",
    containerRoadmapBordered: "layout-border md:py-32 md:mx-5",
    faqContent: "flex flex-col px-2 text-dwhite max-w-6xl m-auto w-full",
}


export default classNameAdder(styles)
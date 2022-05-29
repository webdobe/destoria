import classNameAdder from 'utils/classNameAdder'

const balls = "absolute m-auto cursor-pointer"
const labels = "absolute m-auto cursor-pointer"
const contents = "absolute text-sm text-dwhite m-auto cursor-pointer"

const styles = {
    roadmap: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-roadmap bg-no-repeat bg-cover absolute",
    photoLayer: "w-full h-full absolute text-dwhite forced-height",
    photolayerDesktop: "w-full h-full absolute text-dwhite photo-layer-desktop bg-none",
    photolayerDesktopActualPhoto: "w-full h-full  absolute text-dwhite photo-layer-desktop bg-none",
    contentLayer: "w-full h-full relative m-auto roadmap-content pointer-events-none layout-border",
    roadmapMobileContent: "roadmap-mobile-content backdrop-blur",
    roadmapList: "list-disc py-2",
    containerRoadmap: "w-full cards-carousel-container m-auto roadmap-content-parent flex justify-center",
    containerRoadmapBordered: "custom-mx-5 roadmap-content-base bg-roadmap bg-no-repeat bg-cover  w-full h-full",
    faqContent: "flex flex-col px-2 text-dwhite max-w-6xl m-auto w-full",
    circleContainer: "max-w-xl m-auto border-custom-circulo opacity-30",
    ballOne: `roadmap-ball roadmap-ball-one ${balls}`,
    ballTwo: `roadmap-ball roadmap-ball-two ${balls}`,
    ballThree: `roadmap-ball roadmap-ball-three ${balls}`,
    ballFour: `roadmap-ball roadmap-ball-four ${balls}`,
    ballFive: `roadmap-ball roadmap-ball-five ${balls}`,
    ballSix: `roadmap-ball roadmap-ball-six ${balls}`,
    ballSeven: `roadmap-ball roadmap-ball-seven ${balls}`,
    ballEight: `roadmap-ball roadmap-ball-eight ${balls}`,
    ballNine: `roadmap-ball roadmap-ball-nine ${balls}`,
    ballTen: `roadmap-ball roadmap-ball-ten ${balls}`,
    ballEleven: `roadmap-ball roadmap-ball-eleven ${balls}`,
    ballTwelve: `roadmap-ball roadmap-ball-twelve ${balls}`,
    labelOne: `roadmap-label roadmap-label-one ${labels}`,
    labelTwo: `roadmap-label roadmap-label-two ${labels}`,
    labelThree: `roadmap-label roadmap-label-three ${labels}`,
    labelFour: `roadmap-label roadmap-label-four ${labels}`,
    labelFive: `roadmap-label roadmap-label-five ${labels}`,
    labelSix: `roadmap-label roadmap-label-six ${labels}`,
    labelSeven: `roadmap-label roadmap-label-seven ${labels}`,
    labelEight: `roadmap-label roadmap-label-eight ${labels}`,
    labelNine: `roadmap-label roadmap-label-nine ${labels}`,
    labelTen: `roadmap-label roadmap-label-ten ${labels}`,
    labelEleven: `roadmap-label roadmap-label-eleven ${labels}`,
    labelTwelve: `roadmap-label roadmap-label-twelve ${labels}`,
    contentOne: `roadmap-content-text roadmap-content-text-one ${contents}`,
    contentTwo: `roadmap-content-text roadmap-content-text-two ${contents}`,
    contentThree: `roadmap-content-text roadmap-content-text-three ${contents}`,
    contentFour: `roadmap-content-text roadmap-content-text-four ${contents}`,
    contentFive: `roadmap-content-text roadmap-content-text-five ${contents}`,
    contentSix: `roadmap-content-text roadmap-content-text-six ${contents}`,
    contentSeven: `roadmap-content-text roadmap-content-text-seven ${contents}`,
    contentEight: `roadmap-content-text roadmap-content-text-eight ${contents}`,
    contentNine: `roadmap-content-text roadmap-content-text-nine ${contents}`,
    contentTen: `roadmap-content-text roadmap-content-text-ten ${contents}`,
    contentEleven: `roadmap-content-text roadmap-content-text-eleven ${contents}`,
    contentTwelve: `roadmap-content-text roadmap-content-text-twelve ${contents}`,
}


export default classNameAdder(styles)
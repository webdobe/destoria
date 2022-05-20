import classNameAdder from 'utils/classNameAdder'

const styles = {
    faq: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover",
    contentLayer: "w-full h-full relative m-auto",
    containerFaq: "w-full cards-carousel-container m-auto",
    containerFaqBordered: "layout-border md:py-12 md:mx-5",
    faqContent: "px-2 text-dwhite m-auto w-full text-center pb-5",
    titles: "text-xl text-center font-bold pb-5",
    titleContent: "uppercase font-bold tracking-wider text-3xl py-6",
    descriptive: "inline font-bold",
    membersMembers: "flex justify-between w-full max-w-lg gap-2 m-auto md:py-28",
    membersText: "md:py-8 capitalize",
    membersTextTitle: "font-bold text-xl w-full text-center",
    membersTextDescription: "text-base w-full text-center py-3 leaders-border-bottom font-normal",
    membersSocialMedia: "flex py-5 justify-evenly",
    flexTeamsBox: "grid grid-cols-2 md:grid-cols-5 w-full max-w-5xl m-auto pb-10 gap-4",
    leadersTextTitle: "pt-5 text-base font-semibold",
    leadersTextDescription: "leaders-border-bottom pb-3 mx-3 mb-3 text-sm font-normal",
    leadersSocialMedia: "flex gap-3 justify-center"

}


export default classNameAdder(styles)
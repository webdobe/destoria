import classNameAdder from 'utils/classNameAdder'

const alltabs = "tab-nav-button font-ultrasmall md:text-xs md:text-base font-bold h-16 grow uppercase flex items-center justify-center md:my-7 "
const allInners = "relative flex items-center justify-center cursor-pointer "

const styles = {
    tabs: "w-full flex justify-between text-dwhite items-stretch text-dwhite bg-no-repeat bg-cover max-w-3xl m-auto px-5 md:px-0 py-3 relative top-7 md:top-0",
    tabButton: alltabs,
    tabButtonLast: alltabs + "tab-nav-button__last",
    tabButtonFirst: alltabs + "tab-nav-button__first",
    tabButtonInner: allInners + "tab-nav-button-inner",
    tabButtonInnerLast: allInners + "tab-nav-button-inner__last",
    tabButtonInnerFirst: allInners + "tab-nav-button-inner__first",
}


export default classNameAdder(styles)
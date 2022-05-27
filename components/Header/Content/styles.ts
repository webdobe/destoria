import classNameAdder from 'utils/classNameAdder'

const styles = {
    wrapper: "w-auto h-auto",
    wrapperAbout: "w-auto h-auto relative -left-3",
    wrapperWhitepaper: "w-auto h-auto relative -left-4",
    wrapperTeam: "w-auto h-auto relative -left-4",
    wrapperMarketplace: "w-auto h-auto relative -left-3",
    wrapperMint: "w-auto h-auto relative -left-3",
    item: "w-44 font-semibold text-xl cursor-pointer",
    shortItem: "w-20 font-semibold text-xl cursor-pointer flex justify-center text-center",
    itemWhitepaper: "w-96 font-semibold text-xl cursor-pointer",
    whiteTitle: "flex justify-center text-center text-dwhite uppercase font-semibold text-sm py-3",
    whiteText: "flex justify-center text-center w-32 text-dwhite text-xs"

}


export default classNameAdder(styles)
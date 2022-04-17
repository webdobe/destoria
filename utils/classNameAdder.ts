const classNameAdder = (styles: {}) => {
    
    const finalEntry: any = {}
    
    Object.entries(styles).forEach(([key, value]) => {
        finalEntry[key] = {
            className: value
        }
    })
    return finalEntry
}    


export default classNameAdder
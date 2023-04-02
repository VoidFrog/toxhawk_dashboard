import Colors from "../../components/UI/Colors/Colors";

export default interface DropdownData {
    title:string,
    size:string,
    color:Colors,
    options:string[]
}

export const makeDropdownData = (
    title:string,
    size:string,
    color:Colors,
    options:string[]
) => {
    let dropdownData:DropdownData = {
        title:title,
        size:size,
        color:color,
        options:options
    }
    return dropdownData
}
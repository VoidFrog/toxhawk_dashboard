import Colors from "../../components/UI/Colors/Colors"

export default interface ButtonData {
    title:string,
    size:string //small | medium | large
    color:Colors //enum of chosen colors
    function:Function,
    width?:number,
    height?:number,
    disabled?:boolean
}

export const makeButtonData = (
    title:string,
    size:string,
    color:Colors,
    fn:Function,
    disabled?:boolean,
    width?:number,
    height?:number,
    ) => {
        let buttonData:ButtonData = {
            title:title,
            size:size,
            color:color,
            function:fn
        }
        if (disabled) buttonData.disabled = disabled
        if (width) buttonData.width = width
        if (height) buttonData.height = height
        return buttonData
}
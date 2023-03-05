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

export const createButtonData = (
    title:string,
    size:string,
    color:Colors,
    fun:Function,
    width?:number,
    height?:number,
    disabled?:boolean
    ) => {
        let buttonData:ButtonData = {
            title:title,
            size:size,
            color:color,
            function:fun
        }
        if (width) buttonData.width = width
        if (height) buttonData.height = height
        if (disabled) buttonData.disabled = disabled
        return buttonData
}
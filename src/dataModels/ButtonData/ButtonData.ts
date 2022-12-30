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
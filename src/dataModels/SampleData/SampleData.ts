//TODO change later, add enums instead of strs
export default interface SampleData {
    airIndex:string // good | medium | bad  || to change later
    pollutants:{
        name:string,
        certainty:number
    }[]
    loading?:boolean
    timeRemaining?:number
}
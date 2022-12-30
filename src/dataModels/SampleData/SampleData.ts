export default interface SampleData {
    airIndex:string // good | medium | bad  || to change later
    pollutants:{
        name:string,
        certainty:number
    }[]
}
import SampleData from "../SampleData/SampleData"

//TODO change later, add enums instead of strs
export default interface TakenSampleData {
    rating:string // dangerous | very dangerous | normal  || or sth? will be changed in future
    pollutantGroups:string[] //propably enum later on 
    timestamp:number,
    locationData:{
        x:number,
        y:number
    }
    name:string,
    sample:SampleData
}

export const makeTakenSampleData = (
    rating:string,
    pollutantGroups:string[],
    timestamp:number,
    locationData:{
        x:number,
        y:number
    },
    name:string,
    sample:SampleData
    ) => {
        let takenSampleData:TakenSampleData = {
            rating:rating,
            pollutantGroups:pollutantGroups,
            timestamp:timestamp,
            locationData:locationData,
            name:name,
            sample:sample
        }
        return takenSampleData
}
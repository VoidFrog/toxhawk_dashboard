//TODO change later, add enums instead of strs
export default interface TakenSampleData {
    rating:string // dangerous | very dangerous | normal  || or sth? will be changed in future
    pollutantGroups:string[] //propably enum later on 
    timestamp:number,
    locationData:{
        x:number,
        y:number
    }
    name:string
}

export const createTakenSampleData = (
    rating:string,
    pollutantGroups:string[],
    timestamp:number,
    locationData:{
        x:number,
        y:number
    },
    name:string
    ) => {
        let takenSampleData:TakenSampleData = {
            rating,
            pollutantGroups,
            timestamp,
            locationData,
            name
        }
        return takenSampleData
}
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

const makeSampleData = (
    airIndex:string,
    pollutants:{
        name:string,
        certainty:number
    }[],
    loading?:boolean,
    timeRemaining?:number
):SampleData => {
    let sample = {
        airIndex:airIndex,
        pollutants:pollutants,
        loading:loading,
        timeRemaining:timeRemaining
    }
    return sample
}

export { makeSampleData }
import { ReactNode } from "react"
import { PlaceModel } from "../model/location"
import { PlaceImage } from "./place-image"

export interface PlaceProps{
    children: ReactNode,
    place: PlaceModel,
    imageSize: number
}

export function Place(props: PlaceProps){

    return (
    <div>
        <PlaceImage 
        place={props.place} 
        imageSize={props.imageSize}/>
        <span>{props.place.name}</span>
        <span>{props.place.description}</span>
    </div>
    )
}
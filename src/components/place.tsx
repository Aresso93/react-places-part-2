import { ReactNode, useContext } from "react"
import { PlaceModel } from "../model/location"
import { PlaceImage } from "./place-image"
import { ImageSizeContext } from "../contexts/image-size-context"

export interface PlaceProps{
    children: ReactNode,
    place: PlaceModel,
}

export function Place(props: PlaceProps){
    
    return (
    <div>
        <PlaceImage 
        place={props.place} 
        />
        <span>{props.place.name}</span>
        <span>{props.place.description}</span>
    </div>
    )
}
import { PlaceModel } from "../model/location"

export interface PlaceImageProps{
    place: PlaceModel;
    imageSize: number;  
} 

export function PlaceImage(props:PlaceImageProps){
    return <img 
    src={props.place.imageId}
    alt={props.place.name}
    width={props.imageSize}
    height={props.imageSize}
    />
}
import { useContext } from "react";
import { PlaceModel } from "../model/location"
import { ImageSizeContext, useImageSizeContext } from "../contexts/image-size-context";

export interface PlaceImageProps{
    place: PlaceModel;

} 

export function PlaceImage(props:PlaceImageProps){

    const imageSize = useImageSizeContext()

    return <img 
    src={props.place.imageId}
    alt={props.place.name}
    width={imageSize}
    height={imageSize}
    />
}
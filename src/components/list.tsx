import { ReactNode } from "react"
import { PlaceModel } from "../model/location"
import { Place } from "./place"

export interface ListProps{
    children: ReactNode,
    places: PlaceModel[],
}

export function List(props: ListProps){
    return (
        <>
        <div>
            <ul>
                {props.places.map(place =>(
                    <li>
                        <Place 
                        place={place} 
                        >
                        </Place>
                    </li>
                ))}
            </ul>
        </div>

        </>

    )
}
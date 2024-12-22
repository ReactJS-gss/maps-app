import { useContext, useState } from "react"
import { Feature } from "../interfaces/places.interface";
import { MapContext, PlacesContext } from "../context"
import { LoadingPlaces } from "./LoadingPlaces";

export const SearchResults = () => {

    const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
    const { map, getRouteBetweenPoints } = useContext(MapContext);

    const [activeId, setActiveId] = useState('');

    const onPlaceClick = ( place: Feature ) => {

        const [ lng, lat ] = place.geometry.coordinates;

        setActiveId(place.id);

        map?.flyTo({
            zoom: 14,
            center: [ lng, lat ]
        })
    }

    const getRoute = ( place: Feature ) => {
        if( !userLocation ) return;
        const [lng, lat] = place.geometry.coordinates;
        getRouteBetweenPoints(userLocation, [lng, lat]);
    }

    if( isLoadingPlaces ) {
        return <LoadingPlaces />;
    }

    if( places.length === 0 ) {
        return <></>;
    }

    return (
        <ul className="list-group mt-3">

            {
                places.map(( place ) => (
                    <li
                        key={ place.id }
                        className={`list-group-item list-group-item-action pointer ${ activeId === place.id && 'active-muted' }`}
                        onClick={ () => onPlaceClick(place) }
                    >
                        <h6>{ place.properties.name }</h6>
                        <p
                            className="text-muted"
                            style={{
                                fontSize: '12px'
                            }}
                        >
                            { place.properties.full_address }
                        </p>
                        <button
                            className={`btn btn-sm ${ activeId === place.id ? 'btn-dark' : 'btn-outline-dark'}`}
                            onClick={ () => getRoute(place) }
                            >
                                Directions
                            </button>
                    </li>
                ))
            }

        </ul>
    )
}

import { useContext, useLayoutEffect, useRef } from "react"
import { Map } from 'mapbox-gl';
import { MapContext, PlacesContext } from "../context"
import { Loading } from "./Loading"

export const MapView = () => {

    const { isLoading, userLocation } = useContext(PlacesContext);
    const { setMap } = useContext(MapContext);
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if( !isLoading && userLocation ) {

        if (mapDiv.current) {
            mapDiv.current.innerHTML = '';
        }

        const map = new Map({
            container: mapDiv.current!,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: userLocation,
            zoom: 14,
        });
        
        setMap(map);

        return () => map.remove();

      }
    }, [isLoading, userLocation])

    if(isLoading) {
        return ( <Loading /> );
    }

    return (
        <div 
            ref={ mapDiv }
            style={{
                backgroundColor: '#272525',
                height: '100vh',
                width: '100vw',
                position: 'fixed',
                top: 0,
                left: 0
            }}
        >
            { userLocation?.join(', ')}
        </div>
    )
}

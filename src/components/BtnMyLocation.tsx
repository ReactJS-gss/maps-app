import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {

    const { map, isMapReady } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext)

    const onClick = () => {
        if( !isMapReady ) throw new Error('Map not ready');
        if( !userLocation ) throw new Error('User location not found');

        map?.flyTo({
            zoom: 14,
            center: userLocation
        });

    }

    return (
        <button
            className='btn btn-dark'
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 900
            }}
            onClick={ onClick }
        >
            My Location
        </button>
    )
}

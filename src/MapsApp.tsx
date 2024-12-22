import { MapProvider, PlacesProvider } from "./context"
import { HomePage } from "./pages"

import './styles.css';

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomePage />
            </MapProvider>
        </PlacesProvider>
    )
}

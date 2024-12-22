import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MapsApp } from './MapsApp'

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lvdmFubmkyOCIsImEiOiJja2RzNHh4bDQwZWplMnNtcHluaGJ2eXJ0In0.YMFQLyEOwGMVglQ45BAxow';

if( !navigator.geolocation ) {
  alert('geolocation not found');
  throw new Error('geolocation not found');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>,
)

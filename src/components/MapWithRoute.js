// src/components/MapWithRoute.js
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issues with webpack
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Marker.prototype.options.icon = L.icon({
    iconUrl,
    shadowUrl: iconShadowUrl,
});

const MapWithRoute = ({ route }) => {
    const mapRef = useRef();

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setView([route.startLat, route.startLng], 2);
        }
    }, [route]);

    const startLatLng = [route.startLat, route.startLng];
    const endLatLng = [route.endLat, route.endLng];

    return (
        <div className="relative w-full h-96">
            <MapContainer
                center={startLatLng}
                zoom={2}
                style={{ width: '100%', height: '100%' }}
                ref={mapRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={startLatLng} />
                <Marker position={endLatLng} />
                <Polyline
                    positions={[startLatLng, endLatLng]}
                    color="green"
                />
            </MapContainer>
        </div>
    );
};

export default MapWithRoute;
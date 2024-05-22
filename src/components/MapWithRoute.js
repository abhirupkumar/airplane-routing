// src/components/MapWithRoute.js
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, CircleMarker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issues with webpack
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Marker.prototype.options.icon = L.icon({
    iconUrl,
    shadowUrl: iconShadowUrl,
});

const routes = [
    {
        "name": "Newport News Williamsburg International Airport",
        "id": "PHF",
        "Latitude": "37.13190079",
        "Longitude": "-76.49299622"
    },
    {
        "name": "Philadelphia International Airport",
        "id": "PHL",
        "Latitude": "39.87189865",
        "Longitude": "-75.2410965"
    },
    {
        "name": "Newark Liberty International Airport",
        "id": "EWR",
        "Latitude": "40.69250107",
        "Longitude": "-74.16870117"
    },
    {
        "name": "Keflavik International Airport",
        "id": "KEF",
        "Latitude": "63.98500061",
        "Longitude": "-22.60560036"
    },
    {
        "name": "Helsinki Vantaa Airport",
        "id": "HEL",
        "Latitude": "60.31719971",
        "Longitude": "24.9633007"
    },
    {
        "name": "Domodedovo International Airport",
        "id": "DME",
        "Latitude": "55.40879822",
        "Longitude": "37.90629959"
    },
    {
        "name": "Aktau Airport",
        "id": "SCO",
        "Latitude": "43.8601",
        "Longitude": "51.091999"
    },
]

const planeIcon = new L.Icon({
    iconUrl: './icons/airplane.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
});

const MapWithRoute = () => {
    const mapRef = useRef();
    const [planePosition, setPlanePosition] = useState(null);
    const [currentRouteIndex, setCurrentRouteIndex] = useState(0);
    useEffect(() => {
        if (mapRef.current && routes.length > 0) {
            const firstRoute = routes[0];
            mapRef.current.setView([firstRoute.Latitude, firstRoute.Longitude], 3);
        }
    }, [routes]);

    useEffect(() => {
        if (routes.length > 1) {
            const interval = setInterval(() => {
                setCurrentRouteIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % routes.length;
                    setPlanePosition([routes[nextIndex].Latitude, routes[nextIndex].Longitude]);
                    return nextIndex;
                });
            }, 500); // Change plane position every 0.5 seconds

            return () => clearInterval(interval);
        }
    }, [routes]);

    const routeLatLngs = routes.map(route => [route.Latitude, route.Longitude]);


    return (
        <div className="relative w-full h-96">
            <MapContainer
                center={routeLatLngs.length ? routeLatLngs[0] : [0, 0]}
                zoom={2}
                style={{ width: '100%', height: '100%' }}
                ref={mapRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {routes.map((route) => (
                    <CircleMarker
                        key={route.id}
                        center={[route.Latitude, route.Longitude]}
                        radius={5}
                        fillColor="#00FFAB"
                        color="#00FF28"
                        fillOpacity={1}
                    >
                        <span>{route.name}</span>
                    </CircleMarker>
                ))}
                {routeLatLngs.length > 1 && (
                    <Polyline
                        positions={routeLatLngs}
                        color="#00FF28"
                        weight={3}
                    />
                )}
                {planePosition && (
                    <Marker position={planePosition} icon={planeIcon} />
                )}
            </MapContainer>
        </div>
    );
};

export default MapWithRoute;
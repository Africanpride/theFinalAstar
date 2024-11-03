"use client"
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const OpenStreetMap: React.FC = () => {
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        // Where you want to render the map.
        const element = document.getElementById('osm-map') as HTMLElement;
        if (element) {
            // Height has to be set. You can do this in CSS too.
            element.style.height = 'auto';
            // Create Leaflet map on map element.
            const map = L.map(element);
            mapRef.current = map;

            // Add OSM tile layer to the Leaflet map.
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);
            // Target's GPS coordinates.
            var target = L.latLng(5.556906, -0.172245);
            // Set map's center to target with zoom 14.
            mapRef.current.setView(target, 14);
            // Place a marker on the same location.
            L.marker(target).addTo(mapRef.current);
        }

        // Cleanup on component unmount
        return () => {
            mapRef.current?.remove();
        };
    }, []);

    return (
        <div id="osm-map"></div>
    );
};

export default OpenStreetMap;

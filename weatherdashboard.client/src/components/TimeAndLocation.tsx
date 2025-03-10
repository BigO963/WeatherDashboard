import '../styles/LocationAndTime.css';
import { useState, useEffect } from 'react';

interface Location {
    latitude: number;
    longitude: number;
    time: string;
    date: string;
}

interface Address {
    city: string;
}

function TimeAndLocation() {
    const [location, setLocation] = useState<Location | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (location) {
            fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.latitude}&lon=${location.longitude}`)
                .then(response => response.json())
                .then((data: { address: Address }) => setCity(data.address.city))
                .catch(error => setError("Error fetching city: " + error.message));
        }
    }, [location]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const now = new Date();
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                        date: `${now.toLocaleDateString([], { weekday: "long" })}, ${now.toLocaleDateString([], { day: "numeric", month: "short" })}`
                    });
                },
                (error) => {
                    setError("Error getting location: " + error.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div className="TimeAndLocation bg-dark 
                rounded-5 text-light d-flex
                flex-column align-items-center mt-5 shadow-lg">
            <div className="mt-5 text-center">
                <h2 className="mb-5">{city ? city : "Loading..."}</h2>
                <p className="time mt-4 fw-bold">{location?.time ? `${location.time}` : "Loading..."}</p>
                <h3 className="">{ location?.date ? `${location.date}` : "Loading..."}</h3>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default TimeAndLocation;
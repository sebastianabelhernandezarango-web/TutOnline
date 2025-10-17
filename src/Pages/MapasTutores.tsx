import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../Styles/MapasTutores.css";

// Configuración del ícono del marcador
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapasTutores() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error("Error al obtener ubicación:", err.message);
        }
      );
    }
  }, []);

  return (
    <div className="mapas-container">
      <header>
        <h1>Mapas de Tutores</h1>
        <p>Ubica en tiempo real a tu tutor</p>
      </header>

      <div className="map-wrapper">
        {position ? (
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: "400px", width: "100%", borderRadius: "12px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={position} icon={icon}>
              <Popup>📍 ¡Aquí estoy!</Popup>
            </Marker>
          </MapContainer>
        ) : (
          <p>Cargando mapa...</p>
        )}
      </div>
    </div>
  );
}

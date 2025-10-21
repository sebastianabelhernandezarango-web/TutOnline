import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Styles/BusquedaTutores.css'; 
import '../Styles/PerfilTutor.css'; 
import { TUTORES_DATA } from "../data/TutorData.ts";
import type { Tutor } from "../data/TutorData.ts";

// === PERFIL DETALLADO ===
const PerfilDetallado: React.FC<{ tutor: Tutor; setTutorSeleccionado: (t: Tutor | null) => void; onReservar: (t: Tutor) => void }> = ({
  tutor,
  setTutorSeleccionado,
  onReservar,
}) => {
  const [seccionActiva, setSeccionActiva] = useState<"Acerca de" | "Horarios" | "Reseñas">("Acerca de");

  return (
    <div className="perfil-detallado">
      <button className="btn-volver" onClick={() => setTutorSeleccionado(null)}>
        ← Volver
      </button>

      <div className="perfil-contenido-layout">
        <div className="perfil-columna-principal">
          <div className="perfil-header-principal">
            <img src={tutor.imagen} alt={tutor.nombre} className="foto-perfil" />
            <div className="info-header">
              <div className="nombre-precio">
                <h2>{tutor.nombre}</h2>
                <span className="precio">${tutor.precioHora} <small>por hora</small></span>
              </div>
              <p className="profesion">Profesor(a) de {tutor.especialidad}</p>
              <p className="meta-info">
                <span className="estrellas">⭐ {tutor.calificacion}</span> ({tutor.resenasCount} reseñas)
              </p>
              <p className="ubicacion">📍 {tutor.ubicacion} {tutor.disponibilidadOnline && <span>| 🌐 Online disponible</span>}</p>
            </div>
          </div>

          <div className="navegacion-perfil">
            {["Acerca de", "Horarios", "Reseñas"].map((seccion) => (
              <button
                key={seccion}
                className={`btn-nav-perfil ${seccionActiva === seccion ? "activo" : ""}`}
                onClick={() => setSeccionActiva(seccion as "Acerca de" | "Horarios" | "Reseñas")}
              >
                {seccion}
              </button>
            ))}
          </div>

          <div className="contenido-seccion">
            {seccionActiva === "Acerca de" && (
              <>
                <h3>Biografía</h3>
                <p>{tutor.bioDetallada}</p>
              </>
            )}
            {seccionActiva === "Horarios" && <p>Calendario de horarios (simulación).</p>}
            {seccionActiva === "Reseñas" && (
              <div className="reseñas">
                <h3>Reseñas</h3>
                <p>Excelente profesor, muy dedicado.</p>
              </div>
            )}
          </div>
        </div>

        <div className="perfil-columna-lateral">
          <button className="btn-reservar" onClick={() => onReservar(tutor)}>
            Reservar Clase
          </button>
        </div>
      </div>
    </div>
  );
};

// === COMPONENTE PRINCIPAL ===
export default function BusquedaTutores() {
  const [activeView, setActiveView] = useState<'lista' | 'mapa'>('mapa');
  const [busqueda, setBusqueda] = useState("");
  const [tutorSeleccionado, setTutorSeleccionado] = useState<Tutor | null>(null);
  const navigate = useNavigate();

  // Función para manejar la reserva
  const handleReservarClick = (tutor: Tutor) => {
    navigate("/reserva", { state: { tutorAReservar: tutor } });
  };

  const tutoresFiltrados = TUTORES_DATA.filter(
    (t) =>
      t.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.especialidad.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.especialidadesTarjeta.some(esp => esp.toLowerCase().includes(busqueda.toLowerCase()))
  );

  if (tutorSeleccionado) {
    return (
      <div className="contenedor-tutores">
        <PerfilDetallado
          tutor={tutorSeleccionado}
          setTutorSeleccionado={setTutorSeleccionado}
          onReservar={handleReservarClick}
        />
      </div>
    );
  }

  return (
    <div className="tutor-search-container">
      <header>
        <h1>Buscar Tutores</h1>
        <p>Encuentra el tutor perfecto para alcanzar tus objetivos</p>
      </header>

      <section className="search-controls">
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Buscar por tutor, materia o especialidad..."
            className="search-input"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button className="filter-button">
            <i className="fas fa-filter"></i> Filtros
          </button>
        </div>

        <div className="view-toggle">
          <div className="view-options">
            <button
              id="list-view-btn"
              className={`view-btn ${activeView === 'lista' ? 'active' : ''}`}
              onClick={() => setActiveView('lista')}
            >
              <i className="fas fa-list"></i> Lista
            </button>
            <button
              id="map-view-btn"
              className={`view-btn ${activeView === 'mapa' ? 'active' : ''}`}
              onClick={() => setActiveView('mapa')}
            >
              <i className="fas fa-map"></i> Mapa
            </button>
          </div>
          <span className="tutor-count">{tutoresFiltrados.length} tutores encontrados</span>
        </div>
      </section>

      {/* VISTA MAPA */}
      {activeView === 'mapa' && (
        <section className="map-view-content" id="map-content">
          <div className="map-placeholder">
            <i className="fas fa-map-marked-alt map-icon"></i>
            <h2>Vista de Mapa</h2>
            <p>Para ver tutores en el mapa interactivo, haz clic en el botón:</p>
            <button className="MapaTutores" onClick={() => navigate("/mapas-tutores")}>
              Mapa Interactivo
            </button>
          </div>
        </section>
      )}

      {/* VISTA LISTA */}
      {activeView === 'lista' && (
        <section className="list-view-content" id="list-content">
          <div className="lista-tutores">
            {tutoresFiltrados.map((tutor) => (
              <div
                key={tutor.id}
                className="tarjeta-tutor-nuevo"
                onClick={() => setTutorSeleccionado(tutor)}
              >
                <div className="tutor-header-bg" style={{ backgroundColor: tutor.colorFondo }}>
                  <div className="info-principal">
                    <div className="avatar-siglas">{tutor.siglas}</div>
                    <div>
                      <div className="nombre-verificado">
                        <h3>{tutor.nombre}</h3>
                        {tutor.verificado && <span className="tag-verificado">✓ Verificado</span>}
                      </div>
                      <p className="materia">{tutor.especialidad}</p>
                      <p className="experiencia">{tutor.experienciaAnios} años de experiencia</p>
                    </div>
                  </div>

                  <div className="stats-precio">
                    <p className="calificacion-header">⭐ {tutor.calificacion} ({tutor.resenasCount})</p>
                    <p className="precio-header">${tutor.precioHora}/h</p>
                  </div>
                </div>

                <div className="tutor-body-content">
                  <p className="descripcion-tarjeta">{tutor.descripcion}</p>
                  
                  <div className="chips-materias">
                    {tutor.especialidadesTarjeta.map((materia, index) => (
                      <span key={index} className="chip">{materia}</span>
                    ))}
                  </div>

                  <div className="botones-tarjeta">
                    <button className="btn-chat">💬 Chat</button>
                    <button className="btn-favorito-tarjeta">🤍</button>
                    <button
                      className="btn-reservar-tarjeta"
                      style={{ backgroundColor: tutor.colorFondo }}
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleReservarClick(tutor);
                      }}
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

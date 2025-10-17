import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Styles/BusquedaTutores.css';

export default function BusquedaTutores() {
  const [activeView, setActiveView] = useState<'lista' | 'mapa'>('mapa');
  const navigate = useNavigate();

  return (
    <div className="tutor-search-container">
      <header>
        <h1>Buscar Tutores</h1>
        <p>Encuentra el tutor perfecto para alcanzar tus objetivos académicos</p>
      </header>

      <section className="search-controls">
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Buscar por tutor, materia o especialidad..."
            className="search-input"
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
          <span className="tutor-count">Buscando tutores...</span>
        </div>
      </section>

      {/* Vista Mapa */}
      {activeView === 'mapa' && (
        <section className="map-view-content" id="map-content">
          <div className="map-placeholder">
            <i className="fas fa-map-marked-alt map-icon"></i>
            <h2>Vista de Mapa</h2>
            <p>Para ver tutores en el mapa interactivo, haz clic en el botón:</p>
            <button
              className="MapaTutores"
              onClick={() => navigate("/mapas-tutores")}
            >
              Mapa Interactivo
            </button>
          </div>
        </section>
      )}

      {/* Vista Lista */}
      {activeView === 'lista' && (
        <section className="list-view-content" id="list-content">
          <p style={{ textAlign: 'center', padding: '20px' }}>
            Contenido de la Lista de Tutores
          </p>
        </section>
      )}
    </div>
  );
}

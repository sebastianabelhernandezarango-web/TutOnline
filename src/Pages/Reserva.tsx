import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/ReservaClase.css'; 

interface LocationState {
  tutorAReservar: Tutor;
}

interface Tutor {
  nombre: string;
  especialidad: string;
  calificacion: number;
  resenasCount: number;
  imagen: string;
  precioHora: number;
}

interface CalendarDate {
  key: string;
  dia: string;
  fecha: string; 
  seleccionado: boolean;
  habilitado: boolean;
}

const initialDates: CalendarDate[] = [
  { key: '18', dia: 'Sab', fecha: '18 oct', seleccionado: true, habilitado: true },
  { key: '19', dia: 'Dom', fecha: '19 oct', seleccionado: false, habilitado: true },
  { key: '20', dia: 'Lun', fecha: '20 oct', seleccionado: false, habilitado: true },
  { key: '21', dia: 'Mar', fecha: '21 oct', seleccionado: false, habilitado: true },
  { key: '22', dia: 'Mié', fecha: '22 oct', seleccionado: false, habilitado: true },
  { key: '23', dia: 'Jue', fecha: '23 oct', seleccionado: false, habilitado: true },
  { key: '24', dia: 'Vie', fecha: '24 oct', seleccionado: false, habilitado: true },
];

const duraciones = [
  { label: '30 min', valor: 30 },
  { label: '60 min (1 hora)', valor: 60 },
  { label: '90 min', valor: 90 },
  { label: '120 min (2 horas)', valor: 120 },
];

const Reserva: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Hooks siempre antes de condiciones
  const [fechasCalendario, setFechasCalendario] = useState<CalendarDate[]>(initialDates);
  const [duracionSeleccionada, setDuracionSeleccionada] = useState<number>(60);
  const [notasClase, setNotasClase] = useState<string>('');
  const [modalidadClase, setModalidadClase] = useState<string>('Online');

  const tutor = (location.state as LocationState)?.tutorAReservar;

  // ✅ Maneja redirección con useEffect
  useEffect(() => {
    if (!tutor) {
      navigate('/busqueda');
    }
  }, [tutor, navigate]);

  if (!tutor) {
    return <div className="reserva-container">Redirigiendo...</div>;
  }

  const precioBasePorMinuto = tutor.precioHora / 60;
  const precioClase = precioBasePorMinuto * duracionSeleccionada;
  const tarifaPlataforma = 2.5;
  const totalPagar = precioClase + tarifaPlataforma;

  const handleDateSelect = (selectedKey: string) => {
    setFechasCalendario(prevDates =>
      prevDates.map(date => ({
        ...date,
        seleccionado: date.key === selectedKey,
      }))
    );
  };

  const fechaSeleccionada = fechasCalendario.find(date => date.seleccionado);

  return (
    <div className="reserva-container">
      <div className="top-bar-placeholder"></div>

      <header className="reserva-header">
        <button className="back-button" onClick={() => navigate(-1)}>{'<'} Volver</button>
        <h2 className="header-title">Reservar Clase</h2>
      </header>

      <div className="reserva-main-content">
        {/* Columna Izquierda */}
        <div className="reserva-details-column">
          <section className="tutor-info">
            <div className="tutor-profile">
              <img 
                src={tutor.imagen || 'placeholder.jpg'}
                alt={`Foto de ${tutor.nombre}`} 
                className="tutor-image" 
              />
              <div>
                <h3 className="tutor-name">{tutor.nombre}</h3>
                <p className="tutor-profession">Profesora de {tutor.especialidad}</p>
                <p className="tutor-rating">⭐ {tutor.calificacion.toFixed(1)} ({tutor.resenasCount} reviews)</p>
              </div>
            </div>
            <p className="tutor-price">${tutor.precioHora.toFixed(2)} por hora</p>
          </section>
          
          <section className="date-time-selector">
            <h4>Seleccionar Fecha y Hora</h4>
            <div className="calendar-controls">
              <button className="control-button">{'<'} Anterior</button>
              <span className="current-month">octubre de 2025</span>
              <button className="control-button">Siguiente {'>'}</button>
            </div>
            <div className="date-picker">
              {fechasCalendario.map((item) => (
                <div 
                  key={item.key} 
                  className={`date-item ${item.seleccionado ? 'selected' : ''} ${!item.habilitado ? 'disabled' : ''}`}
                  onClick={() => item.habilitado && handleDateSelect(item.key)}
                >
                  <span className="date-day">{item.dia}</span>
                  <span className="date-num">{item.key}</span>
                  <span className="date-month" style={{fontSize: '10px'}}>{item.fecha.split(' ')[1]}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="class-details">
            <h4>Detalles de la Clase</h4>
            <div className="detail-item">
              <label htmlFor="duration-select">Duración de la clase</label>
              <select 
                id="duration-select" 
                value={duracionSeleccionada}
                onChange={(e) => setDuracionSeleccionada(parseInt(e.target.value))}
              >
                {duraciones.map(d => (
                  <option key={d.valor} value={d.valor}>
                    {d.label} - ${((tutor.precioHora/60) * d.valor).toFixed(2)}
                  </option>
                ))}
              </select>
            </div>

            <div className="detail-item">
              <label>Modalidad de clase</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="modalidad" 
                    value="Online" 
                    checked={modalidadClase === 'Online'}
                    onChange={(e) => setModalidadClase(e.target.value)}
                  />
                  Clase Online
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="modalidad" 
                    value="Presencial" 
                    checked={modalidadClase === 'Presencial'}
                    onChange={(e) => setModalidadClase(e.target.value)}
                  />
                  Presencial (si aplica)
                </label>
              </div>
            </div>

            <div className="detail-item">
              <label htmlFor="notes-textarea">Notas para el tutor (opcional)</label>
              <textarea
                id="notes-textarea"
                placeholder="Describe qué temas te gustaría cubrir..."
                value={notasClase}
                onChange={(e) => setNotasClase(e.target.value)}
              />
            </div>
          </section>
        </div>

        {/* Columna Derecha */}
<div className="reserva-summary-column">
  <div className="summary-box">
      <h4>Resumen de Reserva</h4>
      
      <div className="summary-line">
          <span>Clase ({duracionSeleccionada}min):</span>
          <span>${precioClase.toFixed(2)}</span>
      </div>
      
      <div className="summary-line">
          <span>Tarifa de plataforma:</span>
          <span>${tarifaPlataforma.toFixed(2)}</span>
      </div>

      {/* 🔹 NUEVA LÍNEA: muestra la fecha seleccionada */}
      <div className="summary-line">
          <span>Fecha:</span>
          <span>{fechaSeleccionada ? fechaSeleccionada.fecha : "Selecciona una fecha"}</span>
      </div>

      <div className="summary-total">
          <span>Total:</span>
          <span>${totalPagar.toFixed(2)}</span>
      </div>

      <p className="security-note">
          🔒 Pago seguro proporcionado.
      </p>
      <p className="cancellation-note">
          Cancelación gratuita hasta **24h** antes.
      </p>

      <button className="confirm-button">
          Confirmar Reserva
      </button>
      
      <p className="terms-note">
          Al confirmar, aceptas nuestros <a href="#">términos de servicio</a> y <a href="#">política de cancelación</a>.
      </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Reserva;
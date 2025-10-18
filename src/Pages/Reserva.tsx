// Pages/Reserva.tsx (Adaptación de ReservaClase.tsx)

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/ReservaClase.css'; 

// --- 1. Definición de Tipos y Datos ---

// Definición de tipos de datos de la navegación
interface LocationState {
    tutorAReservar: Tutor;
}

// Interfaz para usar los datos del tutor (más completa para el resumen)
interface Tutor {
    nombre: string;
    especialidad: string;
    calificacion: number;
    resenasCount: number;
    imagen: string;
    precioHora: number; // Precio por 60 minutos
}


// Datos iniciales del calendario (Mock de octubre 2025 - similar al wireframe)
interface CalendarDate {
    key: string;
    dia: string;
    fecha: string; 
    seleccionado: boolean;
    habilitado: boolean; // Para simular disponibilidad
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
    // 1. Obtener el estado de la navegación (el objeto tutor)
    const location = useLocation();
    const navigate = useNavigate();
    
    // Accede al tutorAReservar
    const tutor = (location.state as LocationState)?.tutorAReservar;

    // Redirigir si no hay tutor (ej. acceso directo a /reserva)
    if (!tutor) {
        navigate("/busqueda"); 
        return <div className="reserva-container">Cargando tutor o error. Redirigiendo...</div>;
    }
    
    // 2. Lógica de estado y datos
    const [fechasCalendario, setFechasCalendario] = useState<CalendarDate[]>(initialDates);
    const [duracionSeleccionada, setDuracionSeleccionada] = useState<number>(60); // Default 60 minutos
    const [notasClase, setNotasClase] = useState<string>('');
    const [modalidadClase, setModalidadClase] = useState<string>('Online'); // Default Online

    // Cálculos de Precios
    const precioBasePorMinuto = tutor.precioHora / 60; // Asumimos tutor.precioHora es por 60 minutos
    const precioClase = precioBasePorMinuto * duracionSeleccionada; 
    const tarifaPlataforma = 2.50; // Tarifa fija
    const totalPagar = precioClase + tarifaPlataforma;

    // Manejador de selección de fecha
    const handleDateSelect = (selectedKey: string) => {
        setFechasCalendario(prevDates => 
            prevDates.map(date => ({
                ...date,
                seleccionado: date.key === selectedKey, 
            }))
        );
    };

    // Obtenemos la fecha seleccionada para mostrarla en el resumen
    const fechaSeleccionada = fechasCalendario.find(date => date.seleccionado);


    return (
        <div className="reserva-container">
            <div className="top-bar-placeholder">
                {/* Esta barra simularía el NavBar superior que ya tienes en la imagen 1 */}
            </div>

            <header className="reserva-header">
                <button className="back-button" onClick={() => navigate(-1)}>{'<'} Volver</button>
                <h2 className="header-title">Reservar Clase</h2>
            </header>

            <div className="reserva-main-content">
                
                {/* Columna Izquierda: Detalles y Formulario */}
                <div className="reserva-details-column">
                    <section className="tutor-info">
                        <div className="tutor-profile">
                            <img 
                                src={tutor.imagen || 'placeholder.jpg'} // Usar un placeholder si no hay imagen
                                alt={`Foto de ${tutor.nombre}`} 
                                className="tutor-image" 
                            />
                            <div>
                                <h3 className="tutor-name">{tutor.nombre}</h3>
                                <p className="tutor-profession">Profesora de **{tutor.especialidad}**</p>
                                <p className="tutor-rating">
                                    ⭐ **{tutor.calificacion.toFixed(1)}** ({tutor.resenasCount} reviews)
                                </p>
                            </div>
                        </div>
                        <p className="tutor-price">${tutor.precioHora.toFixed(2)} **por hora**</p>
                    </section>
                    
                    {/* Selector de Fecha y Hora */}
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
                        
                        {/* Aquí iría un selector de horas disponible, lo omitimos por simplicidad de estado */}
                        <div className="time-slots-placeholder">
                            {/* Horas disponibles (Ejemplo: 10:00, 11:00, 12:00...) */}
                        </div>

                    </section>

                    {/* Detalles de la Clase */}
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
                                placeholder="Describe qué temas te gustaría cubrir en esta clase..."
                                value={notasClase}
                                onChange={(e) => setNotasClase(e.target.value)}
                            />
                        </div>

                    </section>
                </div>

                {/* Columna Derecha: Resumen de Reserva */}
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
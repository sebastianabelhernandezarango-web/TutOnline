import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/PerfilTutor.css";

interface Tutor {
  id: number;
  nombre: string;
  especialidad: string;
  descripcion: string;
  calificacion: number;
  imagen: string;
  precioHora: number;
  resenasCount: number;
  experienciaAnios: number;
  colorFondo: string;
  siglas: string;
  verificado: boolean;
  especialidadesTarjeta: string[];
  distancia: string;
  tiempoRespuesta: string;
  disponibilidad: string;
  ubicacion: string;
  disponibilidadOnline: boolean;
  especialidadesDetalle: string[];
  bioDetallada: string;
  experienciaLaboral: {
    puesto: string;
    empresa: string;
    periodo: string;
    detalle: string;
  }[];
  metodologia: string[];
  estadisticas: {
    activos: number;
    clases: string;
    repeticion: string;
    puntualidad: string;
    respuesta: string;
    conexion: string;
    idiomas: string;
    miembroDesde: number;
  };
}

const BusquedaTutores: React.FC = () => {
  const [busqueda, setBusqueda] = useState("");
  const [tutorSeleccionado, setTutorSeleccionado] = useState<Tutor | null>(null);
  const [seccionActiva, setSeccionActiva] = useState<"Acerca de" | "Horarios" | "Reseñas">("Acerca de");

  const navigate = useNavigate();

  const handleReservarClick = (tutor: Tutor) => {
    navigate("/reserva", { state: { tutorAReservar: tutor } });
  };

  const tutores: Tutor[] = [
    {
      id: 1,
      nombre: "María González",
      especialidad: "Matemáticas",
      descripcion:
        "Profesora de matemáticas con amplia experiencia en preparación universitaria.",
      calificacion: 4.9,
      resenasCount: 127,
      imagen: "https://randomuser.me/api/portraits/women/45.jpg",
      precioHora: 25,
      experienciaAnios: 5,
      colorFondo: "#1e3a8a",
      siglas: "MG",
      verificado: true,
      especialidadesTarjeta: ["Álgebra", "Cálculo", "Geometría"],
      distancia: "2.3 km",
      tiempoRespuesta: "15 min",
      disponibilidad: "Disponible hoy",
      ubicacion: "Ciudad de México, México",
      disponibilidadOnline: true,
      especialidadesDetalle: ["Álgebra", "Cálculo", "Geometría", "Trigonometría", "Estadística"],
      bioDetallada:
        "Soy María González, profesora de matemáticas con más de 5 años de experiencia enseñando desde nivel secundario hasta universitario.",
      experienciaLaboral: [
        {
          puesto: "Tutora Online",
          empresa: "TutoresOnline",
          periodo: "2020 - Presente",
          detalle: "Clases personalizadas de matemáticas online",
        },
      ],
      metodologia: ["Evaluación inicial", "Explicaciones paso a paso"],
      estadisticas: {
        activos: 45,
        clases: "850+",
        repeticion: "95%",
        puntualidad: "99%",
        respuesta: "2 horas",
        conexion: "Hace 1 hora",
        idiomas: "Español, Inglés",
        miembroDesde: 2020,
      },
    },
    {
      id: 2,
      nombre: "Carlos Pérez",
      especialidad: "Física",
      descripcion:
        "Físico especializado en mecánica cuántica y preparación para olimpiadas.",
      calificacion: 4.8,
      resenasCount: 89,
      imagen: "https://randomuser.me/api/portraits/men/52.jpg",
      precioHora: 22,
      experienciaAnios: 7,
      colorFondo: "#7c3aed",
      siglas: "CP",
      verificado: true,
      especialidadesTarjeta: ["Mecánica", "Termodinámica", "Óptica"],
      distancia: "4.1 km",
      tiempoRespuesta: "10 min",
      disponibilidad: "Disponible mañana",
      ubicacion: "Bogotá, Colombia",
      disponibilidadOnline: true,
      especialidadesDetalle: ["Mecánica", "Termodinámica", "Óptica", "Relatividad"],
      bioDetallada:
        "Apasionado por la tecnología y la enseñanza. Aprenderás física de forma práctica.",
      experienciaLaboral: [
        {
          puesto: "Profesor Universitario",
          empresa: "Universidad Nacional",
          periodo: "2018 - Presente",
          detalle: "Clases de física avanzada",
        },
      ],
      metodologia: ["Ejercicios prácticos", "Simulaciones", "Proyectos"],
      estadisticas: {
        activos: 20,
        clases: "300+",
        repeticion: "85%",
        puntualidad: "98%",
        respuesta: "4 horas",
        conexion: "Hace 3 horas",
        idiomas: "Español",
        miembroDesde: 2021,
      },
    },
  ];

  const tutoresFiltrados = tutores.filter(
    (t) =>
      t.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.especialidad.toLowerCase().includes(busqueda.toLowerCase())
  );

  const PerfilDetallado: React.FC<{
    tutor: Tutor;
    setTutorSeleccionado: (t: Tutor | null) => void;
    onReservar: (t: Tutor) => void;
  }> = ({ tutor, setTutorSeleccionado, onReservar }) => (
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
                <span className="precio">
                  ${tutor.precioHora} <small>por hora</small>
                </span>
              </div>
              <p className="profesion">Profesor de {tutor.especialidad}</p>
              <p className="meta-info">
                <span className="estrellas">⭐ {tutor.calificacion}</span> ({tutor.resenasCount} reseñas)
              </p>
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

  return (
    <div className="contenedor-tutores">
      <h1 className="titulo-busqueda">Encuentra a tu tutor ideal</h1>
      <input
        type="text"
        placeholder="Buscar por nombre o materia..."
        className="barra-busqueda"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {!tutorSeleccionado ? (
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
                  <p>⭐ {tutor.calificacion} ({tutor.resenasCount})</p>
                  <p>${tutor.precioHora}/h</p>
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
      ) : (
        <PerfilDetallado
          tutor={tutorSeleccionado}
          setTutorSeleccionado={setTutorSeleccionado}
          onReservar={handleReservarClick}
        />
      )}
    </div>
  );
};

export default BusquedaTutores;

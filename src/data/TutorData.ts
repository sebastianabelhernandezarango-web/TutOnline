export interface Tutor {
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

export const TUTORES_DATA: Tutor[] = [
  {
    id: 1,
    nombre: "María López",
    especialidad: "Matemáticas",
    descripcion: "Apasionada por enseñar matemáticas de manera práctica y sencilla.",
    calificacion: 4.9,
    imagen: "https://randomuser.me/api/portraits/women/68.jpg",
    precioHora: 40000,
    resenasCount: 120,
    experienciaAnios: 5,
    colorFondo: "#8E44AD",
    siglas: "ML",
    verificado: true,
    especialidadesTarjeta: ["Álgebra", "Cálculo", "Geometría"],
    distancia: "2 km",
    tiempoRespuesta: "15 min",
    disponibilidad: "Disponible",
    ubicacion: "Barranquilla, Atlántico",
    disponibilidadOnline: true,
    especialidadesDetalle: ["Cálculo diferencial", "Cálculo integral", "Geometría analítica"],
    bioDetallada:
      "Ingeniera de sistemas apasionada por la enseñanza de las matemáticas y la programación. Me enfoco en que mis estudiantes comprendan de verdad los conceptos, no solo los memoricen.",
    experienciaLaboral: [
      {
        puesto: "Tutora de Matemáticas",
        empresa: "Academia EduMath",
        periodo: "2020 - Actualidad",
        detalle: "He ayudado a estudiantes universitarios y de colegio a superar el miedo a las matemáticas.",
      },
    ],
    metodologia: ["Aprendizaje práctico", "Ejemplos de la vida real", "Evaluaciones cortas"],
    estadisticas: {
      activos: 12,
      clases: "Más de 200 clases",
      repeticion: "95%",
      puntualidad: "99%",
      respuesta: "Rápida",
      conexion: "Excelente",
      idiomas: "Español, Inglés",
      miembroDesde: 2021,
    },
  },

  {
    id: 2,
    nombre: "Carlos Ramírez",
    especialidad: "Programación",
    descripcion: "Desarrollador full stack con pasión por enseñar JavaScript, React y Node.js.",
    calificacion: 4.8,
    imagen: "https://randomuser.me/api/portraits/men/32.jpg",
    precioHora: 50000,
    resenasCount: 98,
    experienciaAnios: 6,
    colorFondo: "#2980B9",
    siglas: "CR",
    verificado: true,
    especialidadesTarjeta: ["JavaScript", "React", "Node.js"],
    distancia: "5 km",
    tiempoRespuesta: "10 min",
    disponibilidad: "Disponible",
    ubicacion: "Soledad, Atlántico",
    disponibilidadOnline: true,
    especialidadesDetalle: ["Frontend", "Backend", "Bases de datos", "APIs REST"],
    bioDetallada:
      "Soy ingeniero de software con experiencia en desarrollo web moderno. Me encanta ayudar a otros a dominar la programación con ejercicios prácticos.",
    experienciaLaboral: [
      {
        puesto: "Desarrollador Web",
        empresa: "TechNova",
        periodo: "2018 - Actualidad",
        detalle: "Trabajo con tecnologías modernas y apoyo a nuevos programadores en su proceso de aprendizaje.",
      },
    ],
    metodologia: ["Aprender haciendo", "Proyectos reales", "Retroalimentación personalizada"],
    estadisticas: {
      activos: 15,
      clases: "Más de 250 clases",
      repeticion: "93%",
      puntualidad: "97%",
      respuesta: "Muy rápida",
      conexion: "Excelente",
      idiomas: "Español, Inglés técnico",
      miembroDesde: 2020,
    },
  },

  {
    id: 3,
    nombre: "Laura Martínez",
    especialidad: "Inglés",
    descripcion: "Profesora certificada en enseñanza del inglés con 8 años de experiencia internacional.",
    calificacion: 5.0,
    imagen: "https://randomuser.me/api/portraits/women/12.jpg",
    precioHora: 45000,
    resenasCount: 180,
    experienciaAnios: 8,
    colorFondo: "#27AE60",
    siglas: "LM",
    verificado: true,
    especialidadesTarjeta: ["Conversación", "Gramática", "TOEFL"],
    distancia: "Barranquilla centro",
    tiempoRespuesta: "20 min",
    disponibilidad: "Disponible",
    ubicacion: "Barranquilla, Atlántico",
    disponibilidadOnline: true,
    especialidadesDetalle: ["Inglés conversacional", "Preparación TOEFL", "Inglés profesional"],
    bioDetallada:
      "He enseñado inglés a estudiantes de diferentes países. Mi meta es ayudarte a comunicarte con confianza.",
    experienciaLaboral: [
      {
        puesto: "Instructora de inglés",
        empresa: "EnglishPlus Academy",
        periodo: "2015 - Actualidad",
        detalle: "Formé más de 400 estudiantes en programas de inglés intensivo.",
      },
    ],
    metodologia: ["Conversaciones naturales", "Corrección constructiva", "Dinámicas de escucha y lectura"],
    estadisticas: {
      activos: 20,
      clases: "Más de 300 clases",
      repeticion: "98%",
      puntualidad: "100%",
      respuesta: "Rápida",
      conexion: "Excelente",
      idiomas: "Español, Inglés nativo",
      miembroDesde: 2019,
    },
  },

  {
    id: 4,
    nombre: "Andrés Torres",
    especialidad: "Física",
    descripcion: "Profesor universitario con enfoque en física moderna y aplicaciones prácticas.",
    calificacion: 4.7,
    imagen: "https://randomuser.me/api/portraits/men/41.jpg",
    precioHora: 42000,
    resenasCount: 85,
    experienciaAnios: 10,
    colorFondo: "#E67E22",
    siglas: "AT",
    verificado: false,
    especialidadesTarjeta: ["Mecánica", "Electromagnetismo", "Termodinámica"],
    distancia: "4 km",
    tiempoRespuesta: "30 min",
    disponibilidad: "Disponible",
    ubicacion: "Malambo, Atlántico",
    disponibilidadOnline: false,
    especialidadesDetalle: ["Física básica", "Física cuántica", "Ondas y óptica"],
    bioDetallada:
      "Soy físico con más de 10 años de experiencia enseñando a nivel universitario. Me gusta conectar la teoría con la realidad cotidiana.",
    experienciaLaboral: [
      {
        puesto: "Docente de Física",
        empresa: "Universidad de la Costa (CUC)",
        periodo: "2014 - Actualidad",
        detalle: "Diseño clases que ayudan a los estudiantes a visualizar la física de forma práctica.",
      },
    ],
    metodologia: ["Aprendizaje experimental", "Uso de simuladores", "Ejercicios guiados"],
    estadisticas: {
      activos: 10,
      clases: "Más de 150 clases",
      repeticion: "91%",
      puntualidad: "96%",
      respuesta: "Moderada",
      conexion: "Buena",
      idiomas: "Español",
      miembroDesde: 2018,
    },
  },
];

import { useNavigate } from "react-router-dom";
import "../Styles/LandingPage.css";
import lupa from "../Img/icons/Lupa.png";
import mundo from "../Img/icons/alrededor-del-mundo.png";
import libros from "../Img/icons/pila-de-libros.png";

interface LandingPageProps {
  user: { name: string } | null;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function LandingPage({ user, setShowLogin }: LandingPageProps)  {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* 🧠 Encabezado */}
      <h2 className="titulo">Encuentra el tutor perfecto para tu aprendizaje</h2>
      <p className="parrafo">
        Conecta con tutores expertos en más de 100 materias. Clases online personalizadas al mejor precio.
      </p>

      {/* Estado del usuario */}
      <p className="text-center">
        {user
          ? "¡Bienvenido de nuevo!"
          : "Bienvenido, por favor inicia sesión o regístrate"}
      </p>

      {/* 🔍 Barra de búsqueda */}
      <div className="search-bar">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Busca una materia (ej. Matemáticas, Inglés...)"
          />
          <button className="btn btn-primary" onClick={() => navigate("/busqueda")}>
            Buscar
          </button>
        </div>

        <div className="sugerencias">
          <span className="chip">Matemáticas</span>
          <span className="chip">Inglés</span>
          <span className="chip">Programación</span>
          <span className="chip">Historia</span>
          <span className="chip">Física</span>
          <span className="chip">Diseño</span>
        </div>
      </div>

      {/* 📊 Sección de estadísticas */}
      <section className="estadisticas py-5 text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <h2 className="fw-bold text-primary">+100</h2>
              <p className="text-muted">Tutores expertos</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold text-primary">+500</h2>
              <p className="text-muted">Estudiantes activos</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold text-primary">4.8⭐</h2>
              <p className="text-muted">Calificación promedio</p>
            </div>
          </div>
        </div>
      </section>

      {/* 👩‍🏫 Tutores destacados */}
      <section className="tutores-destacados py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-5">Tutores Destacados</h2>
          <div className="row g-4 justify-content-center">
            {[
              { nombre: "María González", area: "Matemáticas", color: "primary", iniciales: "MG" },
              { nombre: "Carlos Ruiz", area: "Física", color: "purple", iniciales: "CR" },
              { nombre: "Ana López", area: "Inglés", color: "success", iniciales: "AL" },
              { nombre: "Luis Torres", area: "Programación", color: "danger", iniciales: "LT" },
            ].map((tutor, index) => (
              <div className="col-md-3" key={index}>
                <div className="card p-4 shadow-sm h-100">
                  <div className={`circle bg-${tutor.color} text-white mx-auto mb-3`}>
                    {tutor.iniciales}
                  </div>
                  <h5>{tutor.nombre}</h5>
                  <p className="text-muted mb-1">{tutor.area}</p>
                  <p>⭐ 4.9 (120)</p>
                  <p className={`text-${tutor.color} fw-bold`}>$15/hora</p>
                </div>
              </div>
            ))}
          </div>

          <button
  className="btn btn-primary mt-4"
  onClick={() => {
    if (user) {
      navigate("/busqueda"); // Usuario activo → ir a búsqueda
    } else {
      setShowLogin(true);    // Usuario no activo → mostrar login
    }
  }}
>
  Ver todos los tutores
</button>

        </div>
      </section>

      {/* 🧭 Sección Cómo funciona */}
      <section id="como-funciona" className="como-funciona py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-5">¿Cómo funciona?</h2>
          <div className="pasos-container">
            <div className="paso">
              <img src={lupa} alt="Paso 1" />
              <h5>1. Busca tu materia</h5>
              <p>Encuentra tutores expertos en la asignatura que necesitas.</p>
            </div>

            <div className="paso">
              <img src={mundo} alt="Paso 2" />
              <h5>2. Reserva tu clase</h5>
              <p>Elige la hora que prefieras y agenda tu sesión fácilmente.</p>
            </div>

            <div className="paso">
              <img src={libros} alt="Paso 3" />
              <h5>3. Aprende en línea</h5>
              <p>Conéctate por videollamada y mejora tus conocimientos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🌈 Hero */}
      <section className="hero-section text-center py-5 position-relative overflow-hidden">
        <div className="hero-bg">
          <div className="circle top-left"></div>
          <div className="circle bottom-right"></div>
        </div>

        <div className="container position-relative">
          <h1 className="fw-bold">
            Encuentra a tu tutor ideal en{" "}
            <span className="text-primary">TutOnline</span>
          </h1>
          <p className="lead text-muted">
            Conéctate con tutores certificados en las materias que necesitas, aprende a tu ritmo y desde cualquier lugar.
          </p>

         <button
  className="btn btn-primary btn-lg mt-3"
  onClick={() => {
    if (user) {
      navigate("/dashboard"); 
    } else {
      setShowLogin(true);    
    }
  }}
>
  Comienza ahora
</button>


        </div>
      </section>

      {/* ⚙️ Footer */}
      <footer className="text-center py-4 bg-dark text-white">
        <p className="mb-0">© 2025 TutOnline. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

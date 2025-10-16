import "../Styles/LandingPage.css";
import lupa from "../Img/icons/Lupa.png";
import mundo from "../Img/icons/alrededor-del-mundo.png";
import libros from "../Img/icons/pila-de-libros.png";

// Props tipadas
interface LandingPageProps {
  user: { name: string } | null;
}

function LandingPage({ user }: LandingPageProps) {
  return (
    <div className="landing-page">
      <h2 className="titulo">
        Encuentra el tutor perfecto para tu aprendizaje
      </h2>
      <p className="parrafo">
        Conecta con tutores expertos en más de 100 materias. Clases online personalizadas al mejor precio.
      </p>

      {/* Ejemplo de uso de la prop user */}
      <p className="text-center">
        {user === null
          ? "Bienvenido, por favor inicia sesión o regístrate"
          : user
          ? "¡Bienvenido de nuevo!"
          : "No estás logueado"}
      </p>

    <div className="search-bar">
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Busca una materia (ej. Matemáticas, Inglés...)" />
      <button className="btn btn-primary">Buscar</button>
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

    

    {/* Sección Datos destacados */}
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

      {/* Sección Tutores destacados */}
      <section className="tutores-destacados py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-5">Tutores Destacados</h2>
          <div className="row g-4 justify-content-center">
            {/* Tutor 1 */}
            <div className="col-md-3">
              <div className="card p-4 shadow-sm h-100">
                <div className="circle bg-primary text-white mx-auto mb-3">MG</div>
                <h5>María González</h5>
                <p className="text-muted mb-1">Matemáticas</p>
                <p>⭐ 4.9 (120)</p>
                <p className="text-primary fw-bold">$15/hora</p>
              </div>
            </div>
            {/* Tutor 2 */}
            <div className="col-md-3">
              <div className="card p-4 shadow-sm h-100">
                <div className="circle bg-purple text-white mx-auto mb-3">CR</div>
                <h5>Carlos Ruiz</h5>
                <p className="text-muted mb-1">Física</p>
                <p>⭐ 4.9 (120)</p>
                <p className="text-purple fw-bold">$15/hora</p>
              </div>
            </div>
            {/* Tutor 3 */}
            <div className="col-md-3">
              <div className="card p-4 shadow-sm h-100">
                <div className="circle bg-success text-white mx-auto mb-3">AL</div>
                <h5>Ana López</h5>
                <p className="text-muted mb-1">Inglés</p>
                <p>⭐ 4.9 (120)</p>
                <p className="text-success fw-bold">$15/hora</p>
              </div>
            </div>
            {/* Tutor 4 */}
            <div className="col-md-3">
              <div className="card p-4 shadow-sm h-100">
                <div className="circle bg-danger text-white mx-auto mb-3">LT</div>
                <h5>Luis Torres</h5>
                <p className="text-muted mb-1">Programación</p>
                <p>⭐ 4.9 (120)</p>
                <p className="text-danger fw-bold">$15/hora</p>
              </div>
            </div>
          </div>

          <button className="btn btn-primary mt-4">Ver todos los tutores</button>
        </div>
      </section>



           {/* Sección como funcion*/} 
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


      {/* Sección Hero */}
      <section className="hero-section text-center py-5 position-relative overflow-hidden">
        {/* Fondos difuminados tipo blur y gradiente */}
        <div className="hero-bg">
          <div className="circle top-left"></div>
          <div className="circle bottom-right"></div>
        </div>

        <div className="container position-relative">
          <h1 className="fw-bold">
            Encuentra a tu tutor ideal en <span className="text-primary">TutOnline</span>
          </h1>
          <p className="lead text-muted">
            Conéctate con tutores certificados en las materias que necesitas, aprende a tu ritmo y desde cualquier lugar.
          </p>
          <button className="btn btn-primary btn-lg mt-3">Comienza ahora</button>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="text-center py-4 bg-dark text-white">
        <p className="mb-0">© 2025 TutOnline. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}



export default LandingPage;

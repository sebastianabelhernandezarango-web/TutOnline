import "../Styles/Dashboard.css"
export default function DashBoardStudent() {
  return (
    <div className="dashboard-student container-fluid">
      <div className="row">
        {/* ======= Sidebar izquierdo ======= */}
        <aside className="col-lg-3 col-md-4 sidebar">
          <div className="profile-card">
            <img
              src="/img/student-profile.jpg"
              alt="Foto del estudiante"
              className="profile-img"
            />
            <h3>Juan Estudiante</h3>
            <p className="text-muted">Estudiante</p>
            <span className="plan-badge">Plan Básico</span>
          </div>

          <nav className="menu mt-4">
            <ul>
              <li className="active"><i className="bi bi-house-door"></i> Inicio</li>
              <li><i className="bi bi-search"></i> Buscar</li>
              <li><i className="bi bi-chat-dots"></i> Mensajes <span className="badge">3</span></li>
              <li><i className="bi bi-calendar-event"></i> Calendario <span className="badge">2</span></li>
              <li><i className="bi bi-gear"></i> Configuración</li>
            </ul>
          </nav>

          <div className="progress-card mt-4">
            <h6>Progreso del mes</h6>
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
            <small>8 / 10 clases completadas</small>
          </div>
        </aside>

        {/* ======= Feed principal ======= */}
        <main className="col-lg-6 col-md-8 feed">
          <div className="post-box mb-4">
            <div className="post-input">
              <img src="/img/student-profile.jpg" alt="Usuario" className="user-avatar" />
              <input
                type="text"
                placeholder="¿Qué estás aprendiendo hoy?"
                className="form-control"
              />
            </div>
          </div>

          {/* Ejemplo de publicación */}
          <div className="post-card">
            <div className="post-header">
              <div className="user-avatar">MG</div>
              <div>
                <h5>María González <span className="badge-area">Matemáticas</span></h5>
                <small>1250 seguidores · ⭐ 4.9 · hace 2h</small>
              </div>
              <button className="btn-follow">Siguiendo</button>
            </div>

            <p>
              🔥 ¡Nuevo método para resolver ecuaciones cuadráticas! He desarrollado una técnica visual que ha ayudado a mis estudiantes a mejorar un 40% en sus calificaciones.
            </p>

            <img src="/img/post-example.jpg" alt="Publicación" className="post-img" />

            <div className="post-actions">
              <span>👍 48</span>
              <span>💬 12</span>
              <span>🔗 Compartir</span>
              <button className="btn-solicitar">Solicitar clase</button>
            </div>
          </div>
        </main>

        {/* ======= Columna derecha ======= */}
        <aside className="col-lg-3 col-md-12 rightbar">
          <div className="card sugeridos">
            <h5>🎓 Tutores sugeridos</h5>
            <ul>
              <li>
                <div className="avatar tutor">LT</div>
                <div>
                  <strong>Laura Torres</strong>
                  <small>Programación</small>
                </div>
                <button className="btn-mini">Seguir</button>
              </li>
              <li>
                <div className="avatar tutor">SC</div>
                <div>
                  <strong>Santiago Cruz</strong>
                  <small>Química</small>
                </div>
                <button className="btn-mini">Seguir</button>
              </li>
            </ul>
          </div>

          <div className="card actividad mt-4">
            <h5>📘 Actividad reciente</h5>
            <ul>
              <li>✅ Clase completada: <strong>Matemáticas</strong></li>
              <li>🟢 Nueva conexión con Carlos Ruiz</li>
              <li>🏆 Logro desbloqueado: 10 clases</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

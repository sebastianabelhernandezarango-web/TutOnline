import ModalLogin from "../context/ModalLogin";

function LandingPage({ user }) {
  return (
    <div className="text-center mt-5">
      <h1>Bienvenido a TutOnline</h1>
      <p>Encuentra tutores por materia y reserva clases fácilmente.</p>

      {!user && (
        <div className="search-bar mt-3">
          <input type="text" className="form-control w-50 mx-auto" placeholder="Buscar por materia" />
        </div>
      )}

      <ModalLogin />
    </div>
  );
}

export default LandingPage;

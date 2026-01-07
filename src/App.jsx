import "./App.css";
import profil from "./assets/profil.jpg";

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="heroInner">
          <img src={profil} alt="Photo d'Alexandre" className="profilePic" />

          <div className="heroText">
            <h1 className="name">Alexandre Taieb</h1>
            <p className="subtitle">Étudiant en informatique — L1</p>

            <div className="links">
              <a href="https://github.com/tonpseudo" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:alexandre.taieb25@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="card">
          <h2>À propos</h2>
          <p>
            Étudiant en première année de licence d’informatique, sérieux et méthodique,
            avec une expérience professionnelle chez McDonald’s depuis 2024.
            Autonome et polyvalent, je fais preuve de rigueur et d’un bon esprit d’analyse
            dans les missions qui me sont confiées.
          </p>
        </section>

        <section className="card">
          <h2>Compétences</h2>
          <ul className="list">
            <li>HTML / CSS</li>
            <li>JavaScript (bases)</li>
            <li>Python / Java</li>
          </ul>
        </section>

        <section className="card full">
          <h2>Projets</h2>

          <div className="projectsGrid">
            <article className="projectCard">
              <div>
                <h3>Projet 1</h3>
                <p>Petite description + techno + lien</p>
              </div>
              <a className="btn" href="#">Voir</a>
            </article>

            <article className="projectCard">
              <div>
                <h3>Projet 2</h3>
                <p>Petite description + techno + lien</p>
              </div>
              <a className="btn" href="#">Voir</a>
            </article>
          </div>
        </section>

        <section className="card full">
          <h2>Contact</h2>
          <p>📍 Saint-Vit • 📧 alexandre.taieb25@gmail.com</p>
        </section>
      </main>

      <footer className="footerBleu">
        <small>© {new Date().getFullYear()} Alexandre — Fait avec React</small>
      </footer>
    </div>
  );
}

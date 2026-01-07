import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="card">
        <h1>Alexandre Taieb</h1>
        <p>Étudiante en informatique — L1 </p>

        <div className="links">
          <a href="https://github.com/tonpseudo" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:tonmail@gmail.com">Email</a>
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <h2>À propos</h2>
          <p>
            Je m’appelle Alexandre, j’étudie à l'université Marie et Louis Pasteur de Besançon.
          </p>
        </section>

        <section className="card">
          <h2>Compétences</h2>
          <ul>
            <li>HTML / CSS</li>
            <li>JavaScript (bases)</li>
            <li>Python / Java </li>
          </ul>
        </section>

        <section className="card">
          <h2>Projets</h2>
          <div className="project">
            <h3>Projet 1</h3>
            <p>Petite description + techno + lien</p>
            <a href="#" target="_blank" rel="noreferrer">Voir</a>
          </div>
          <div className="project">
            <h3>Projet 2</h3>
            <p>Petite description + techno + lien</p>
            <a href="#" target="_blank" rel="noreferrer">Voir</a>
          </div>
        </section>

        <section className="card">
          <h2>Contact</h2>
          <p>📍 Saint-Vit • 📧 alexandre.taieb25@gmail.com</p>
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Alexandre — Fait avec React</small>
      </footer>
    </div>
  );
}

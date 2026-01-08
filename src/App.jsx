import "./App.css";
import profil from "./assets/profil.jpg";
import java from "./assets/java.png";
import HTMLCSSJS from "./assets/HTMLCSSJS.png";

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="heroInner">
          <img src={profil} alt="Ma Photo" className="profilePic" />

          <div className="heroText">
            <h1 className="name">Alexandre Taieb</h1>
            <p className="subtitle">Étudiant en informatique — L1</p>

            <div className="links">
              <a href="https://github.com/Boumere" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/alexandre-taieb-b3a6b6383/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:alexandre.taieb25@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="card">
          <div className="cardTitle">
          <h2>À propos</h2>
          </div>
          <p>
            BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBl
            aBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
            BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
            BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
            BlaBlaBlaBlaBlaBlaBlaBlaBla
          </p>
        </section>

        <section className="card">
          <div className="cardTitle">
          <h2>Compétences</h2>
          </div>
          <div className="skillsGrid">
            <div className="skillCard">
              <img src={java} alt="Java Logo" className="skillLogo" />
              <h3 className="skillName">Java</h3>
              <p className="skillDesc">Language multiplateforme, orienté objet.</p>
            </div>

            <div className="skillCard">
              <img src={HTMLCSSJS} alt="HTML/CSS/JS Logo" className="skillLogo" />
              <h3 className="skillName" >HTML/CSS/JS</h3>
              <p className="skillDesc">Structure, mise en forme, responsive design, interaction et logique des pages web.</p>
            </div>
          </div>
        </section>

        <section className="card full">
          <div className="cardTitle">
          <h2>Projets</h2>
          </div>

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
          <div className="cardTitle">
          <h2>Contact</h2>
          </div>
          <p>📍 Saint-Vit • 📧 alexandre.taieb25@gmail.com</p>
        </section>
      </main>

      <footer className="footerBleu">
        <small>© {new Date().getFullYear()} Alexandre — Fait avec React</small>
      </footer>
    </div>
  );
}

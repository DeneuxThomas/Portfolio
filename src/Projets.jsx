//import
import "./scss/Projets.scss";

function Projets() {
  //state état donné(name, setname, useSate)

  //comportements

  //render
  return (
    <div className="container-projet">
      <div className="projet-titre text h2">
        <h2 className="projet-titre">Mes projets</h2>
      </div>
      <div className="projet-content">
        <div className="projet-grid">
          <div className="projet-item">
            <div className="projet-img">
              <img src="/medEcare.jpg" alt="medEcare" />
            </div>
            <div className="projet-item-content">
              <h3 className="projet-title">PWA d'une application médical</h3>
              <div className="projet-description text">
                Le projet Med eCare est une PWA (Progressive Web App) dédiée à
                la surveillance médicale des patients via divers capteurs
                (battements du cœur, température corporelle, etc.). Il offre
                trois espaces distincts (Médecin, Patient, Proche), chacun avec
                ses fonctionnalités spécifiques. Med eCare inclut un tutoriel
                d'installation via Docker et explique le processus de Pipeline
                CI/CD. Réalisé avec React, Vite, NodeJS, MariaDB et Docker.
              </div>
            </div>

            <div className="projet-lien">
              <a
                className="text"
                href="https://github.com/DeneuxThomas/med-ecare"
              >
                Lien vers le code source
              </a>
            </div>
          </div>

          <div className="projet-item">
            <div className="projet-img">
              <img src="/billard.jpeg.png" alt="billard" />
            </div>
            <div className="projet-item-content">
              <h3 className="projet-title">
                Ensemble de projet fait en processing
              </h3>
              <div className="projet-description text">
                Ensemble de 3 projets réaliser en processing grâce à de la
                modélisation mathématique pour montrer le pendule de newton, un
                jeu de billard américain et le calcul de pi avec des collision
                de cube. Il y a un document pdf qui explique en détail le
                fonctionnement de chaque projet.
              </div>
            </div>
            <div className="projet-lien">
              <a
                className="text"
                href="https://github.com/DeneuxThomas/projets-processing"
              >
                Lien vers le code source
              </a>
            </div>
          </div>

          <div className="projet-item">
            <div className="projet-img">
              <img src="/killbique.jpg" alt="killbique" />
            </div>
            <div className="projet-item-content">
              <h3 className="projet-title">
                Projet jeu de plateau (Kill Bique)
              </h3>
              <div className="projet-description text">
                Projets de création d'un jeu dans le cadre de ma formation a
                l'IUT Nice Côte d'Azur au département informatique en 2ème
                année. Ce projet a été réalisé en moins de 5 mois avec des
                rendus environ tous les mois et demi. Il a été réalisé en équipe
                de 6.
              </div>
            </div>
            <div className="projet-lien">
              <a
                className="text"
                href="https://www.youtube.com/watch?v=VpqWiAmdMWk"
              >
                Lien vers la video de présentation
              </a>
            </div>
          </div>

          <div className="projet-item">
            <div className="projet-img">
              <img src="/map.png" alt="map" />
            </div>
            <div className="projet-item-content">
              <h3 className="projet-title">Carte du monde threeJS</h3>
              <div className="projet-description text">
                Projet de modélisation du globe terrestre avec la geolocalision
                et un l'importation d'une bande de donné pour placé le drapeau
                correspondant au pays.
              </div>
            </div>
            <div className="projet-lien">
              <a
                className="text"
                href="https://deneuxthomas.github.io/CartoTD4/Exo1/index.html"
              >
                Lien vers le code source
              </a>
            </div>
          </div>

          <div className="projet-item">
            <div className="projet-img">
              <img src="/clothilde.jpg" alt="clothilde" />
            </div>
            <div className="projet-item-content">
              <h3 className="projet-title">
                Réalisation du site Clotilde Herman
              </h3>
              <div className="projet-description text">
                Intégration du site Clotilde Herman et mise en ligne officiel.
                Site web réalisé sous WordPress durant mon stage chez IDEAL COM
              </div>
            </div>
            <div className="projet-lien">
              <a className="text" href="https://clotildeherman.maison/">
                Lien vers le site
              </a>
            </div>
          </div>

          <div className="projet-item">
            <div className="projet-img">
              <img src="/ISABELLE_ISINGRINI.jpg" alt="ISINGRINI" />
            </div>
            <div className="projet-item-content">
              <h3 className="projet-title">
                Réalisation du site ISABELLE ISINGRINI
              </h3>
              <div className="projet-description text">
                Intégration du site ISABELLE ISINGRINI et mise en ligne
                officiel. Site web réalisé sous WordPress durant mon stage chez
                IDEAL COM
              </div>
            </div>
            <div className="projet-lien">
              <a className="text" href="https://www.excellence-coach.fr/">
                Lien vers le site
              </a>
            </div>
          </div>

          <div className="projet-item">
            <div className="projet-img">
              <img src="/Stim_Studio.jpg" alt="Stim_Studio" />
            </div>
            <div className="projet-item-content">
              <h3 className="projet-title">
                Participation à la réalisation du site Stim Studio
              </h3>
              <div className="projet-description text">
                Intégration du site Stim Studio et mise en ligne officiel. Site
                web réalisé sous le propre back office de l'entreprise IDEAL COM
              </div>
            </div>
            <div className="projet-lien">
              <a className="text" href="https://www.stimstudio.com/en/">
                Lien vers le site
              </a>
            </div>
          </div>

          <div className="projet-item">
            <div className="projet-img">
              <img src="/descktop_builder.jpg" alt="descktop_builder" />
            </div>
            <div className="projet-item-content">
              <h3 className="projet-title">Site d'ecommerce</h3>
              <div className="projet-description text">
                Site d'e-commerce réaliser un PHP html css et js
              </div>
            </div>
            <div className="projet-lien">
              <a
                className="text"
                href="https://github.com/heidman06/e-commerce-website"
              >
                Lien vers le code source
              </a>
            </div>
          </div>

          <div className="projet-item">
            <div className="projet-img">
              <img src="/pokemon.jpg" alt="pokemon" />
            </div>
            <div className="projet-item-content">
              <h3 className="projet-title">PokaePokemon</h3>
              <div className="projet-description text">
                Le projet consistes à implémenter une version simplifiée du Jeu
                Pokemon. Seule les 151 Pokemon de la première génération sans
                objets, ni inventaire, ni Pokemon sauvages, etc... Seulement des
                combats ! Le projet inclut la création d'IA pour des dresseurs
                de Pokemon afin de pouvoir : jouer contre la machine.
              </div>
            </div>
            <div className="projet-lien">
              <a
                className="text"
                href="https://github.com/DeneuxThomas/Projet-PokaePokemon"
              >
                Lien vers le code source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projets;

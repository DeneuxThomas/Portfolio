//import
import "./scss/Qualites.scss";

function Qualites() {
  //state état donné(name, setname, useSate)

  //comportements

  //render
  return (
    <div className="container-qualites">
      <div className="qualites-titre text h2">
        <h2 className="qualites-titre">Mes qualités</h2>
      </div>
      <div className="qualites-content">
        <div className="qualites-grid">
          <div className="qualites-item">
            <h3 className="item-title">Rigoureux</h3>
            <div className="item-description text">
              <p className="qualites-text">
                J'ai des objectifs clairs que je compte accomplir, comme obtenir
                un Bac+3, intégrer un master MIAGE, rejoindre une entreprise de
                renom dans laquelle j'évoluerai pour enfin devenir chef de
                projet informatique.
              </p>
              <p className="qualites-text">
                Je pratique quotidiennement la musculation en suivant un
                programme que je me suis fixé en fonction de mes objectifs. Il
                en va de même pour ce qui concerne la nutrition.
              </p>
              <p className="qualites-text">
                Lors d'un projet ou d'une tâche, je tiens particulièrement à
                respecter les deadlines pour faciliter l'avancement du projet et
                atteindre les objectifs.
              </p>
            </div>
          </div>

          <div className="qualites-item">
            <h3 className="item-title">Autonomme</h3>
            <div className="item-description text">
              <p className="qualites-text">
                J'entretiens une veille technologique sur les nouvelles
                technologies, notamment celles du web, pour être au courant des
                avancées qui pourraient m'être utiles dans mes projets
                personnels et professionnels.
              </p>
              <p className="qualites-text">
                Durant mon alternance dans l'entreprise DSG-IT, j'ai dû
                m'auto-former sur leur application en suivant de nombreux
                documents. J'ai également appris à créer mes propres outils
                (plugins WordPress) pour répondre aux demandes qui m'étaient
                faites.
              </p>
            </div>
          </div>

          <div className="qualites-item">
            <h3 className="item-title">Organisé</h3>
            <div className="item-description text">
              <p className="qualites-text">
                C'est durant ma formation à l'IUT que j'ai compris que
                l'organisation était primordiale. En quittant toute ma famille
                et mes connaissances à plus de 1000 km pour vivre seul dans un
                appartement, j'ai dû apprendre à bien m'organiser avec la
                gestion de la maison, le sport, l'école, et le travail. Cette
                dernière année, j'ai été en colocation, ce qui m'a également
                permis de réaliser que cette qualité est fondamentale.
              </p>
            </div>
          </div>

          <div className="qualites-item">
            <h3 className="item-title">Bon relationnel</h3>
            <div className="item-description text">
              <p className="qualites-text">
                Bien que capable de travailler seul, j'ai été amené à travailler
                en équipe de nombreuses fois. Cela m'a permis d'acquérir une
                meilleure qualité d'écoute et d'expression de mes idées pour
                avancer le plus efficacement possible dans un projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualites;

//import
import "./scss/Apropos.scss";

function APropos() {
  //state état donné(name, setname, useSate)

  //comportements

  //render
  return (
    <div className="container-apropos">
      <div className="apropos-presentaion-gauche">
        <div className="apropos-titre text h2">
          <h2>A propos de moi</h2>
        </div>
        <p className="apropos-paragraphe text">
          Actuellement en alternance à l'IUT Informatique de Sophia Antipolis,
          ma passion pour l'informatique s'est développée au fil des années,
          notamment dans le domaine du développement web. Mon objectif actuel
          est d'obtenir un diplôme Bac+3 grâce à ma formation en cours, et à
          plus long terme, je prévois de créer ma propre entreprise en ligne.
        </p>
        <p className="apropos-paragraphe text">
          Je suis actuellement employé chez IANDI, où je participe au
          développement de leur logiciel 1SPECT, une solution complète de
          gestion dédiée aux métiers de l'inspection. Cette expérience me permet
          d'approfondir mes compétences en PHP, Symfony, JavaScript, Twig et
          Cypress.
        </p>
        <p className="apropos-paragraphe text">
          Au fil du temps, j'ai réalisé divers projets, allant de simples sites
          en HTML/CSS à des sites fonctionnels combinant front-end (HTML/CSS pur
          ainsi que Bootstrap/JavaScript/REACT) et back-end (PHP, NODEJS). De
          plus, je maîtrise les bases de données grâce à mes compétences en SQL,
          MySQL et PLSQL. J'ai également une bonne maîtrise du développement
          continue avec l'outils Docker et enfin des outils de gestion de code
          tels que GIT, GitLab et YouTrack. En ce qui concerne les méthodologies
          de travail, je suis à l'aise aussi bien avec AGILE qu'avec SCRUM.
        </p>
        <p className="apropos-paragraphe text">
          À l'avenir, je vise à continuer à développer mes compétences et à
          contribuer au monde de l'informatique de manière significative.
        </p>
        <button
          type="button"
          onClick={() => {
            window.location.href = "#contacts";
          }}
          className="apropos-button-contact"
        >
          <span className="apropos-contact-link-button">Me contacter</span>
        </button>
      </div>
      <div className="apropos-presentaion-droite">
        <img
          src="../public/photo4.jpg"
          alt="ThomasDeneux"
          className="apropos-image-moi"
        />
      </div>
    </div>
  );
}

export default APropos;

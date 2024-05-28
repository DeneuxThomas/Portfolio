//import
import "./scss/Contact.scss";

function Contact() {
  //state état donné(name, setname, useSate)

  //comportements

  //render
  return (
    <div className="container-contact">
      <div className="contact-titre text h2">
        <h2 className="contact-titre">Travailler avec moi</h2>
      </div>
      <div className="content">
        <div className="CV-content">
          <img src="/CV_Thomas_DENEUX.jpg" alt="cv" />
          <div>
            <a
              href="/CV_Thomas_DENEUX.pdf"
              download="CV_Thomas_DENEUX.pdf"
              className="btn-download text h2"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
        <div className="contact-content">
          <a
            className="text lien-contact"
            href="mailto:thomas.deneuxrahil@gmail.com"
          >
            <img src="/Gmail.png" alt="Gmail" />
            Mon adresse mail
          </a>
          <a className="text lien-contact" href="tel:0649580201">
            <img src="/phone.png" alt="phone" />
            Mon numéro de téléphone
          </a>
          <a
            className="text lien-contact"
            href="https://www.linkedin.com/in/thomas-dnx/"
          >
            <img src="/linkedin.png" alt="linkedin" />
            Lien vers mon linkedin
          </a>
          <a
            className="text lien-contact"
            href="https://github.com/DeneuxThomas"
          >
            <img src="/github.png" alt="github" />
            Lien vers mon github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

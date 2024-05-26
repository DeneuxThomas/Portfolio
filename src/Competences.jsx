//import
import "./scss/Competences.scss";

function Competences() {
  //state état donné(name, setname, useSate)

  //comportements

  //render
  return (
    <div className="container-competences">
      <div className="competences-titre text h2">
        <h2 className="competences-titre">Mes compétences</h2>
      </div>
      <div className="competences-content">
        <div className="competence-left-part">
          <div className="competences-niveau">
            <h3>Langages bas niveau :</h3>
            <div className="competences-item competences-assembleur">
              <div className="competences-img">
                <img src="/public/assembleur.png" alt="assembleur" />
              </div>
              <div className="competences-barre competence-moyen">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-moyen">60%</div>
            </div>
          </div>

          <div className="competences-niveau">
            <h3>Langages moyen niveau :</h3>
            <div className="competences-item competences-c">
              <div className="competences-img">
                <img src="/public/C_Logo.png" alt="c" />
              </div>
              <div className="competences-barre competence-ok">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-ok">70%</div>
            </div>
          </div>

          <div className="competences-niveau">
            <h3>Langages haut niveau :</h3>
            <div className="competences-item competences-javascript">
              <div className="competences-img">
                <img src="/public/JavaScript-logo.png" alt="javascript" />
              </div>
              <div className="competences-barre competence-tb">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-tb">95%</div>
            </div>
            <div className="competences-item competences-php">
              <div className="competences-img">
                <img src="/public/PHP-logo.svg.png" alt="php" />
              </div>
              <div className="competences-barre competence-tb">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-tb">95%</div>
            </div>
            <div className="competences-item competences-python">
              <div className="competences-img">
                <img src="/public/Python-logo-notext.svg.png" alt="python" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
            <div className="competences-item competences-java">
              <div className="competences-img">
                <img src="/public/Java_Logo.svg.png" alt="java" />
              </div>
              <div className="competences-barre competence-tb">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-tb">95%</div>
            </div>
          </div>

          <div className="competences-niveau">
            <h3>Langages de requête et bases de données :</h3>
            <div className="competences-item competences-sql">
              <div className="competences-img">
                <img src="/public/Sql_data_base_with_logo.png" alt="sql" />
              </div>
              <div className="competences-barre competence-tb">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-tb">95%</div>
            </div>
            <div className="competences-item competences-plsql ">
              <div className="competences-img">
                <img src="/public/plsql.png" alt="plsql" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
            <div className="competences-item competences-nosql">
              <div className="competences-img">
                <img src="/public/NoSQL.png" alt="nosql" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
          </div>

          <div className="competences-niveau">
            <h3>Langages de balisage et mise en forme :</h3>
            <div className="competences-item competences-html-css">
              <div className="competences-img">
                <img src="/public/HTML_CSS.png" alt="htmlcss" />
              </div>
              <div className="competences-barre competence-parfait">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-parfait">100%</div>
            </div>
          </div>
        </div>

        <div className="competence-right-part">
          <div className="competences-niveau">
            <h3>Frameworks et bibliothèques :</h3>
            <div className="competences-item competences-cypress">
              <div className="competences-img">
                <img src="/public/cypress.png" alt="cypress" />
              </div>
              <div className="competences-barre competence-tb">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-tb">95%</div>
            </div>
            <div className="competences-item competences-nodejs">
              <div className="competences-img">
                <img src="/public/nodeJS.png" alt="nodejs" />
              </div>
              <div className="competences-barre competence-tb">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-tb">95%</div>
            </div>
            <div className="competences-item competences-react">
              <div className="competences-img">
                <img src="/public/React.png" alt="react" />
              </div>
              <div className="competences-barre competence-tb">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-tb">95%</div>
            </div>
            <div className="competences-item competences-bootstrap">
              <div className="competences-img">
                <img src="/public/bootstrap.png" alt="bootstrap" />
              </div>
              <div className="competences-barre competence-ok">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-ok">70%</div>
            </div>
            <div className="competences-item competences-react-native">
              <div className="competences-img">
                <img src="/public/React.png" alt="react-native" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
            <div className="competences-item competences-symphony">
              <div className="competences-img">
                <img src="/public/symfony.png" alt="symfony" />
              </div>
              <div className="competences-barre competence-tb">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-tb">95%</div>
            </div>
            <div className="competences-item competences-threejs">
              <div className="competences-img">
                <img src="/public/threeJs.png" alt="threeJs" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
          </div>

          <div className="competences-niveau">
            <h3>Outils et plates-formes :</h3>
            <div className="competences-item competences-linux">
              <div className="competences-img">
                <img src="/public/linux.png" alt="linux" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
            <div className="competences-item competences-bash">
              <div className="competences-img">
                <img src="/public/Bash.png" alt="bash" />
              </div>
              <div className="competences-barre competence-ok">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-ok">70%</div>
            </div>
            <div className="competences-item competences-wordpress">
              <div className="competences-img">
                <img src="/public/WordPress.png" alt="WordPress" />
              </div>
              <div className="competences-barre competence-tb">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-tb">95%</div>
            </div>
            <div className="competences-item competences-android-studio">
              <div className="competences-img">
                <img src="/public/android-studio.png" alt="android-studio" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
            <div className="competences-item competences-mangodb">
              <div className="competences-img">
                <img src="/public/MongoDB.png" alt="mangodb" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
            <div className="competences-item competences-mariadb">
              <div className="competences-img">
                <img src="/public/Mariadb.png" alt="mariadb" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
            <div className="competences-item competences-docker">
              <div className="competences-img">
                <img src="/public/docker.png" alt="docker" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
            <div className="competences-item competences-nodered">
              <div className="competences-img">
                <img src="/public/node-red.svg" alt="node-red" />
              </div>
              <div className="competences-barre competence-bien">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-bien">85%</div>
            </div>
            <div className="competences-item competences-microsoft-azure">
              <div className="competences-img">
                <img src="/public/Microsoft-Azure.png" alt="microsoft-azure" />
              </div>
              <div className="competences-barre competence-ok">
                <div class="competences-barre-inner"></div>
              </div>
              <div className="competences-text competence-ok">70%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;

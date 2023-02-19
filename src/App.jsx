import "./app.css";

import PxHero from "./components/PxHero/index";
import PxSkill from "./components/PxSkill/index";
import PxPortfolio from "./components/PxPortfolio/index";
import PxFooter from "./components/PxFooter/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faLaravel,
  faJava,
  faWordpressSimple,
  faPhp,
  faJs,
  faBootstrap,
  faGithub,
  faFirefoxBrowser,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faHtml5,
  faCss3,
  faNodeJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import PxAbout from "./components/PxAbout";


library.add(
  faLaravel,
  faJava,
  faWordpressSimple,
  faPhp,
  faReact,
  faBootstrap,
  faJs,
  faGithub,
  faFirefoxBrowser,
  faInstagram,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faHtml5,
  faCss3,
  faNodeJs,
  faPlus,
  faVuejs
);


function App() {

  return (
    <div className="App">
      <PxHero />
      <PxSkill />
      <PxAbout />
      <PxPortfolio />
      <PxFooter />
    </div>
  );
}

export default App;

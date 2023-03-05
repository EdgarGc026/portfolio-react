import "./tailwind.css";
import { mockServer } from "../src/mockServer/index";
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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
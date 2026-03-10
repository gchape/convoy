import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterBottom = () => (
  <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-zinc-500 text-sm">
      &copy; {new Date().getFullYear()} Convoy. All rights reserved.
    </p>

    <div className="flex items-center gap-4">
      <a href="#" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href="#" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </a>

      <a href="#" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </div>
);

export default FooterBottom;

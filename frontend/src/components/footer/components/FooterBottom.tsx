import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const FooterBottom = () => (
  <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-zinc-500 text-sm">
      &copy; {new Date().getFullYear()} Convoy. All rights reserved.
    </p>

    <div className="flex items-center gap-4">
      <a href="#">
        <FaGithub />
      </a>

      <a href="#">
        <FaFacebook />
      </a>

      <a href="#">
        <FaLinkedinIn />
      </a>
    </div>
  </div>
);

export default FooterBottom;

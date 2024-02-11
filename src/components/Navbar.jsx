import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="font-[Calligraffitti] text-lg font-bold">Hell Yeah</div>
      <div>
        <Link href="/" className="p-2">
          Home
        </Link>
        <Link href="/portfolio" className="p-2">
          Portfolio
        </Link>
        <Link href="/resume" className="p-2">
          Resume
        </Link>
        <a
          href="https://x.com/HelaMylavarapu?s=20"
          className="p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-white" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="grid items-end bg-pattern-hills bg-no-repeat bg-right-bottom bg-[length:220%_100%] sm:bg-bottom sm:bg-[length:100%_100%]">
      <ul className="flex items-center justify-center gap-8 mb-11">
        <li>
          <a href="#">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaPinterest />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
}

import "../index.css";
import { Link } from "react-router";
const NavBar = () => {
  return (
    <div>
      <ul className="bg-[#293d5f] py-6 border-y-2 border-slate-400 absolute right-0 w-full top-22 flex flex-col justify-center items-center transition-all text-lg text-right gap-6">
        <li>
          <Link to="/blog" className="hover:text-[#61DBFB]">
            Blog
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#61DBFB]">Projects</Link>
        </li>
        <li>
          <Link className="hover:text-[#61DBFB]">About Me</Link>
        </li>
        <li>
          <Link className="hover:text-[#61DBFB]">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;

//@ts-ignore
import { Link } from "react-scroll";

/* eslint-disable-next-line */
export interface NavbarLinkProps {
  text: string;
  to: string;
}

export function NavbarLink({ text, to }: NavbarLinkProps) {
  return (
    <>
    <li className="">
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <a className="font-medium cursor-pointer tracking-widest uppercase text-white transition-colors duration-200 hover:text-orange-400">
          <span className="ml-2">{text}</span>
        </a>
      </Link>
    </li>
    </>
  );
}

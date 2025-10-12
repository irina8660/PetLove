import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={s.list}>
      <li>
        <NavLink to="/" className={s.link}>
          News
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={s.link}>
          Find Pet
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={s.link}>
          Our Friends
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;

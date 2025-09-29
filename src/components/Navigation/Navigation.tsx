import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
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

export default Navigation;

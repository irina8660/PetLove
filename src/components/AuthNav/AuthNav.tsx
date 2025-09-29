import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <ul className={s.list}>
      <li>
        <NavLink to="/login" className={s.link}>
          Log In
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className={s.link}>
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;

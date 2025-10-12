import { Link } from "react-router-dom";
import s from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/logo/logo.webp" alt="Logo Petlove" className={s.logo} />
    </Link>
  );
};

export default Logo;

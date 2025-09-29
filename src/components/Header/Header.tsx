import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const isLoggedin = false;

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <Link to="/">
            <img src="/logo/logo.webp" alt="Logo Petlove" className={s.logo} />
          </Link>
          <Navigation />
          {isLoggedin ? <UserMenu /> : <AuthNav />}
        </nav>
      </Container>
    </header>
  );
};

export default Header;

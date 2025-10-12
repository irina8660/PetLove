import Container from "../Container/Container";
import Nav from "../Nav/Nav";
import s from "./Header.module.css";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";

const isLoggedin = true;

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <Logo />
          <Nav />
          {isLoggedin ? <UserNav /> : <AuthNav />}
        </nav>
      </Container>
    </header>
  );
};

export default Header;

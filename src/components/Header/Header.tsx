import Container from "../Container/Container";
import Nav from "../Nav/Nav";
import s from "./Header.module.css";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/users/selectors";

const Header = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);

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

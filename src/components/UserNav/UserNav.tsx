import LogOutBtn from "../LogOutBtn/LogOutBtn";
import UserBar from "../UserBar/UserBar";
import s from "./UserNav.module.css";

const UserNav = () => {
  return (
    <div className={s.wrapper}>
      <LogOutBtn />
      <UserBar />
    </div>
  );
};

export default UserNav;

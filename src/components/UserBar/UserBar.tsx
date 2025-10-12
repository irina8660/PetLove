import s from "./UserBar.module.css";

const UserBar = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.avatarWrapper}>A</div>
      <div className={s.name}>Anna</div>
    </div>
  );
};

export default UserBar;

import EditUserBtn from "../EditUserBtn/EditUserBtn";
import s from "./UserBlock.module.css";

const UserBlock = (user) => {
  return (
    <div className={s.wrapper}>
      <div className={s.editBlock}>
        <div className={s.user}>
          <span className={s.text}>User</span>
          <svg
            className={s.iconSmall}
            width="18"
            height="18"
            aria-hidden="true"
          >
            <use href="/public/icons/svg/icons.svg#icon-user-white" />
          </svg>
        </div>
        <div className={s.UserIconWrapper}>
          <svg className={s.userIcon} width="50" height="50" aria-hidden="true">
            <use href="/public/icons/svg/icons.svg#icon-user" />
          </svg>
        </div>
        <EditUserBtn />
      </div>
      <div className={s.UserInfoList}>
        <span className={s.listHeader}>My information</span>
        <ul className={s.list}>
          <li className={s.item}>{user?.name}</li>
          <li className={s.item}>{user?.email}</li>
          <li className={s.item}>{user?.phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserBlock;

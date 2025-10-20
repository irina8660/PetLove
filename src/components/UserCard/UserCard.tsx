import { useDispatch, useSelector } from "react-redux";
import s from "./UserCard.module.css";
import { selectCurrentUserFull } from "../../redux/users/selectors";
import { getCurrentUserFull } from "../../redux/users/operations";
import { useEffect } from "react";
import type { AppDispatch } from "../../redux/store";

const UserCard = () => {
  const user = useSelector(selectCurrentUserFull);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCurrentUserFull());
  }, [dispatch]);

  console.log(user);

  return (
    <div className={s.card}>
      <div className={s.userBlock}>
        <div className={s.user}>User</div>
        <div className={s.UserIconWrapper}>
          <svg className={s.icon} width="50" height="50" aria-hidden="true">
            <use href="/public/icons/svg/icons.svg#icon-user" />
          </svg>
        </div>
        <button>
          <svg className={s.icon} width="18" height="18" aria-hidden="true">
            <use href="/public/icons/svg/icons.svg#icon-edit" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserCard;

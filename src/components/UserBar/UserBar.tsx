import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/users/selectors";
import s from "./UserBar.module.css";
import { useEffect } from "react";
import { getCurrentUser } from "../../redux/users/operations";
import type { AppDispatch } from "../../redux/store";

const UserBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const user = useSelector(selectCurrentUser);

  return (
    <div className={s.wrapper}>
      <div className={s.avatarWrapper}>I</div>
      <div className={s.name}>{user?.name}</div>
    </div>
  );
};

export default UserBar;

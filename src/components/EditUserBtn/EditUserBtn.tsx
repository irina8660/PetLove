import s from "./EditUserBtn.module.css";

const EditUserBtn = () => {
  return (
    <button className={s.btn}>
      <svg className={s.icon} width="18" height="18" aria-hidden="true">
        <use href="/public/icons/svg/icons.svg#icon-edit" />
      </svg>
    </button>
  );
};

export default EditUserBtn;

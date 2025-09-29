import RegisterForm from "../../components/RegisterForm/RegisterForm";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={s.wrapper}>
      <picture className={s.img}>
        <source
          srcSet="/images/registration-desk-@1x.webp 1x, /images/registration-desk-@2x.webp 2x"
          media="(min-width: 1440px)"
          type="image/webp"
        />
        <source
          srcSet="/images/registration-desk-@1x.webp 1x, /images/registration-desk-@2x.webp 2x"
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet="/images/registration-desk-@1x.webp 1x, /images/registration-desk-@2x.webp 2x"
          media="(max-width: 767px)"
          type="image/webp"
        />
        <img
          src="/images/registration-desk-@1x.webp"
          alt="A picture with cat"
        />
      </picture>
      <RegisterForm />
    </div>
  );
};

export default RegistrationPage;

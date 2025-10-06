import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

const LoginPage = () => {
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
      <LoginForm />
    </div>
  );
};

export default LoginPage;

import LoginForm from "../../components/LoginForm/LoginForm";
import PetBlock, {
  type PetBlockProps,
} from "../../components/PetBlock/PetBlock";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  const petImage: PetBlockProps = {
    images: {
      desk: {
        normal: "/images/login-desk-@1x.webp",
        retina: "/images/login-desk-@1x.webp",
      },
      tab: {
        normal: "/images/login-desk-@1x.webp",
        retina: "/images/login-desk-@1x.webp",
      },
      mob: {
        normal: "/images/login-desk-@1x.webp",
        retina: "/images/login-desk-@1x.webp",
      },
    },
    alt: "Photo with beautibul dog",
  };

  return (
    <div className={s.wrapper}>
      <PetBlock {...petImage} />
      <div className={s.petBlock}>
        <div className={s.imgWrapper}>
          <img src="/images/dog.png" alt="dog icon" className={s.img} />
        </div>
        <div className={s.info}>
          <div className={s.header}>
            <h3 className={s.name}>Rich</h3>
            <div className={s.dateWrapper}>
              <p className={s.text}>Birthday:</p>
              <p className={s.date}>21.09.2020</p>
            </div>
          </div>
          <p className={s.description}>
            Rich would be the perfect addition to an active family that loves to
            play and go on walks. I bet he would love having a doggy playmate
            too!
          </p>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

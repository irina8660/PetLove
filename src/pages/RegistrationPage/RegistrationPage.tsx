import PetBlock from "../../components/PetBlock/PetBlock";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import s from "./RegistrationPage.module.css";
import type { PetBlockProps } from "../../components/PetBlock/PetBlock";

const RegistrationPage = () => {
  const petImage: PetBlockProps = {
    images: {
      desk: {
        normal: "/images/registration-desk-@1x.webp",
        retina: "/images/registration-desk-@1x.webp",
      },
      tab: {
        normal: "/images/registration-desk-@1x.webp",
        retina: "/images/registration-desk-@1x.webp",
      },
      mob: {
        normal: "/images/registration-desk-@1x.webp",
        retina: "/images/registration-desk-@1x.webp",
      },
    },
    alt: "Photo with beautibul red cat",
  };

  return (
    <div className={s.wrapper}>
      <PetBlock {...petImage} />
      <div className={s.petBlock}>
        <div className={s.imgWrapper}>
          <img src="/images/cat.png" alt="cat icon" className={s.img} />
        </div>
        <div className={s.info}>
          <div className={s.header}>
            <h3 className={s.name}>Jack</h3>
            <div className={s.dateWrapper}>
              <p className={s.text}>Birthday:</p>
              <p className={s.date}>18.10.2021</p>
            </div>
          </div>
          <p className={s.description}>
            Jack is a gray Persian cat with green eyes. He loves to be pampered
            and groomed, and enjoys playing with toys.
          </p>
        </div>
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegistrationPage;

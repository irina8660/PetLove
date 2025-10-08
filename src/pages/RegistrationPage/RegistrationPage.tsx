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
      <RegisterForm />
    </div>
  );
};

export default RegistrationPage;

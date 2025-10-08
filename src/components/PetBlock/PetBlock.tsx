import s from "./PetBlock.module.css";

export interface PetBlockProps {
  images: {
    desk: { normal: string; retina: string };
    tab: { normal: string; retina: string };
    mob: { normal: string; retina: string };
  };
  alt: string;
}

const PetBlock = ({ images, alt }: PetBlockProps) => {
  const { desk, tab, mob } = images;

  return (
    <picture className={s.img}>
      <source
        srcSet={`${desk.normal} 1x, ${desk.retina} 2x`}
        media="(min-width: 1440px)"
        type="image/webp"
      />
      <source
        srcSet={`${tab.normal} 1x, ${tab.retina} 2x`}
        media="(min-width: 768px)"
        type="image/webp"
      />
      <source
        srcSet={`${mob.normal} 1x, ${mob.retina} 2x`}
        media="(max-width: 767px)"
        type="image/webp"
      />
      <img src={`${desk.normal}`} alt={alt} />
    </picture>
  );
};

export default PetBlock;

import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.numWrapper}>
        <span className={s.num}>4</span>
        <div className={s.img}>
          <picture>
            <source
              srcSet="/images/NotFoundCat-desk-@1x.webp 1x, /images/NotFoundCat-desk-@1x.webp 2x"
              media="(min-width: 1440px)"
              type="image/webp"
            />
            <source
              srcSet="/images/NotFoundCat-desk-@1x.webp 1x, /images/NotFoundCat-desk-@1x.webp 2x"
              media="(min-width: 768px)"
              type="image/webp"
            />
            <source
              srcSet="/images/NotFoundCat-desk-@1x.webp 1x, /images/NotFoundCat-desk-@1x.webp 2x"
              media="(max-width: 767px)"
              type="image/webp"
            />
            <img src="/images/NotFoundCat-desk-@1x.webp" alt="Red Cat" />
          </picture>
        </div>

        <span className={s.num}>4</span>
      </div>
    </div>
  );
};

export default NotFoundPage;

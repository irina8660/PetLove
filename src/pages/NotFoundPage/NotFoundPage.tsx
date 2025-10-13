import { Link, useNavigate } from "react-router-dom";
import s from "./NotFoundPage.module.css";
import { useEffect } from "react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className={s.wrapper}>
      <div className={s.numWrapper}>
        <span className={s.num}>4</span>
        <div className={s.img}>
          <picture>
            <source
              srcSet="/images/NotFoundCat-desk-@1x.webp 1x, /images/NotFoundCat-desk-@2x.webp 2x"
              media="(min-width: 1440px)"
              type="image/webp"
            />
            <source
              srcSet="/images/NotFoundCat-desk-@1x.webp 1x, /images/NotFoundCat-desk-@2x.webp 2x"
              media="(min-width: 768px)"
              type="image/webp"
            />
            <source
              srcSet="/images/NotFoundCat-desk-@1x.webp 1x, /images/NotFoundCat-desk-@2x.webp 2x"
              media="(max-width: 767px)"
              type="image/webp"
            />
            <img src="/images/NotFoundCat-desk-@1x.webp" alt="Red Cat" />
          </picture>
        </div>

        <span className={s.num}>4</span>
      </div>
      <p className={s.text}>Ooops! This page not found :(</p>
      <Link to="/" className={s.link}>
        To home page
      </Link>
    </div>
  );
};

export default NotFoundPage;

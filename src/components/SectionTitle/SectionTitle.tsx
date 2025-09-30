import s from "./SectionTitle.module.css";

type TitleProps = React.PropsWithChildren;

const SectionTitle = ({ children }: TitleProps) => {
  return <div className={s.title}>{children}</div>;
};

export default SectionTitle;

import s from "./Container.module.css";

type ContainerProps = React.PropsWithChildren;

const Container = ({ children }: ContainerProps) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;

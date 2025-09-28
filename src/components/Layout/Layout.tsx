import s from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={s.layout}>{children}</div>;
};

export default Layout;

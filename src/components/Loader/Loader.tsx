import s from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className={s.overlay}
      role="status"
      aria-live="polite"
      aria-label="Loading content..."
    >
      <ClipLoader
        size={100}
        color="#ff114cff"
        aria-hidden="true"
        cssOverride={{
          borderWidth: "8px",
          borderStyle: "solid",
        }}
      />
    </div>
  );
};

export default Loader;

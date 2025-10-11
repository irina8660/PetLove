// SuccessMessage.tsx
import { useField } from "formik";
import s from "./SuccessMesage.module.css";

interface SuccessMessageProps {
  name: string;
  message?: string | ((value: string) => string);
}

const SuccessMessage = ({
  name,
  message = "Looks good!",
}: SuccessMessageProps) => {
  const [field, meta] = useField(name);
  const value = field.value ?? "";

  const show = value.length > 0 && !meta.error;

  if (!show) return null;

  const text = typeof message === "function" ? message(value) : message;
  return <div className={s.message}>{text}</div>;
};

export default SuccessMessage;

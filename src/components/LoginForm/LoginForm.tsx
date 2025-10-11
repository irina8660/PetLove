import { useState } from "react";
import { Formik, Form, useField, ErrorMessage, type FormikProps } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import type { LoginFormTypes } from "../../types/form";

interface LoginFormProps {
  name: keyof typeof initialValues;
  type: "text" | "email" | "password";
  placeholder: string;
  successIcon: "icon-ok";
  errorIcon: "icon-shape";
  regex?: RegExp;
}

const initialValues = {
  email: "",
  password: "",
};

const emailRegular = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// eslint-disable-next-line no-useless-escape
const passwordRegular = /^[A-Za-z0-9!@#$%^&*()_+\[\]{}|;:'",.<>/?=\-~]{7,}$/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .max(64, "Email must be at most 64 characters")
    .matches(emailRegular, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .max(64, "Password must be at most 64 characters")
    .min(7, "Password must be at least 7 characters")
    .matches(passwordRegular, "Invalid password")
    .required("Password is required"),
});

const InputField = ({
  name,
  type = "text",
  placeholder,
  successIcon = "icon-ok",
  errorIcon = "icon-shape",
  regex,
}: LoginFormProps) => {
  const [field, meta] = useField(name);
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const value = field.value ?? "";

  const hasValue = value.length > 0;
  const isMatch = regex ? regex.test(value) : !meta.error;
  const hasError =
    (meta.touched && Boolean(meta.error)) ||
    (hasValue && (regex ? !isMatch : Boolean(meta.error)));
  const isValid = hasValue && (regex ? isMatch : !meta.error);

  const effectiveType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={s.inputWrapper}>
      <input
        {...field}
        type={effectiveType}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          field.onBlur(e);
          setFocused(false);
        }}
        className={clsx(s.input, {
          [s.inputError]: hasError,
          [s.inputSuccess]: isValid,
          [s.inputActive]: focused && !hasError && !isValid,
        })}
        aria-invalid={hasError ? "true" : "false"}
      />

      {type === "password" && (
        <button
          type="button"
          className={s.eyeButton}
          onClick={() => setShowPassword((s) => !s)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <svg className={s.eyeIcon} width="22" height="22" aria-hidden="true">
            <use
              href={`/icons/svg/icons.svg#${
                showPassword ? "icon-eye" : "icon-eye-off"
              }`}
            />
          </svg>
        </button>
      )}

      {hasError ? (
        <svg className={s.icon} width="22" height="22" aria-hidden="true">
          <use href={`/icons/svg/icons.svg#${errorIcon}`} />
        </svg>
      ) : isValid ? (
        <svg className={s.icon} width="22" height="22" aria-hidden="true">
          <use href={`/icons/svg/icons.svg#${successIcon}`} />
        </svg>
      ) : null}

      <ErrorMessage name={name} component="div" className={s.error} />
    </div>
  );
};

const LoginForm = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <SectionTitle>Log in</SectionTitle>
        <p className={s.subtitle}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
      </div>

      <Formik<LoginFormTypes>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("submit", values);
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting, dirty }: FormikProps<LoginFormTypes>) => (
          <Form className={s.form}>
            <div className={s.inputs}>
              <InputField
                name="email"
                type="email"
                placeholder="Email"
                successIcon="icon-ok"
                errorIcon="icon-shape"
                regex={emailRegular}
              />
              <InputField
                name="password"
                type="password"
                placeholder="Password"
                successIcon="icon-ok"
                errorIcon="icon-shape"
              />
            </div>
            <button
              type="submit"
              className={s.button}
              disabled={!dirty || isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>

      <div className={s.linkWrapper}>
        <p className={s.text}>Don’t have an account?</p>
        <Link to="/register" className={s.link}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

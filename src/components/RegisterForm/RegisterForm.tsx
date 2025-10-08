import { useState } from "react";
import { Formik, Form, useField, ErrorMessage, type FormikProps } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./RegisterForm.module.css";
import { Link } from "react-router-dom";
import type { RegisterFormTypes } from "../../types/form";

interface RegisterFormProps {
  name: keyof RegisterFormTypes;
  type: "text" | "email" | "password";
  placeholder?: string;
  successIcon: string;
  errorIcon: string;
  regex?: RegExp;
}

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const emailRegular = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(32, "Name must be at most 32 characters")
    .required("Name is required"),
  email: Yup.string()
    .max(64, "Email must be at most 64 characters")
    .matches(emailRegular, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .max(64, "Password must be at most 64 characters")
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

const InputField = ({
  name,
  type = "text",
  placeholder,
  successIcon = "icon-ok",
  errorIcon = "icon-shape",
  regex,
}: RegisterFormProps) => {
  const [field, meta] = useField(name);

  const [focused, setFocused] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const value = field.value ?? "";

  const hasValue = value.length > 0;
  const isMatch = regex ? regex.test(value) : !meta.error;
  const hasError = hasValue && (regex ? !isMatch : Boolean(meta.error));
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

const RegisterForm = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <SectionTitle>Registration</SectionTitle>
        <p className={s.subtitle}>
          Thank you for your interest in our platform.
        </p>
      </div>

      <Formik<RegisterFormTypes>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(vals) => {
          console.log("submit", vals);
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting, dirty }: FormikProps<RegisterFormTypes>) => (
          <Form className={s.form}>
            <div className={s.inputs}>
              <InputField
                name="name"
                type="text"
                placeholder="Name"
                successIcon="icon-ok"
                errorIcon="icon-shape"
              />
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
                successIcon="icon-check"
                errorIcon="icon-cross"
              />
              <InputField
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                successIcon="icon-check"
                errorIcon="icon-cross"
              />
            </div>
            <button
              type="submit"
              className={s.button}
              disabled={!dirty || isSubmitting}
            >
              {isSubmitting ? "Creating account..." : "Registration"}
            </button>
          </Form>
        )}
      </Formik>
      <div className={s.linkWrapper}>
        <p className={s.text}>Already have an account?</p>
        <Link to="/login" className={s.link}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;

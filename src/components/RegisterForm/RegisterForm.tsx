import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./RegisterForm.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <SectionTitle>Registration</SectionTitle>
        <p className={s.subtitle}>
          Thank you for your interest in our platform.{" "}
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={validationSchema}
        validateOnChange={true}
      >
        {({ field, meta }) => (
          <Form className={s.form}>
            <div className={s.inputs}>
              <div className={s.inputWrapper}>
                {/* <Field name="name">
                  {({ field, meta }: any) => {
                    const value = field.value ?? "";
                    const hasError = Boolean(meta.error) && value.length > 0; // live error
                    const isValid = !meta.error && value.length > 0; // live valid

                    return (
                      <div className={s.inputWrapper}>
                        <input
                          {...field}
                          type="text"
                          placeholder="Name"
                          onFocus={() => setNameFocused(true)}
                          onBlur={(e) => {
                            field.onBlur(e);
                            setNameFocused(false);
                          }}
                          className={clsx(s.input, {
                            [s.inputError]: hasError,
                            [s.inputSuccess]: isValid,
                            [s.inputActive]: nameFocused && !isValid,
                          })}
                          aria-invalid={hasError}
                        />
                        {hasError && values.name.length > 2 ? (
                          <svg
                            className={s.icon}
                            width="22"
                            height="22"
                            aria-hidden
                          >
                            <use href="/icons/svg/icons.svg#icon-shape" />
                          </svg>
                        ) : !hasError && touched.name ? (
                          <svg
                            className={s.icon}
                            width="22"
                            height="22"
                            aria-hidden
                          >
                            <use href="/icons/svg/icons.svg#icon-ok" />
                          </svg>
                        ) : null}
                        <ErrorMessage
                          name="name"
                          component="div"
                          className={s.error}
                        />
                      </div>
                    );
                  }}
                </Field> */}
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={clsx(s.input, {
                    [s.inputError]: Boolean(errors.name),
                    [s.inputSuccess]: !errors.name && touched.name,
                    [s.inputActive]:
                      touched.name && values.name.length > 0 && !errors.name,
                  })}
                />
                {Boolean(errors.name) && touched.name ? (
                  <svg
                    className={s.icon}
                    width="22"
                    height="22"
                    aria-hidden="true"
                  >
                    <use href="/icons/svg/icons.svg#icon-shape" />
                  </svg>
                ) : !errors.name && values.name.length >= 2 ? (
                  <svg
                    className={s.icon}
                    width="22"
                    height="22"
                    aria-hidden="true"
                  >
                    <use href="/icons/svg/icons.svg#icon-ok" />
                  </svg>
                ) : null}
                <ErrorMessage name="name" className={s.error} component="div" />
              </div>

              <div className={s.inputWrapper}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={clsx(s.input, {
                    [s.inputError]: Boolean(errors.email),
                    [s.inputSuccess]: !errors.email && touched.email,
                    [s.inputActive]: touched.email,
                  })}
                />
                {Boolean(errors.email) && touched.email ? (
                  <svg
                    className={s.icon}
                    width="22"
                    height="22"
                    aria-hidden="true"
                  >
                    <use href="/icons/svg/icons.svg#icon-cross" />
                  </svg>
                ) : values.email?.length > 0 && !errors.email ? (
                  <svg
                    className={s.icon}
                    width="22"
                    height="22"
                    aria-hidden="true"
                  >
                    <use href="/icons/svg/icons.svg#icon-check" />
                  </svg>
                ) : null}
                <ErrorMessage
                  name="email"
                  className={s.error}
                  component="div"
                />
              </div>

              <div className={s.inputWrapper}>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className={clsx(
                    s.input,
                    errors.password && touched.password && s.inputError
                  )}
                />
                <button
                  type="button"
                  className={s.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <svg className={s.eyeIcon} width="22px" height="22px">
                    <use
                      href={`/icons/svg/icons.svg#${
                        showPassword ? "icon-eye" : "icon-eye-off"
                      }`}
                    />
                  </svg>
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.error}
                />
              </div>

              <div className={s.inputWrapper}>
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={clsx(
                    s.input,
                    errors.confirmPassword &&
                      touched.confirmPassword &&
                      s.inputError
                  )}
                />
                <button
                  type="button"
                  className={s.eyeButton}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  <svg className={s.eyeIcon} width="22px" height="22px">
                    <use
                      href={`/icons/svg/icons.svg#${
                        showConfirmPassword ? "icon-eye" : "icon-eye-off"
                      }`}
                    />
                  </svg>
                </button>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={s.error}
                />
              </div>
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
      <div>
        <span>Already have an account?</span>
        <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default RegisterForm;

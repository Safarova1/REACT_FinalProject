import React, { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStat } from "../../redux/store";
import { Formik, Field, Form, ErrorMessage } from "formik";
import imgLogo from "../../assets/images/logo-img.png";
import { ISignUp } from "../../components/types/infoAuthTypes";
import CommonButton from "../../components/Button/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { register, login } from "../../redux/slices/operation";
import Spinner from "../../components/Spinner/Spinner";
import CustomErrorMessage from "../../components/Error/Error";

const SignUpScheme = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .max(12, "Password must be less than 12 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "The passwords do not match")
    .required("Required"),
});

const initialValues: ISignUp = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  avatar: "",
};

const SignUpPage: React.FC = () => {
  const { isLoading, error } = useSelector((state: RootStat) => state.user);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (values: ISignUp) => {
    try {
      const registerResult = await dispatch(register(values));
      if (register.fulfilled.match(registerResult)) {
        const loginResult = await dispatch(
          login({ email: values.email, password: values.password })
        );
        if (login.fulfilled.match(loginResult)) {
          navigate("/", { replace: true });
        } else {
          console.error("Ошибка авторизации:", loginResult.payload);
        }
      } else {
        console.error("Ошибка регистрации:", registerResult.payload);
      }
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };

  const emailId = useId();
  const passwordId = useId();
  const confirmPassword = useId();

  const handleOpenSignInPage = () => {
    navigate("/signin", { replace: true });
  };

  return (
    <section className="relative flex items-center justify-center h-[100vh]">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10">
        {isLoading && <Spinner />}
        {error && (
          <CustomErrorMessage
            name="Авторизация"
            message="Неправильный логин или пароль"
          />
        )}
      </div>
      <div className="relative z-20">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SignUpScheme}
        >
          <Form>
            <div className="flex justify-center items-center">
              <div className="mt-[50px] mr-[150px] mb-[84px] ml-[150px]">
                <div className="flex items-center justify-between">
                  <img src={imgLogo} alt="LOGO" />
                  <button
                    onClick={handleOpenSignInPage}
                    className="rounded-[10px] text-[14px] leading-[24px] font-normal border-solid p-[10px] border-[2px] border-blue-500 text-blue-500"
                  >
                    Sign In
                  </button>
                </div>
                <div className="mt-[40px] mr-[70px] mb-[84px]">
                  <p className="text-[14px] leading-[24px] font-normal">
                    Welcome!!
                  </p>
                  <p className="text-[28px] leading-[38px] font-extrabold mb-[50px]">
                    Please Sign Up
                  </p>

                  <div>
                    <label
                      className="text-[14px] leading-[24px] font-normal mb-[8px] block"
                      htmlFor={emailId}
                    >
                      Email address
                    </label>
                    <Field
                      className="rounded-[10px] border-solid border-[1px] w-[350px] border-input-color p-[13px] text-gray-500"
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      id={emailId}
                    />
                    <ErrorMessage
                      className="text-red-500 m-1"
                      name="email"
                      component="p"
                    />
                  </div>

                  <div>
                    <label
                      className="text-[14px] leading-[24px] font-normal block mt-[24px]"
                      htmlFor={passwordId}
                    >
                      Password
                    </label>
                    <Field
                      className="rounded-[10px] border-solid border-[1px] w-[350px] border-input-color p-[13px] text-gray-500"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      id={passwordId}
                    />
                    <ErrorMessage
                      className="text-red-500 m-1"
                      name="password"
                      component="p"
                    />
                  </div>

                  <div>
                    <label
                      className="text-[14px] leading-[24px] font-normal block mt-[24px]"
                      htmlFor={confirmPassword}
                    >
                      Confirm Password
                    </label>
                    <Field
                      className="rounded-[10px] border-solid border-[1px] w-[350px] border-input-color p-[13px] text-gray-500"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      id={confirmPassword}
                    />
                    <ErrorMessage
                      className="text-red-500 m-1"
                      name="confirmPassword"
                      component="p"
                    />
                  </div>

                  <div>
                    <label
                      className="text-[14px] leading-[24px] font-normal block mt-[24px]"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <Field
                      className="rounded-[10px] border-solid border-[1px] w-[350px] border-input-color p-[13px] text-gray-500"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage
                      className="text-red-500 m-1"
                      name="name"
                      component="p"
                    />
                  </div>

                  <div>
                    <label
                      className="text-[14px] leading-[24px] font-normal block mt-[24px]"
                      htmlFor="avatar"
                    >
                      Avatar URL
                    </label>
                    <Field
                      className="rounded-[10px] border-solid border-[1px] w-[350px] border-input-color p-[13px] text-gray-500"
                      type="text"
                      name="avatar"
                      placeholder="Enter avatar URL"
                    />
                    <ErrorMessage
                      className="text-red-500 m-1"
                      name="avatar"
                      component="p"
                    />
                  </div>

                  <CommonButton
                    type="submit"
                    className="rounded-[10px] p-2.5 w-[350px] mt-[38px] flex items-center justify-center"
                    label="Sign up"
                  />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default SignUpPage;

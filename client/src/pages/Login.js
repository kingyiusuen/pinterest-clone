import React from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../components/FormLayout.css";
import { login } from "../actions/session";

const LoginFormLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const sessionError = useSelector((state) => state.sessionError);

  const handleLogin = (userData) => {
    dispatch(login(userData));
  };

  const handleDemoLogin = () => {
    const userData = {
      username: "john.doe",
      password: "johndoe",
    };
    handleLogin(userData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          type="text"
          placeholder="Username"
          className={`form__input ${
            errors.username ? "form__input--error" : ""
          }`}
          {...register("username", { required: true })}
        />
        {errors.username && <p className="form__error">Username is required</p>}
        <input
          type="password"
          placeholder="Password"
          className={`form__input ${
            errors.password ? "form__input--error" : ""
          }`}
          {...register("password", { required: true })}
        />
        {errors.password && <p className="form__error">Password is required</p>}
        {sessionError && <p className="form__error">{sessionError}</p>}
        <button type="submit" className="form__btn form__btn--submit">
          Log In
        </button>
      </form>
      <button onClick={handleDemoLogin} className="form__btn form__btn--demo">
        Demo
      </button>
      <Link to="/signup">Not on Pinterest yet? Sign up</Link>
    </>
  );
};

export default LoginFormLayout;

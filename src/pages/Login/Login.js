import React, { useId } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Login.css";

//store
import { setAuthStatus } from "../../store/actions";

//constans
import { AUTH_STATUSES } from "../../constans/authStatuses";
import { PATH } from "../../constans/paths";

export const Login = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email && password) {
      dispatch(setAuthStatus(AUTH_STATUSES.loggedIn));
      navigate(PATH.index);
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label className="login__label" htmlFor={emailId}>
          Email
        </label>
        <input
          className="login__text-field"
          name="email"
          id={emailId}
          type="email"
          autoComplete="off"
          placeholder="Email"
        />
        <label className="login__label" htmlFor={passwordId}>
          Password
        </label>
        <input
          className="login__text-field"
          name="password"
          id={passwordId}
          type="password"
          placeholder="Password"
        />
        <button className="login__button" color="primary" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

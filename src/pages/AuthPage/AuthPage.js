import React, { useId, useState } from "react";

import "./AuthPage.css";

//context
import { useAuth } from "../../context/Auth.context";

export const AuthPage = () => {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const { logIn, register } = useAuth();

  const handleSubmit = () => {
    if (isRegister) {
      register({ email, password });
    } else {
      logIn(email, password);
    }
  };

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={(e) => e.preventDefault()}>
        <h1>{isRegister ? "Register" : "Login"}</h1>
        <label className="auth__label" htmlFor={emailId}>
          Email
        </label>
        <input
          className="auth__text-field"
          id={emailId}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="auth__label" htmlFor={passwordId}>
          Password
        </label>
        <input
          className="auth__text-field"
          id={passwordId}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth__button" type="button" onClick={handleSubmit}>
          {isRegister ? "Register" : "Log In"}
        </button>
        <p>
          {isRegister ? (
            <>
              Already have an account?{" "}
              <a onClick={() => setIsRegister(false)} className="auth__toggle">
                Login here
              </a>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <a onClick={() => setIsRegister(true)} className="auth__toggle">
                Register here
              </a>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

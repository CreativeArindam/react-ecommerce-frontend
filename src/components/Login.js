import React from "react";
import "./Login.css";
function Login() {
  return (
    <div class="login">
      <h2>Login</h2>
      <form action="">
        <label htmlFor="username" class="login__label">
          Username
        </label>
        <input type="text" name="username" id="username" class="login__input" />
        <label htmlFor="password" class="login__label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          class="login__input"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

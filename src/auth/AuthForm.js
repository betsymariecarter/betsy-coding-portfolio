import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../app/store";

const AuthForm = ({ name, authMethod }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/home");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password }));
  };

  {
    return (
      <main className={styles.container}>
        <form
          className={styles.loggedInForm}
          onSubmit={handleSubmit}
          name={name}
        >
          <h1>Log In</h1>
          <hr />
          <span>
            <span className={styles.inputlabel}>
              <label htmlFor="username">
                <small>Username</small>
              </label>
            </span>
            <input name="username" type="text" placeholder="Username" />
          </span>
          <span>
            <span className={styles.inputlabel}>
              <label htmlFor="password">
                <small>Password</small>
              </label>
            </span>
            <input name="password" type="password" placeholder="Password" />
          </span>
          <div>
            <button className="login" type="submit" onSubmit={redirect}>
              {handleSubmit}
            </button>
          </div>
          {error && <div> {error} </div>}
        </form>
      </main>
    );
  }
};

export default AuthForm;

import React from "react";

function Form() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setUser((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function handleClick(event) {
    event.preventDefault();
    setUser({
      username: "",
      password: "",
    });
  }

  return (
    <div id="input-section">
      <div class="form-container">
        <div class="form-header">
          <h1>Welcome!</h1>
        </div>
        <form class="form">
          <div class="input-div">
            <label for="username">Username</label>
            <input onChange={handleChange}
              id="username"
              name="username"
              type="text"
              value={user.username}
              placeholder="Username"
            />
          </div>
          <div class="input-div">
            <label for="password">Password</label>
            <input onChange={handleChange}
              id="password"
              name="password"
              type="password"
              value={user.password}
              placeholder="Password"
            />
          </div>
          <div class='footer-btn'>
          <button onClick={handleClick} type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

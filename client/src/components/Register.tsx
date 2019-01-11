import React from "react";

const Register = () => {
  return (
    <div id="register" className="col s12">
      <form className="col s12">
        <div className="form-container">
          <h3 className="teal-text">Welcome</h3>
          <div className="row">
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email-confirm" type="email" className="validate" />
              <label htmlFor="email-confirm">Email Confirmation</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password-confirm"
                type="password"
                className="validate"
              />
              <label htmlFor="password-confirm">Password Confirmation</label>
            </div>
          </div>
          <div>
            <button
              className="btn waves-effect waves-light teal"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

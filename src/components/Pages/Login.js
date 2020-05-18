import React, { Component } from "react";
import firebase from "../../Firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="ui three column centered grid">
            <div className="column">
              <h2 className="ui teal image header">
                <i class="puzzle piece icon"></i>
                <div className="content">Login to your account</div>
              </h2>
              <form className="ui large form error">
                <div className="ui stacked segment">
                  <div className="field">
                    <div className="ui left icon input">
                      <i class="envelope icon"></i>
                      <input
                        type="text"
                        name="email"
                        placeholder="E-mail address"
                        onChange={this.emailHandle}
                      />
                    </div>
                  </div>
                  <div className="field ">
                    <div className="ui left icon input">
                      <i className="lock icon"></i>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.passwordHandle}
                      />
                    </div>
                  </div>
                  <button
                    className="ui fluid large teal submit button"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

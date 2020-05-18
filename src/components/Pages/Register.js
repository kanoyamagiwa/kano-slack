import React, { Component } from "react";
import firebase from "../../Firebase";
import md5 from "md5";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      usersRef: firebase.database().ref("users"),
      password: null,
      password_confirmation: null,
      errors: [],
    };
  }

  handleName = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.currentTarget.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.currentTarget.value });
  };

  handlePasswordConfirmation = (e) => {
    this.setState({ password_confirmation: e.currentTarget.value });
  };

  formValidate = () => {
    let messages = [];

    if (this.state.email === null || this.state.email === "") {
      var errMessage = { message: "Email field is emapty" };
      messages.push(errMessage);
    }

    if (this.state.name === null || this.state.name === "") {
      var errMessage = { message: "Email field is emapty" };
      messages.push(errMessage);
    }

    if (this.state.password === null || this.state.password === "") {
      var errMessage = { message: "password field is emapty" };
      messages.push(errMessage);
    }

    if (
      this.state.password_confirmation === null ||
      this.state.password_confirmation === ""
    ) {
      var errMessage = { message: "password_confirmaiton field is emapty" };
      messages.push(errMessage);
    }
    if (messages.length > 0) {
      this.setState({ errors: messages });
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.formValidate() === true) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser) => {
          createdUser.user
            .updateProfile({
              display: this.state.name,
              photoURL: `http://gravatar.com/avater/${md5(
                this.state.email
              )}?d=identicon`,
            })
            .then(() => {
              this.saveUser(createdUser);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  saveUser = (createdUser) => {
    this.state.usersRef
      .child(createdUser.user.uid)
      .set({
        name: this.state.name,
        avatar: createdUser.user.photoURL,
        email: this.state.email,
      })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="ui three column centered grid">
          <div className="column">
            <h2 className="ui teal image header">
              <i className="puzzle piece icon"></i>
              <div className="content">Register to your account</div>
            </h2>
            <form className="ui large form error" onSubmit={this.handleSubmit}>
              <div className="ui stacked segment">
                <div className="field ">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={this.handleName}
                    />
                  </div>
                </div>
                <div className="field ">
                  <div className="ui left icon input">
                    <i className="envelope icon"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="E-mail address"
                      onChange={this.handleEmail}
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
                      onChange={this.handlePassword}
                    />
                  </div>
                </div>
                <div className="field ">
                  <div className="ui left icon input">
                    <i className="undo icon"></i>
                    <input
                      type="password"
                      name="passwordconfirmation"
                      placeholder="Password Confirmation"
                      onChange={this.handlePasswordConfirmation}
                    />
                  </div>
                </div>
                <button
                  className="ui fluid large teal submit button"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="ui error message">
                {this.state.errors.map((err, index) => {
                  return (
                    <ul key={index}>
                      <li>{err.message}</li>
                    </ul>
                  );
                })}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

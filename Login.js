import React from "react";
import "./login.css";
class Form extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      Username: "",
      Password: "",
      errors: { Username: "", Password: "" },
    };
  }
  HandleChange = ({ target: { name, value, type, checked } }) => {
    if (type === "checkbox") value = checked;
    const errors = this.state.errors;
    switch (name) {
      case "Username": {
        if (value.length <= 3) {
          errors.Username = "FullName atleast 4 charactres";
        } else {
          errors.Username = "";
        }
        break;
      }
      case "Password": {
        if (value.length <= 5) {
          errors.Password = "The Password should be 6 characters";
        } else errors.Password = "";
        break;
      }

      case "default": {
        break;
      }
    }
    console.log(errors);

    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
      
        <p>LOGIN</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              name="Username"
              type="text"
              value={this.state.Username}
              onChange={this.HandleChange}
            />
            <span>{this.state.errors.Username}</span>
          </div>
          <br></br>
          <div>
            <label>Password</label>
            <input
              name="Password"
              type="password"
              value={this.state.Password}
              onChange={this.HandleChange}
            />
            <span>{this.state.errors.Password}</span>
          </div>
          <br></br>
          <div>
            <button type="submit">SignIn</button>
          </div> 
         
        </form>
      </>
    );
  }
}
export default Form;







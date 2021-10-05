import React from "react";

class User extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      Username: "",
      Password: "",
      Firstname: "",
      Lastname: "",
      errors: { Username: "", Password: "", Firstname: "", Lastname: "" },
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
        if (value.length <= 8) {
          errors.Password = "The Password should be 8 characters";
        } else errors.Password = "";
        break;
      }
      case "Firstname": {
        if (value.length <= 3) {
          errors.Firstname = "Firstname atleast 4 charactres";
        } else {
          errors.Firstname = "";
        }
        break;
      }
      case "Lastname": {
        if (value.length <= 3) {
          errors.Lastname = "Lastname least 4 charactres";
        } else {
          errors.Lastname = "";
        }
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
        <p>USER DETAILS</p>
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
              type="Password"
              value={this.state.Password}
              onChange={this.HandleChange}
            />
            <span>{this.state.errors.Password}</span>
          </div>
          <br></br>
          <div>
            <label>FirstName</label>
            <input
              name="Firstname"
              type="text"
              value={this.state.Firstname}
              onChange={this.HandleChange}
            />
            <span>{this.state.errors.Firstname}</span>
          </div>
          <br></br>
          <div>
            <label>Lastname</label>
            <input
              name="Lastname"
              type="text"
              value={this.state.Lastname}
              onChange={this.HandleChange}
            />
            <span>{this.state.errors.Lastname}</span>
          </div>
          <br></br>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}
export default User;





import React, {Component} from 'react';
import './App.css';

const emailRegex= RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^-{|}~`_']+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid = formErrors => {
  let valid= true;
  Object.values(formErrors).forEach(val => {
      (val.length>0) && (valid = false);
    });
  return valid;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }
  handleSubmit = element => {
    element.preventDefault();
    if(formValid(this.state.formErrors)){
      console.log(`
        --SUBMITING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `)
    } else {
      console.log('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  }

  handleChange = element => {
    element.preventDefault();
    const {name, value}=element.target;
    let formErrors= this.state.formErrors;
    

    switch(name){
      case "firstName":
        formErrors.firstName=
          value.length<3 && value.length>=0 
          ? "minimum 3 characters required" 
          : "";
        break;
        case "lastName":
        formErrors.lasttName=
          value.length<3 && value.length>=0 
          ? "minimum 3 characters required" 
          : "";
        break;
        case "email":
        formErrors.email=
          emailRegex.test(value) && value.length>0 
          ? "" 
          : "Invalid Email Address";
        break;
        case "password":
        formErrors.password=
          value.length< 6 && value.length>=0 
          ? "minimum 6 characters required" 
          : "";
        break;
          default:
        break;
    }
    this.setState=({formErrors, [name]:value}, (console.log(this.state)));
  };

  render() { 
    const {formErrors} = this.state;
    return ( 
      <React.Fragment>
      <div className="wrapper">
        <div className="form-wrapper"> 
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input type="text" 
                noValidate
                name="firstName"
                placeholder="First Name"
                className={formErrors.firstName.length>0 ? "error" : null}
                onChange= {this.handleChange}
              />
              {formErrors.firstName.length>0 && (
                <span className="errorMessage">{formErrors.formErrors.firstName}</span>
              )}
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" 
                noValidate
                name="lastName"
                placeholder="Last Name"
                className=""
                onChange= {this.handleChange}
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" 
                noValidate
                name="email"
                placeholder="Email"
                className=""
                onChange= {this.handleChange}
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" 
                noValidate
                name="password"
                placeholder="Password"
                className=""
                onChange= {this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already Have an Account</small>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
     );
  }
}
export default App;

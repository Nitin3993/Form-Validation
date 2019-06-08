import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="form-wrapper"> 
          <h1>Create Account</h1>
          <form noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input type="text" 
                noValidate
                name="firstName"
                placeholder="First Name"
                className=""
                
              />
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" 
                noValidate
                name="lastName"
                placeholder="Last Name"
                className=""
                
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" 
                noValidate
                name="email"
                placeholder="Email"
                className=""
                
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" 
                noValidate
                name="password"
                placeholder="Password"
                className=""
                
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

export default App;

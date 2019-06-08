import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="form-wrapper"> 
          <h1>Create Account</h1>
          <form  noValidate>
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
              <input type="text" 
                noValidate
                name="email"
                placeholder="Email"
                className=""
                
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="text" 
                noValidate
                name="password"
                placeholder="Password"
                className=""
                
              />
            </div>

          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

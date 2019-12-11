import React from 'react';

class Signup extends React.Component {
  render(){
    return (
      <form>
      <h1>Signup</h1>
      <div>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" placeholder="Username" />
      </div>
      <div>
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" placeholder="Password" />
      </div>
      <input type="submit" value="Signup" />
      </form>
    );
  }
}

export default Signup;

import React from 'react'

const Login = () => {
  return (
    <div className='login-container'>
      <h1>Login Page</h1>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" id='username' />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" id='email' />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" id='password' />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;
import React, { useState } from 'react'

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <form>
        <div>
          <label>First Name: </label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        </div>
        <div>
          <label>Email: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
        </div>
        <div>
        <p>Your Form Data</p>
        <p> First Name: {firstName} </p>
        <p> Last Name: {lastName} </p>
        <p> Email: {email} </p>
        <p> Password: {password} </p>
        <p> Confirm Password: {confirmPassword} </p>
      </div>
      </form>
    </div>
  )
}

export default UserForm;
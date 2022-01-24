import React, { useState } from 'react'
import cls from './Form.module.css'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validData, setValidData] = useState({ password: true, email: true })
  const regexpEmail = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,7}/
  const regexpPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/
  const styleEmail = [cls.input]
  const stylePassword = [cls.input]

  if (!validData.email) {
    styleEmail.push(cls.error)
  }

  if (!validData.password) {
    stylePassword.push(cls.error)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitForm = () => {
    setValidData({
      email: regexpEmail.test(email),
      password: regexpPass.test(password),
    })
    if (regexpEmail.test(email) && regexpPass.test(password)) {
      alert('Login')
    }
  }

  return (
    <form className={cls.Form} onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor='email'>
          Email:
          <input
            className={styleEmail.join(' ')}
            id='email'
            type='email'
            value={email}
            onChange={changeEmail}
          />
        </label>

        <label htmlFor='password'>
          Password:
          <input
            className={stylePassword.join(' ')}
            id='password'
            type='password'
            value={password}
            onChange={changePassword}
          />
        </label>
      </div>

      <button onClick={submitForm}>Login</button>
    </form>
  )
}

export default Form

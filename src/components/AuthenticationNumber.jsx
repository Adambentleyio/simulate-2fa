import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import authUser from '../utils/auth'

const AuthenticationNumber = () => {

  const correctLogin = '0000';

  const navigate = useNavigate()

  const [inputs, setInputs] = useState('')

  const handleChange = (e) => {
    setInputs(e.target.value)
    console.log(inputs)
  }


  const handleAuthenticate = async (e) => {
    e.preventDefault();

    setTimeout(() => {
      if (inputs === correctLogin) {
      navigate("/welcome")
      } else
      return alert("We don't recognise this login")
    }, 1000)
  }

    return (
      <div>
        <h2>Enter authentication code</h2>
        <p>We've text you a unique code to your preferred contact device </p>
        <p>Enter your code and press enter</p>
        <form className="form__2fa-code" onSubmit={handleAuthenticate}>
            <input type="text" name="n1" maxLength="4" value={inputs} onChange={handleChange}  />
            <button type="submit">
              Submit
            </button>
        </form>

      </div>
    )




}
  export default AuthenticationNumber
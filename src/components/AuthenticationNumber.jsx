import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
      <div className="">
        <h2>Enter authentication number</h2>
        <form onSubmit={handleAuthenticate}>
          <div className="inputs">
            <input type="text" name="n1" maxLength="4" value={inputs} onChange={handleChange}  />
          </div>
            <button type="submit">
              Submit
            </button>
        </form>

      </div>
    )




}
  export default AuthenticationNumber
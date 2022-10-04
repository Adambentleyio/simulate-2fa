import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import AuthenticationNumber from './components/AuthenticationNumber'
import './App.css'
import VerificationMethod from './components/VerificationMethod'
import Welcome from './components/Welcome'
import Nav from './components/Nav'

function App() {
  const [verifyFirstName, setVerifyFirstName] = useState('')
  const [verifyPostcode, setVerifyPostcode] = useState('')
  const [verifyDateOfBirth, setVerifyDateOfBirth] = useState(0)
  const [verifyCheck, setVerifyCheck] = useState(false)
  const [authNumber, setAuthNumber] = useState([])

  useEffect(() => {

  }, [verifyCheck])

  const personVerificationData = {
    firstName: "joe",
    postcode: "sw41aa",
    dateOfBirth: new Date(1988, 9, 10)
  }

  const handleChange = (e) => {
    const target = e.target
    target.name === "firstName" && setVerifyFirstName(target.value)
    target.name === "postcode" && setVerifyPostcode(target.value)
    target.name === "dateOfBirth" && setVerifyDateOfBirth(target.value)

 }

  const handleSubmit = (event) => {
    // prevent default form submission behaviour
    event.preventDefault()

    // destructure object values for validation
    const {firstName, postcode, dateOfBirth} = personVerificationData

    //TODO format and compare dateOfBirth to check against input

    // check verification against inputs and conditionally render component
   if (verifyFirstName === firstName && verifyPostcode === postcode)
   { setVerifyCheck(true)
  } else setVerifyCheck(false)
    console.log("Submitted form")
 }


  return (
    <div className="App">
      {/* <code>{verifyFirstName}|</code>
      <code>{verifyPostcode}|</code>
      <code>{verifyDateOfBirth}</code> */}
      <div className="card-2fa">
        <h2>Two-Factor Authentication</h2>
        <p>Please enter your details to continue</p>
        <small>Use <span>joe</span> and <span>sw41aa</span> for the inputs</small>
        <div className="container">
          <form onSubmit={handleSubmit} className="card-2fa__form">
            <div className="stack card-2fa__content">
              <label htmlFor="">First name</label>
              <input name="firstName" type="text" value={verifyFirstName} onChange={handleChange} />
            </div>
            <div className="stack">
              <label htmlFor="">Post code</label>
              <input name="postcode" type="text" value={verifyPostcode} onChange={handleChange} />
            </div>
            <div className="stack">
              <label htmlFor="">Date of birth</label>
              <input name="dateOfBirth" type="date" value={verifyDateOfBirth} onChange={handleChange} />
            </div>
            <div>
            <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      {verifyCheck && <VerificationMethod /> }
      {/* {verifyCheck && <AuthenticationNumber authenticationNumber={setAuthNumber} />} */}
    </div>
  )
}

export default App



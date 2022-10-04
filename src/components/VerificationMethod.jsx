import React from 'react';
import {Link} from 'react-router-dom';

function VerificationMethod() {

    const handleAuthentication = () => {
        // run function and return promise
        console.log("authenticate")
    }
  return (
    <div>
        <h2>Receive a verification number</h2>
        <p>Where shall we send it?</p>
        <div className="twofa-options">
            <button onClick={handleAuthentication} className="twofa-btn">
              <Link to="/authentication"><p>Mobile +44*******932</p></Link>
            </button>
            <button disabled onClick={handleAuthentication} className="twofa-btn"><p>Landline +44*******627</p></button>
            <button disabled onClick={handleAuthentication} className="twofa-btn"><p>Email *******@gmail.com</p></button>
        </div>
    </div>
  )
}

export default VerificationMethod
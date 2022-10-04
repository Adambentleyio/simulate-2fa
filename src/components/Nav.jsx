import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

function Nav() {

    return (
        <div className="header__nav">
           <Link href="/"><img className="logo logo-spin" src={logo} alt="reactjs logo" /></Link>
            <div>
                <a href="/">Sign in</a>
            </div>
        </div>
    )
}

export default Nav
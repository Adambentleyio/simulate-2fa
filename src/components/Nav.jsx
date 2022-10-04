import logo from '../assets/react.svg'

function Nav() {

    return (
        <div className="header__nav">
           <a href="#"><img className="logo logo-spin" src={logo} alt="" /></a>
            <div>
                <a href="/">Sign in</a>
            </div>
        </div>
    )
}

export default Nav
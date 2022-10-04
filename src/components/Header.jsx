import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
    <Nav />
    <div className="page-container">
    <Outlet />
    </div>

    </>
    )
}

export default Header
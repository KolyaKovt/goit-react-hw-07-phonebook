import { Link } from "react-router-dom"
import { selectIsLoggedIn } from "../Redux/auth/slice"
import { useSelector } from "react-redux"
import { AuthMenu } from "./AuthMenu"
import { UserMenu } from "./UserMenu"

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <header className="px-8">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/contacts"}>Contacts</Link>
            </li>
            <li>
              <details>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

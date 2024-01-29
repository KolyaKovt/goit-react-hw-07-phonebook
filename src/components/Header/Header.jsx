import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="px-5">
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
              <details>
                <summary>Auth</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link to={"/login"}>Log in</Link>
                  </li>
                  <li>
                    <Link to={"/register"}>Register</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

import { Link } from "react-router-dom"

export const AuthMenu = () => {
  return (
    <>
      <summary>Auth</summary>
      <ul className="p-2 bg-base-100 rounded-t-none">
        <li>
          <Link to={"/login"}>Log in</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
      </ul>
    </>
  )
}

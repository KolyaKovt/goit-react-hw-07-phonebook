import { Link } from "react-router-dom"
import { useRef } from "react"

export const AuthMenu = () => {
  const menu = useRef(null)
  const closeMenu = () => {
    menu.current.click()
  }

  return (
    <>
      <summary ref={menu}>Auth</summary>
      <ul className="p-2 bg-base-100 rounded-t-none">
        <li>
          <Link to={"/login"} onClick={closeMenu}>
            Log in
          </Link>
        </li>
        <li>
          <Link to={"/register"} onClick={closeMenu}>
            Register
          </Link>
        </li>
      </ul>
    </>
  )
}

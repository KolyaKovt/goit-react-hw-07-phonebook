import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../Redux/auth/slice"
import { logoutThunk } from "../Redux/auth/operations"

export const UserMenu = () => {
  const dispatch = useDispatch()
  const { name, email } = useSelector(selectUser)

  return (
    <>
      <summary>{name}</summary>
      <ul className="p-2 bg-base-100 rounded-t-none">
        <li>{email}</li>
        <li>
          <button type="button" onClick={() => dispatch(logoutThunk())}>Exit</button>
        </li>
      </ul>
    </>
  )
}

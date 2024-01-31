import { useDispatch, useSelector } from "react-redux"

import { selectFilter, setFilter } from "../Redux/filter/slice"

export const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)

  return (
    <>
      <p className="mb-5">Find contacts by name</p>
      <input
        className="input input-bordered w-[100%] mb-5"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  )
}

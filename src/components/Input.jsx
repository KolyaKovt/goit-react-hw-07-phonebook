import { FaEye } from "react-icons/fa6"
import { FaEyeSlash } from "react-icons/fa6"
import { useState } from "react"

export const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  error,
  register,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const isPassword = type === "password"

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="relative">
        <input
          {...register(name)}
          type={isPassword ? `${isPasswordShown ? "text" : "password"}` : type}
          placeholder={placeholder}
          className="input input-bordered w-[100%]"
        />
        {isPassword && (
          <button
            className="absolute top-4 right-5"
            type="button"
            onClick={() => setIsPasswordShown(prev => !prev)}
          >
            {isPasswordShown ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  )
}

import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Input } from "../components/Input"

import { loginThunk } from "../Redux/auth/operations"

const Login = () => {
  const dispatch = useDispatch()

  const submit = data => {
    dispatch(loginThunk(data))
    reset()
  }

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            You don&apos;t have an account yet? You can register{" "}
            <Link className="underline text-blue-500" to={"/register"}>
              here
            </Link>
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(submit)} className="card-body">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="email"
              error={errors.email?.message}
              register={register}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="password"
              error={errors.password?.message}
              register={register}
            />
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

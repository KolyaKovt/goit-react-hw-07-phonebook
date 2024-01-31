import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../Redux/auth/slice"
import { Link } from "react-router-dom"

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Greetings to the Phonebook website! We&apos;re thrilled to welcome you to
            our user-friendly platform designed to simplify your contact
            management experience. Here, you have the power to effortlessly add
            and organize your contacts with just a few clicks.
          </p>
          <Link
            to={isLoggedIn ? "/contacts" : "/login"}
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

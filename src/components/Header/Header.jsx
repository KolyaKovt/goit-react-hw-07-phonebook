import { Link } from "react-router-dom"
import { StyledHeader, StyledNav, StyledNavLink } from "./Header.styled"

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavLink to={"/"}>Home</StyledNavLink>
        <StyledNavLink to={"/contacts"}>Contacts</StyledNavLink>
      </StyledNav>

      <div>
        <Link to={"/login"}>Log in</Link>
        <Link to={"/signup"}>Sign up</Link>
      </div>
    </StyledHeader>
  )
}

export default Header

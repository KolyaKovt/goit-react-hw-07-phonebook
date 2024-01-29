import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledHeader = styled.header`
  height: 50px;
  background-color: #6588ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    color: blue;
  }
`

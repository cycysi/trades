import { NavLink as BaseNavLink } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

export const NavLink = styled(BaseNavLink)(
  [tw`text-light-100 uppercase font-bold px-2 align-bottom`],
  ({ activeClassName }) => [activeClassName]
)

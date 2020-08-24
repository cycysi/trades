import React from 'react'
import tw from 'twin.macro'
import { BrandName } from 'components/BrandName'

const NavLink = tw.a`px-0 text-light-100 font-bold text-2xl`

export function Brand() {
  return (
    <NavLink href="/">
      <BrandName />
    </NavLink>
  )
}

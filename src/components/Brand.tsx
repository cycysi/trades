import React from 'react'
import tw from 'twin.macro'
import { BrandName } from 'components/BrandName'
import { NavLink } from 'components/NavLink'

export function Brand() {
  return (
    <NavLink tw="px-0" to="/" css={[tw`text-light-100 font-bold text-2xl`]}>
      <BrandName />
    </NavLink>
  )
}

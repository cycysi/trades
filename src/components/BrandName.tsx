import React from 'react'
import tw from 'twin.macro'

const BrandTextHighlight = tw.span`text-primary-500`

export function BrandName() {
  return (
    <>
      ITEMS<BrandTextHighlight>2</BrandTextHighlight>TRADE
    </>
  )
}

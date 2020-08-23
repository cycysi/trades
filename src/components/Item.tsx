import React, { useState } from 'react'
import Popover from 'react-popover'
import { css } from 'twin.macro'
type ItemExterior = 'FN' | 'MW' | 'FT' | 'WW' | 'BS'
type ItemRarity =
  | 'Common'
  | 'Uncommon'
  | 'Mythical'
  | 'Rare'
  | 'Immortal'
  | 'Legendary'
  | 'Arcana'

type ItemQuality =
  | 'Strange'
  | 'Unique'
  | 'Haunted'
  | 'Genuine'
  | 'Decorated Weapon'
  | 'Vintage'

type ItemType =
  | 'Key'
  | 'Knife'
  | 'Pistol'
  | 'Rifle'
  | 'Sniper Rifle'
  | 'SMG'
  | 'Shotgun'
  | 'Machinegun'
  | 'Graffiti'
  | 'Sticker'
  | 'Pin'
  | 'Music Kit'
  | 'Container'
  | 'Wearable'
  | 'Courier'
  | 'Treasure'
  | 'Gem / Rune'
  | 'Tool'
  | 'Ward'
  | 'Taunt'
  | 'Announcer'
  | 'Bundle'
  | 'HUD Skin'
  | 'Loading Screen'
  | 'Cursor Pack'
  | any

export type ItemProps = {
  name: string
  weapon?: string
  price: number
  image: string
  type: ItemType
  duplicate?: any[]
  exterior?: ItemExterior
  float?: string
  rarity?: ItemRarity
  hero?: string
  quality?: ItemQuality
  class?: string
  isStatTrak?: boolean
  onClick: any
}

function PopoverContent(props: ItemProps) {
  return (
    <div tw="p-4 bg-dark-800 shadow border-dark-900">
      {props.class && <h1 tw="text-xs text-light-100">{props.class}</h1>}
      {props.hero && <h1 tw="text-xs text-light-100">{props.hero}</h1>}
      <h1 tw="font-bold text-xl text-light-100">{props.name}</h1>
      {props.weapon && <h1 tw="font-medium text-light-300">{props.weapon}</h1>}
      {props.type && <h1 tw="font-medium text-light-300">{props.type}</h1>}
      {props.exterior && (
        <h2 tw="text-sm text-light-300">
          {props.exterior === 'FN'
            ? 'Factory New'
            : props.exterior === 'MW'
            ? 'Minimal Wear'
            : props.exterior === 'FT'
            ? 'Field Tested'
            : props.exterior === 'BS'
            ? 'Battle Scarred'
            : props.exterior === 'WW'
            ? 'Well Worn'
            : ''}
        </h2>
      )}
      {props.float && <h3 tw="text-sm text-light-100">FV: {props.float}</h3>}
      {props.rarity && <h3 tw="text-sm text-light-100">{props.rarity}</h3>}
      {props.quality && <h3 tw="text-sm text-light-100">{props.quality}</h3>}
    </div>
  )
}

export function Item(props: ItemProps) {
  const [showPop, setPop] = useState(false)
  return (
    <Popover
      isOpen={showPop}
      preferPlace="below"
      place="start"
      body={<PopoverContent {...props} />}
    >
      <div
        tw="my-2 px-2 w-1/3 xl:w-1/4 overflow-hidden cursor-pointer"
        onMouseOver={() => setPop(true)}
        onMouseOut={() => setPop(false)}
        onClick={props.onClick}
      >
        <div
          tw="bg-dark-800 flex relative flex-col"
          css={[
            css`
              min-height: 150px;
            `,
          ]}
        >
          <div tw="flex justify-between items-center pt-2 px-2">
            {props.isStatTrak && (
              <span tw="uppercase text-secondary-500 mr-auto">st</span>
            )}
            {props.exterior && (
              <span tw="uppercase text-light-100 ml-auto">
                {props.exterior}
              </span>
            )}
          </div>
          {props.rarity && (
            <span tw="block text-center pt-2 text-light-100">
              {props.rarity}
            </span>
          )}
          {props.quality && (
            <span tw="block text-center pt-2 text-light-100">
              {props.quality}
            </span>
          )}
          <img
            tw="object-center w-full lg:w-7/12 mt-4 mx-auto"
            src={`https:/tradeskinsfast.com/steamItems/${props.image}`}
            alt={`A ${props.name} with ${props.image}`}
          />
          <span tw="font-bold  text-light-100 mt-auto text-center block pb-2">
            $ {props.price}
          </span>
        </div>
      </div>
    </Popover>
  )
}

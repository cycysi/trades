import React from 'react'
import tw from 'twin.macro'
import { Item, ItemProps } from 'components/Item'
import { Caret } from 'components/Caret'
import { useItems } from 'hooks/useStore'

type SelectedItemsProps = {
  isBot?: boolean
  items: ItemProps[]
  total: number
}

const Container = tw.div`flex flex-col w-full border-4 border-dark-800 h-64`
const Header = tw.div`flex items-center justify-between bg-dark-800`
const HeaderText = tw.span`font-bold uppercase text-light-100 px-4 py-4`
const SupportText = tw.h1`uppercase text-xl font-light text-center mb-2`
const ItemsContainer = tw.div`w-full flex items-center justify-center flex-wrap overflow-x-hidden`

export function SelectedItems(props: SelectedItemsProps) {
  const { selectedItems, removeItem } = useItems()
  return (
    <Container>
      <Header>
        <HeaderText css={[props.isBot && tw`order-last`]}>
          you &nbsp;{!props.isBot ? 'offer' : 'receive'}
        </HeaderText>
        <HeaderText>
          <span tw="text-primary-500">$&nbsp;</span>
          {props.total}
        </HeaderText>
      </Header>
      {!props.isBot || !selectedItems.length ? (
        <div tw="flex flex-col items-center justify-center pt-16">
          <SupportText>select items you want to trade</SupportText>
          <Caret />
          <Caret />
          <Caret />
        </div>
      ) : (
        <ItemsContainer>
          {props.items.map((item: any) => (
            <Item
              onClick={() => removeItem(item.id)}
              key={`remove-item:${item.id}:${Date.now()}`}
              {...item}
            />
          ))}
        </ItemsContainer>
      )}
    </Container>
  )
}

import { useItems } from 'hooks/useStore'
import React from 'react'
import tw, { css } from 'twin.macro'
import { Item } from 'components/Item'

type ItemShowcaseProps = {
  items: []
  isBot?: boolean
}

const Container = tw.div`flex flex-col w-full border-4 border-dark-800 mt-8`
const Header = tw.div`flex items-center justify-between bg-dark-800`
const HeaderText = tw.span`font-bold uppercase text-light-100 px-4 py-4`
const ItemsContainer = tw.div`w-full flex items-center justify-center flex-wrap overflow-x-hidden`

export function ItemShowcase(props: ItemShowcaseProps) {
  const { addItem } = useItems()
  return (
    <Container
      css={[
        css`
          height: 600px;
        `,
      ]}
    >
      <Header>
        <HeaderText>{props.isBot ? 'Bot' : 'Your'} inventory</HeaderText>
      </Header>
      {props.isBot ? (
        <ItemsContainer>
          {props.items.slice(0, 100).map((item: any) => (
            <Item
              onClick={() => addItem(item.id)}
              key={`${Date.now()}:${item.id}`}
              {...item}
            />
          ))}
        </ItemsContainer>
      ) : (
        <div tw="w-full h-full flex items-center justify-center">
          <a
            href="/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2Fhttps://detailscsgo.net%2F%3Flogin&openid.realm=https%3A%2F%2Fhttps://detailscsgo.net&openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select"
            tw="flex flex-col"
          >
            <h1 tw="font-bold text-2xl text-dark-800">
              Sign in to start trading
            </h1>
            <h1 tw="text-center">Sign in through Steam</h1>
          </a>
        </div>
      )}
    </Container>
  )
}

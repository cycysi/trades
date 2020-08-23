import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { BrandName } from 'components/BrandName'
import { Layout } from 'components/layout'

const Container = tw.main`my-12 flex flex-col w-screen overflow-x-hidden px-8`
const Title = tw.h1`text-4xl font-bold text-center uppercase`
const Divider = styled.div(
  css`
    width: 200px;
  `,
  tw`h-1 bg-primary-500 mx-auto`
)
const Text = tw.p`text-dark-500 text-2xl text-center pt-4`
const Spacer = tw.div`max-w-full h-px my-20`
const Question = tw(
  Title
)`text-left text-3xl text-primary-500 font-medium text-center md:text-left`
const Answer = tw(
  Text
)`text-left text-xl pb-12 text-center md:(text-left pr-20)`

export default function FAQ() {
  const sitename = process.env.REACT_APP_SITE_NAME
  return (
    <Layout>
      <Container>
        <Title>
          about <BrandName />
        </Title>
        <Divider />
        <Text>
          {sitename} is the best Trading Bot that lets you trade Steam items
          securely and efficiently
        </Text>
        <Spacer />
        <Title>FREQUENTLY ASKED QUESTIONS</Title>
        <Text>
          Does this information help you? If not, contact technical support
        </Text>
        <Spacer />
        <Question>
          CAN I TRADE ITEMS ON BOTS IF THERE'S A 1-8 DAY ON THEM?
        </Question>
        <Answer>
          These are the items that are currently on Steam trade cooldown (or
          ban). You can trade those items in our bots iventory and you'll have
          it's virtual copy on your site inventory. You'll be able to trade this
          copy from your inventory at any time for any other skin on our site.
          As soon as trade cooldown is over, you'll be able to take that item on
          your Steam inventory.
        </Answer>
        <Question>THE SITE ISN'T WORKING?</Question>
        <Answer>
          1) Try the latest version Google chrome (Don't ignore this advice,
          it's actually helps almost all the time). 2) Make sure that Steam
          status on the main page is green. There are some reasons the site
          won't work properly for a short period, there may also be some trade
          problems. This is due to technical maintenance or Steam lag issues. In
          this case - we recommend you waiting for a while (no longer than 2
          hours usually) until site is fully functioning again.
        </Answer>
        <Question>CAN I REDUCE THE WEBSITE COMMISSION?</Question>
        <Answer>
          You can activate a 2% bonus to every trade by adding 'cs.money' to
          your Steam profile name. After doing this, re-login on cs.money and
          refresh your inventory to activate bonus. This will reduce the site
          commission from 9% to 7%. You can activate a 2% bonus to every trade
          by adding 'dota.money' to your Steam profile name. After doing this,
          re-login on dota.money and refresh your inventory to activate bonus.
          This will reduce the site commission from 9% to 7%.
        </Answer>
        <Question>
          WHY DO SOME ITEMS MARKED AS ‘UNTRADABLE’ IN MY INVENTORY?
        </Question>
        <Answer>
          There is a temporary trade ban on the skin by Steam that will last
          less than 7 days. This may be due to it being purchased from the
          market recently, or traded with users not using the Steam Mobile
          Authenticator.
        </Answer>
        <Question>
          WHY DO SOME ITEMS MARKED AS ‘OVERSTOCK’ ON THE WEBSITE?
        </Question>
        <Answer>
          This status implies there are too many similar items on our accounts
          right now.
        </Answer>
        <Question>
          WHY DO SOME ITEMS MARKED AS ‘UNAVAILABLE’ ON THE WEBSITE?
        </Question>
        <Answer>
          These items are unavailable in case of their changeable price. In our
          effort to avoid stocking of cheap and low rank items we don't accept
          them.
        </Answer>
        <Question>CAN I SEND TRADE OFFERS DIRECTLY THROUGH STEAM?</Question>
        <Answer>
          Unfortunately, there is no way for that now. All the trades should be
          sent through our website only.
        </Answer>
      </Container>
    </Layout>
  )
}

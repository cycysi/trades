import React from 'react'
import tw, { css } from 'twin.macro'
import { SelectedItems } from 'components/SelectedItems'
import { Button } from 'elements/Button'
import { useItems } from 'hooks/useStore'
import { ItemShowcase } from 'components/ItemShowcase'
import { Layout } from 'components/layout'

const Container = tw.main`p-2`

const steps = [
  'Sign in through Steam',
  'Enter tradelink',
  'Select your items',
  'Select items on trading bots',
  'Confirm trade',
]

export default function Home() {
  const { selectedItemsTotal, selectedItems, allItems } = useItems()
  return (
    <Layout>
      <Container
        css={[
          css`
            width: calc(100% - 0.5rem);
          `,
        ]}
      >
        <div tw="flex flex-wrap -mx-1 overflow-hidden">
          <div tw="my-1 pr-1 w-full overflow-hidden md:w-5/12">
            <div tw="">
              <SelectedItems total={0.0} items={[]} />
              <ItemShowcase items={[]} />
            </div>
          </div>

          <div tw="my-1 px-1 w-full overflow-hidden md:w-2/12">
            <div tw="bg-dark-800 px-2 h-full">
              <Button tw="w-full mt-2">Trade</Button>
              <hr tw="mb-2 md:my-4 invisible" />
              <div tw="flex flex-col items-center hidden md:block w-full">
                <h1 tw="font-bold text-2xl text-light-100 text-center mb-2">
                  Tutorial
                </h1>
                {steps.map((step, index) => (
                  <div tw="pb-2" key={`steps:${index}`}>
                    <h1 tw="font-bold text-xl text-light-100 text-center">
                      Step {index + 1}
                    </h1>
                    <h4 tw="text-sm font-light text-light-300 text-center">
                      {step}
                    </h4>
                  </div>
                ))}
                <h1 tw="font-bold text-2xl text-light-100 text-center mt-16">
                  Item rates
                </h1>

                <h2 tw="font-medium text-center text-light-200">$40+</h2>
                <h3 tw="font-light text-center text-light-300 text-sm">
                  95% | 100%
                </h3>
                <div tw="pb-4 h-1 w-full" />

                <h2 tw="font-medium text-center text-light-200">$20 - $40</h2>
                <h3 tw="font-light text-center text-light-300 text-sm">
                  94% | 100%
                </h3>
                <div tw="pb-4 h-1 w-full" />

                <h2 tw="font-medium text-center text-light-200">$2 - $20</h2>
                <h3 tw="font-light text-center text-light-300 text-sm">
                  93.5% | 100%
                </h3>
                <div tw="pb-4 h-1 w-full" />

                <h2 tw="font-medium text-center text-light-200">$0.5 - $2</h2>
                <h3 tw="font-light text-center text-light-300 text-sm">
                  91% | 98%
                </h3>
                <div tw="pb-4 h-1 w-full" />
                <h2 tw="font-medium text-center text-light-200">
                  $0.07 - $0.5
                </h2>
                <h3 tw="font-light text-center text-light-300 text-sm">
                  85% | 92%
                </h3>
                <div tw="pb-4 h-1 w-full" />
              </div>
            </div>
          </div>

          <div tw="my-1 pl-1 w-full overflow-hidden md:w-5/12">
            <div tw="">
              <SelectedItems
                total={selectedItemsTotal}
                items={selectedItems}
                isBot
              />
              <ItemShowcase isBot items={allItems} />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

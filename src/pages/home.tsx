import React from 'react'
import tw, { css } from 'twin.macro'
import { SelectedItems } from 'components/SelectedItems'
import { useItems } from 'hooks/useStore'
import { ItemShowcase } from 'components/ItemShowcase'
import { Layout } from 'components/layout'
import { BrandName } from 'components/BrandName'
import { LoginButton } from 'components/Header'

const Container = tw.main`p-2 h-auto`

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
            overflow-y: hidden !important;
          `,
        ]}
      >
        <div tw="w-full h-64 relative overflow-hidden">
          <img
            css={[
              css`
                z-index: 5;
              `,
            ]}
            tw="absolute inset-0"
            src={process.env.PUBLIC_URL + '/images/banner.jpg'}
            alt="Hero banner"
          />
          <div tw="bg-light-500 bg-opacity-75 w-full h-full z-10 absolute inset-0 flex flex-col">
            <div tw="text-center text-5xl font-bold flex justify-center w-full mt-8">
              <BrandName />
            </div>
            <h1 tw="text-center font-medium text-dark-500 uppercase text-xl">
              Best skin trade bot
            </h1>
            <LoginButton className="goAuth" href="/" tw="mx-auto mt-8">
              Trade now
            </LoginButton>
          </div>
        </div>
        <div tw="flex flex-wrap w-full h-24 items-center">
          <div tw="flex flex-col w-full md:w-1/3">
            <div tw="flex items-center justify-center text-2xl font-bold">
              <span
                css={[
                  css`
                    color: #48bb78;
                  `,
                ]}
              >
                <svg
                  viewBox="0 0 20 20"
                  tw="w-5 h-5 fill-current mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3a7 7 0 00-4.95 11.95l1.414-1.414A5 5 0 0110 5V3zm4.95 2.05A7 7 0 0110 17v-2a5 5 0 003.536-8.536L14.95 5.05zM10 20l-4-4 4-4v8zm0-12l4-4-4-4v8z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <h1
                css={[
                  css`
                    color: #48bb78;
                  `,
                ]}
              >
                26,573,932
              </h1>
            </div>
            <span tw="text-center text-sm uppercase text-dark-600 font-medium">
              total trades
            </span>
          </div>
          <div tw="flex flex-col w-full md:w-1/3">
            <div tw="flex items-center font-bold text-2xl justify-center">
              <span
                css={[
                  css`
                    color: #4299e1;
                  `,
                ]}
              >
                <svg
                  viewBox="0 0 20 20"
                  tw="w-5 h-5 fill-current mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5.002A5.005 5.005 0 0110 0c2.761 0 5 2.229 5 5.002v1.996A5.005 5.005 0 0110 12c-2.761 0-5-2.229-5-5.002V5.002zM0 16.676A19.908 19.908 0 0110 14c3.643 0 7.058.974 10 2.676V20H0v-3.324z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <h1
                css={[
                  css`
                    color: #4299e1;
                  `,
                ]}
              >
                2,185,130
              </h1>
            </div>
            <span tw="text-center text-sm uppercase text-dark-600 font-medium">
              total users
            </span>
          </div>
          <div tw="flex flex-col w-full md:w-1/3">
            <div tw="flex items-center justify-center font-bold text-2xl">
              <span
                css={[
                  css`
                    color: #ecc94b;
                  `,
                ]}
              >
                <svg
                  viewBox="0 0 20 20"
                  tw="w-5 h-5 fill-current mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10h8c0-2.56-.976-5.118-2.929-7.071A9.969 9.969 0 0010 0v8a2 2 0 102 2zm7.9 1.414a9.956 9.956 0 01-2.829 5.657c-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142A9.956 9.956 0 018.586.099v2.026a8 8 0 109.289 9.289H19.9zm-4.068 0a6 6 0 11-7.246-7.246v2.09a4 4 0 105.157 5.157h2.089z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <h1
                css={[
                  css`
                    color: #ecc94b;
                  `,
                ]}
              >
                1311
              </h1>
            </div>
            <span tw="text-center text-sm uppercase text-dark-600 font-medium">
              online users
            </span>
          </div>
        </div>
        <div tw="flex flex-wrap -mx-1 overflow-hidden" id="#trade">
          <div tw="my-1 pr-1 w-full overflow-hidden md:w-5/12">
            <div tw="">
              <SelectedItems total={0.0} items={[]} />
              <ItemShowcase items={[]} />
            </div>
          </div>

          <div tw="my-1 px-1 w-full overflow-hidden md:w-2/12">
            <div tw="bg-dark-800 px-2 h-full pt-1">
              <LoginButton
                tw="w-full mt-2 block text-center"
                href="/"
                className="goAuth"
              >
                Trade
              </LoginButton>
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

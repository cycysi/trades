import React from 'react'
import tw from 'twin.macro'

const Link = tw.a`text-sm text-light-100 hover:text-primary-500`
const links = [
  'Terms & use',
  'Bug bounty',
  'Privacy policy',
  'Cookie Policy',
  'Statistics',
]
const payments = [
  {
    name: 'Paypal',
    link: 'https://www.paypal.com/',
    image: 'https://cs.money/images/logo_icons/paypal_footer.svg',
  },
  {
    name: 'MasterCard',
    link: 'https://www.mastercard.us/en-us.html',
    image: 'https://cs.money/images/logo_icons/mastercard.svg',
  },
  {
    name: 'Visa',
    link: 'https://usa.visa.com/',
    image: 'https://cs.money/images/logo_icons/visa.svg',
  },
  {
    name: 'G2A PAY',
    link: 'https://pay.g2a.com/',
    image: 'https://cs.money/images/logo_icons/g2footer.svg',
  },
]
export function Footer() {
  return (
    <footer tw="w-full bg-dark-800 flex items-center flex-wrap p-4">
      <div tw="w-full text-light-100 text-center order-last pt-4 lg:(order-first w-1/3 pt-0 text-left)">
        &copy;2015 &mdash; {new Date().getFullYear()}{' '}
        <span tw="text-primary-500 pl-2 font-bold">
          {process.env.REACT_APP_SITE_NAME}
        </span>
      </div>
      <nav tw="w-full flex items-center justify-center lg:(w-1/3)">
        {payments.map((pay: any, ind: number) => (
          <Link key={`payments:${ind}`} href={pay.link} target="_blank">
            <img tw="w-20 h-8" src={pay.image} alt={pay.name} />
          </Link>
        ))}
      </nav>
      <nav tw="w-full flex items-center justify-center pt-4 lg:(w-1/3 pt-0)">
        {links.map((link: string, index: number) => (
          <Link tw="px-1" key={`link-footer:${index}`} href="/">
            {link}
          </Link>
        ))}
      </nav>
      <div></div>
    </footer>
  )
}

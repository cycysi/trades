import tw, { styled, TwStyle } from 'twin.macro'

type ButtonFlavor = 'primary' | 'secondary'
export type ButtonProps = {
  flavor?: ButtonFlavor
}

const buttonStyles: Record<ButtonFlavor, TwStyle> = {
  primary: tw`bg-primary-600 hover:bg-primary-500 text-light-100`,
  secondary: tw`bg-secondary-600 hover:bg-secondary-500 text-light-100`,
}
export const Button = styled.button<ButtonProps>([
  tw`px-5 py-2`,
  tw`focus:(outline-none)`,
  ({ flavor = 'primary' }) => [buttonStyles[flavor]],
])

Button.defaultProps = {
  flavor: 'primary',
}

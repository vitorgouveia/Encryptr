import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'dark',

    colorPrimary: '#252329',
    colorSecondary: '#5B3A9C',

    appBg: '#0F0E11',
    appContentBg: '#252329',
    appBorderColor: '#5B3A9C',
    appBorderRadius: 0,

    fontBase: '"JetBrains Mono", sans-serif',
    fontCode: 'monospace',

    textColor: '#C5C2CB',
    textInverseColor: '#0F0E11',

    barTextColor: '#3C3842',
    barSelectedColor: '#5B3A9C',
    barBg: '#0F0E11',

    inputBg: '#252329',
    inputBorder: '#686374',
    inputTextColor: '#9691A1',
    inputBorderRadius: 0,

    brandTitle: 'PasswordGenerator',
    brandUrl: 'https://github.com/vitorGouveia/PasswordGenerator',
    brandTarget: '_self',
  }),
})

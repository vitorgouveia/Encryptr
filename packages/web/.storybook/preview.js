// export * from '~~/.nuxt-storybook/storybook/preview.js'
import { themes } from '@storybook/theming'

import '../src/styles/global.scss'

export const parameters = {
  docs: {
    theme: themes.dark,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

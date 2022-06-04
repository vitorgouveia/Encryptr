import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const gray_700 = "#323843";
const gray_900 = "#121317";
const primary_500 = "#4D69A3";

addons.setConfig({
  theme: create({
    base: "dark",
    colorPrimary: gray_700,
    colorSecondary: primary_500,

    appBg: gray_900,
    appContentBg: gray_700,
    appBorderColor: primary_500,
    appBorderRadius: 0,

    fontBase: '"Oxygen", sans-serif',
    fontCode: "monospace",

    textColor: "#DFE2E7",
    textInverseColor: "#121317",

    barTextColor: "#4D69A3",
    barSelectedColor: "#8DA1C9",
    barBg: "#0F0E11",

    inputBg: gray_700,
    inputBorder: "#4B5363",
    inputTextColor: "#BFC4CF",
    inputBorderRadius: 0,

    brandTitle: "Encryptr",
    brandUrl: "https://github.com/vitorGouveia/PasswordGenerator",
    brandTarget: "_self",
  }),
});

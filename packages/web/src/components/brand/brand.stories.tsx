import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Brand, defaultColorScheme, ukraineColorScheme } from "./index";

export default {
  title: "Design System/Dark/Components/Brand",
  component: Brand,
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = ({ ...props }) => {
  return <Brand {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  colors: defaultColorScheme,
  variant: "full",
};

export const Icon = Template.bind({});
Icon.args = {
  colors: defaultColorScheme,
  variant: "icon",
};

export const Ukraine = Template.bind({});
Ukraine.args = {
  colors: ukraineColorScheme,
};

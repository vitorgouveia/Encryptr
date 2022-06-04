import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "./index";

export default {
  title: "Design System/Dark/Components/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = ({ ...props }) => {
  return <Footer />;
};

export const Default = Template.bind({});
Default.args = {};

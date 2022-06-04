import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./index";

export default {
  title: "Design System/Dark/Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ ...props }) => {
  return <Header {...props} />;
};

export const Default = Template.bind({});
Default.args = {};

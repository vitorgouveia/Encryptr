import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Sidebar } from "./index";

export default {
  title: "Design System/Dark/Components/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = ({ ...props }) => {
  return <Sidebar {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Lorem Ipsum",
  href: "/",
};

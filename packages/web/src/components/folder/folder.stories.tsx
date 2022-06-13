import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Folder } from "./index";

export default {
  title: "Design System/Dark/Components/Folder",
  component: Folder,
} as ComponentMeta<typeof Folder>;

const Template: ComponentStory<typeof Folder> = ({ ...props }) => {
  return <Folder />;
};

export const Default = Template.bind({});
Default.args = {};

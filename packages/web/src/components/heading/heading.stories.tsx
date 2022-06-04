import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "./index";

export default {
  title: "Design System/Dark/Components/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = ({ ...props }) => {
  return <Heading label="Lorem Ipsum" {...props} />;
};

export const Title = Template.bind({});
Title.args = {
  variant: "title",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: "subtitle",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const Small = Template.bind({});
Small.args = {
  variant: "small",
};

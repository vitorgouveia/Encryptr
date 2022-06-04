import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./index";

export default {
  title: "Design System/Dark/Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...props }) => {
  return <Button label="Lorem Ipsum" {...props} />;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

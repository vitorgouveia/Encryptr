import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./index";

export default {
  title: "Design System/Dark/Components/Input",
  component: Input,
  argTypes: {
    state: {
      control: {
        type: "select",
        options: ["error", "warning", "success", "focused", "none"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["text", "password"],
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ ...props }) => {
  return <Input label="Lorem Ipsum" {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Lorem Ipsum",
  placeholder: "Lorem Ipsum",
  type: "text",
};

export const Focused = Template.bind({});
Focused.args = {
  label: "Lorem Ipsum",
  placeholder: "Lorem Ipsum",
  type: "text",
  state: "focused",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Lorem Ipsum",
  placeholder: "Lorem Ipsum",
  type: "text",
  state: "focused",
  disabled: true,
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  label: "Lorem Ipsum",
  placeholder: "Lorem Ipsum",
  type: "text",
  state: "focused",
  leftIcon: "Q",
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: "Lorem Ipsum",
  placeholder: "Lorem Ipsum",
  type: "text",
  state: "focused",
  rightIcon: "X",
};

export const BothIcons = Template.bind({});
BothIcons.args = {
  label: "Lorem Ipsum",
  placeholder: "Lorem Ipsum",
  type: "text",
  state: "focused",
  leftIcon: "Q",
  rightIcon: "X",
};

export const Errored = Template.bind({});
Errored.args = {
  label: "Lorem Ipsum",
  placeholder: "Lorem Ipsum",
  type: "text",
  state: "error",
  message: "Lorem Ipsum",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Lorem Ipsum",
  placeholder: "Lorem Ipsum",
  type: "text",
  state: "warning",
  message: "Lorem Ipsum",
};

export const Success = Template.bind({});
Success.args = {
  label: "Lorem Ipsum",
  placeholder: "Lorem Ipsum",
  type: "text",
  state: "success",
  message: "Lorem Ipsum",
};

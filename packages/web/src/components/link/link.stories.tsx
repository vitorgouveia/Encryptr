import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "./index";

export default {
  title: "Design System/Dark/Components/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = ({ ...props }) => {
  return <Link {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Lorem Ipsum",
  href: "/",
};

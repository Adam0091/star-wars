import UIButton from "./UIButton";

export default {
  title: "UI-Kit/UIButton",
  component: UIButton,
};

const Template = (args) => <UIButton {...args} />;

export const Light = Template.bind({});
export const Dark = Template.bind({});
export const Disabled = Template.bind({});

const props = {
  text: "Hello",
  onClick: () => console.log(""),
  disabled: false,
  theme: "light",
  classes: "",
};

Light.args = {
  ...props,
  theme: "light",
};

Dark.args = {
  ...props,
  theme: "dark",
};

Disabled.args = {
  ...props,
  disabled: true,
};

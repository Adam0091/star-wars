import UILoading from "./UILoading";

export default {
  title: "UI-Kit/UILoading",
  component: UILoading,
};

const Template = (args) => <UILoading {...args} />;

export const White = Template.bind({});
export const Black = Template.bind({});
export const Blue = Template.bind({});

const props = {
    theme: "black",
    isShadow: false,
    classes: "",
};

White.args = {
  ...props,
  theme: "white",
};

Black.args = {
  ...props,
  theme: "black",
};

Blue.args = {
  ...props,
  theme: "blue",
};

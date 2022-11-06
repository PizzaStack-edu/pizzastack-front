import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterLink } from "./footer-link.component";

export default {
  title: "Common/Footer link",
  component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <ul>
    <FooterLink {...args} />
  </ul>
);

export const View = Template.bind({});
View.args = {
  href: "tel:+380441234567",
  children: "0441234567",
};

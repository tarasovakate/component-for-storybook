import { CustomCard, CustomCardProps } from "./CustomCard"
import { Meta, Story } from "@storybook/react"

const meta: Meta = {
  title: "CustomCard",
  component: CustomCard
}
export default meta

const Template: Story<CustomCardProps> = (args) => <CustomCard {...args} />

export const Default = Template.bind({})
Default.args = {
  text: "Text",
  light: false,
  img: "/images/CardMedia.jpg",
  margin: "10px",
  backgroundCard: "white",
  activeCheckBox: false,
  color: "secondary"
}
export const WithLight = Template.bind({})
WithLight.args = {
  text: "Text",
  light: true,
  img: "/images/CardMedia.jpg",
  margin: "10px",
  backgroundCard: "white",
  activeCheckBox: false,
  color: "secondary"
}
export const ActiveCard = Template.bind({})
ActiveCard.args = {
  text: "Text",
  light: true,
  img: "/images/CardMedia.jpg",
  margin: "10px",
  backgroundCard: "white",
  activeCheckBox: true,
  color: "secondary"
}

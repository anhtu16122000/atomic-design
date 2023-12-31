import type { Meta, StoryObj } from "@storybook/react";
import MSButton from "./MSButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "atoms/MSButton",
  component: MSButton,
  parameters: {},
} satisfies Meta<typeof MSButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {
    children: "Button",
  },
};

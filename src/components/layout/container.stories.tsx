import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './container';

const meta = {
  component: Container,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p className="text-neutral-400 border border-dashed border-neutral-400 w-full h-full text-center">Container</p>
  },
  render: (args) => (
    <Container className="h-96" {...args} />
  )
};
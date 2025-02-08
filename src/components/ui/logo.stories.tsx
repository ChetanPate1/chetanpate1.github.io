import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './logo';

const meta = {
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 100
  }
};
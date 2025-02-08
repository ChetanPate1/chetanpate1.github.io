import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './navbar';

const meta = {
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Navbar />
};
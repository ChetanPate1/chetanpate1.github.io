import type { Meta, StoryObj } from '@storybook/react';

import { Badge, variant } from './badge';


const meta = {
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    variant: 'default'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(variant)
    }
  },
  render: (args) => <Badge {...args}>Badge</Badge>
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
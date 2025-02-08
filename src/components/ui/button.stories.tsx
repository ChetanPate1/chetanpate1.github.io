import type { Meta, StoryObj } from '@storybook/react';

import { Button, variant, size } from './button';
import { Rocket } from 'lucide-react';

const meta = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    variant: 'default',
    size: 'default'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(variant)
    },
    size: {
      control: 'select',
      options: Object.keys(size)
    }
  },
  render: (args) => <Button {...args}>Button</Button>
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Icon: Story = {
  args: {
    size: 'icon'
  },
  render: (args) => (
    <Button {...args}>
      <Rocket />
    </Button>
  )
};
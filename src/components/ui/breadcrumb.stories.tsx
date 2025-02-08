import type { Meta, StoryObj } from '@storybook/react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './breadcrumb';

const meta = {
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <span className="hover:text-primary">Breadcrumb 1</span>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>Breadcrumb 2</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    separator: {}
  }
};
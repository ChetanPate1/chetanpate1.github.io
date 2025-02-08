import type { Meta, StoryObj } from '@storybook/react';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { Button } from './button';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            Dialog Description
          </DialogDescription>
        </DialogHeader>
        <div className="p-4">
          <p className="text-center">Dialog Content</p>
        </div>
        <DialogFooter>
          Dialog Footer
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};
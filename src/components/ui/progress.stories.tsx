import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
    component: Progress,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => (
            <div className="min-w-96">
                <Story />
            </div>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
    args: {
        value: 80
    }
};
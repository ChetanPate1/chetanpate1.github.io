import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from './card';
import { Button } from './button';
import { ArrowRight } from 'lucide-react';

const meta: Meta<typeof Card> = {
    component: Card,
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
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description.</CardDescription>
            </CardHeader>
            <CardContent>Card Content</CardContent>
            <CardFooter>Card Footer</CardFooter>
        </Card>
    )
};

export const Clipped: Story = {
    render: () => (
        <Card className="relative min-h-72">
            <Button size="icon" className="absolute right-5 top-5 z-10">
                <ArrowRight className="h-6 w-6" />
            </Button>
            <svg className="absolute -right-[5px] -top-[5px] z-0 opacity-100 dark:opacity-0" width="157" height="155" viewBox="0 0 157 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H4.77243C34.1812 1 57.9999 24.9568 57.9999 54.3415C57.9999 79.2064 78.1592 99.455 103 99.455C131.745 99.455 155.145 122.338 155.977 150.883L156 155H152V151H151.979C151.939 149.652 151.846 148.318 151.7 147C148.987 122.505 128.218 103.455 103 103.455C75.938 103.455 53.9999 81.4035 53.9999 54.3415C53.9999 28.2383 33.6831 6.77523 7.99994 5.10464C6.93301 5.03524 5.85681 5 4.77243 5H-6.10352e-05L0 1Z" fill="white" />
                <path d="M157 0H-6.10352e-05L0 1H4.77243C34.1812 1 57.9999 24.9568 57.9999 54.3415C57.9999 79.2064 78.1592 99.455 103 99.455C131.745 99.455 155.145 122.338 155.977 150.883L156 155H157V0Z" fill="#fff" />
            </svg>

            <svg className="absolute -right-[5px] -top-[5px] z-0 opacity-0 dark:opacity-100" width="157" height="155" viewBox="0 0 157 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H4.77243C34.1812 1 57.9999 24.9568 57.9999 54.3415C57.9999 79.2064 78.1592 99.455 103 99.455C131.745 99.455 155.145 122.338 155.977 150.883L156 155H152V151H151.979C151.939 149.652 151.846 148.318 151.7 147C148.987 122.505 128.218 103.455 103 103.455C75.938 103.455 53.9999 81.4035 53.9999 54.3415C53.9999 28.2383 33.6831 6.77523 7.99994 5.10464C6.93301 5.03524 5.85681 5 4.77243 5H-6.10352e-05L0 1Z" fill="#fff" />
                <path d="M157 0H-6.10352e-05L0 1H4.77243C34.1812 1 57.9999 24.9568 57.9999 54.3415C57.9999 79.2064 78.1592 99.455 103 99.455C131.745 99.455 155.145 122.338 155.977 150.883L156 155H157V0Z" fill="black" />
            </svg>
        </Card>
    )
};
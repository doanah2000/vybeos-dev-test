import type { Meta, StoryObj } from '@storybook/react';
import PageOverview from './page-overview';

const meta: Meta<typeof PageOverview> = {
  title: 'Components/PageOverview',
  component: PageOverview,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0E0F0E' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Page title',
    },
    description: {
      control: 'text',
      description: 'Page description',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageOverview>;

export const Default: Story = {
  args: {
    title: 'How It Works',
    description:
      'VybeOS keeps your brand safe and precise, every step of the loop is built to protect your tone, your visuals, and your standards.',
  },
};

export const ShortContent: Story = {
  args: {
    title: 'Quick Start',
    description: 'Get started in minutes with our simple setup process.',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Comprehensive Brand Management Solution',
    description:
      'Our platform provides an all-encompassing solution for managing your brand identity across multiple channels, ensuring consistency, maintaining quality, and delivering exceptional results that align with your business objectives and strategic goals.',
  },
};

export const WithCustomClass: Story = {
  args: {
    title: 'Features',
    description: 'Explore all the powerful features we offer.',
    className: 'custom-overview-class',
  },
};

export const MinimalText: Story = {
  args: {
    title: 'Hi',
    description: 'Welcome.',
  },
};

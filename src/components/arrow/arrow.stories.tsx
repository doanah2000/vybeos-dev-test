import type { Meta, StoryObj } from '@storybook/react';
import Arrow from './arrow';

const meta: Meta<typeof Arrow> = {
  title: 'Components/Arrow',
  component: Arrow,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['right', 'down'],
      description: 'Direction the arrow points',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Arrow>;

export const Right: Story = {
  args: {
    direction: 'right',
  },
};

export const Down: Story = {
  args: {
    direction: 'down',
  },
};

export const WithCustomClass: Story = {
  args: {
    direction: 'right',
    className: 'custom-arrow-class',
  },
};

export const LargeRight: Story = {
  args: {
    direction: 'right',
    className: 'scale-150',
  },
};

export const LargeDown: Story = {
  args: {
    direction: 'down',
    className: 'scale-150',
  },
};

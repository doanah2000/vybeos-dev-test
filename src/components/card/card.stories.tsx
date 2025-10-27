import type { Meta, StoryObj } from '@storybook/react';
import Card from './card';

// Mock the fonts
const mockFonts = {
  machina: { className: 'font-machina' },
  montreal: { className: 'font-montreal' },
};

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    overviewGeneral: {
      control: 'text',
      description: 'Main overview text',
    },
    overviewKeywords: {
      control: 'text',
      description: 'Keywords/highlighted text',
    },
    description: {
      control: 'text',
      description: 'Card description',
    },
    index: {
      control: 'number',
      description: 'Card index number (optional)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    overviewGeneral: 'Train Your',
    overviewKeywords: 'Brand Memory',
    description:
      'Upload your site, assets, and product data. VybeOS builds a private brand memory that captures your tone and design DNA. No shared models, no data leaks.',
  },
};

export const WithIndex: Story = {
  args: {
    overviewGeneral: 'Generate With',
    overviewKeywords: 'Precision',
    description:
      "Create complete campaigns in one click. Every line and layout stays true to your brand's identity, handcrafted quality, automated delivery.",
    index: 2,
  },
};

export const WithDoubleDigitIndex: Story = {
  args: {
    overviewGeneral: 'Learn + Refine',
    overviewKeywords: 'Safely',
    description:
      'Approve, adjust, and publish inside VybeOS. The system learns only from your edits, closing the loop between performance and creative consistency.',
    index: 15,
  },
};

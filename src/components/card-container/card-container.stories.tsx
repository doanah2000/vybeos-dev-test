import type { Meta, StoryObj } from '@storybook/react';
import CardContainer from './card-container';

const meta: Meta<typeof CardContainer> = {
  title: 'Components/CardContainer',
  component: CardContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    cards: {
      description: 'Array of card data objects',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardContainer>;

const sampleCards = [
  {
    overviewGeneral: 'Train Your',
    overviewKeywords: 'Brand Memory',
    description:
      'Upload your site, assets, and product data. VybeOS builds a private brand memory that captures your tone and design DNA. No shared models, no data leaks.',
  },
  {
    overviewGeneral: 'Generate With',
    overviewKeywords: 'Precision',
    description:
      "Create complete campaigns in one click. Every line and layout stays true to your brand's identity, handcrafted quality, automated delivery.",
  },
  {
    overviewGeneral: 'Learn + Refine',
    overviewKeywords: 'Safely',
    description:
      'Approve, adjust, and publish inside VybeOS. The system learns only from your edits, closing the loop between performance and creative consistency.',
  },
];

export const ThreeCards: Story = {
  args: {
    cards: sampleCards,
  },
};

export const TwoCards: Story = {
  args: {
    cards: sampleCards.slice(0, 2),
  },
};

export const SingleCard: Story = {
  args: {
    cards: [sampleCards[0]],
  },
};

export const FourCards: Story = {
  args: {
    cards: [
      ...sampleCards,
      {
        overviewGeneral: 'Scale Your',
        overviewKeywords: 'Operations',
        description:
          'Expand your reach effortlessly. VybeOS adapts to your growing needs while maintaining consistency and quality across all channels.',
      },
    ],
  },
};

export const EmptyContainer: Story = {
  args: {
    cards: [],
  },
};

export const CustomClassName: Story = {
  args: {
    cards: sampleCards,
    className: 'custom-container-class',
  },
};

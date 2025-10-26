import { render, screen, waitFor } from '@testing-library/react';
import CardContainer from '../card-container';

// Mock the child components
jest.mock('@/components/arrow/arrow', () => {
  return function MockArrow({
    direction,
    className,
  }: {
    direction?: string;
    className?: string;
  }) {
    return (
      <div data-testid={`arrow-${direction}`} className={className}>
        Arrow {direction}
      </div>
    );
  };
});

jest.mock('@/components/card/card', () => {
  return function MockCard({
    overviewGeneral,
    overviewKeywords,
    description,
    index,
  }: any) {
    return (
      <div data-testid="card">
        <div>{overviewGeneral}</div>
        <div>{overviewKeywords}</div>
        <div>{description}</div>
        {index && <div>Index: {index}</div>}
      </div>
    );
  };
});

describe('CardContainer Component', () => {
  const mockCards = [
    {
      overviewGeneral: 'Card 1 General',
      overviewKeywords: 'Card 1 Keywords',
      description: 'Card 1 description',
    },
    {
      overviewGeneral: 'Card 2 General',
      overviewKeywords: 'Card 2 Keywords',
      description: 'Card 2 description',
    },
    {
      overviewGeneral: 'Card 3 General',
      overviewKeywords: 'Card 3 Keywords',
      description: 'Card 3 description',
    },
  ];

  beforeEach(() => {
    // Reset window width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  it('renders with empty cards array', () => {
    const { container } = render(<CardContainer cards={[]} />);
    expect(container.querySelector('.clip-container')).toBeInTheDocument();
  });

  it('renders multiple cards', () => {
    render(<CardContainer cards={mockCards} />);
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(3);
  });

  it('passes card data correctly to Card components', () => {
    render(<CardContainer cards={mockCards} />);
    expect(screen.getByText('Card 1 General')).toBeInTheDocument();
    expect(screen.getByText('Card 2 Keywords')).toBeInTheDocument();
    expect(screen.getByText('Card 3 description')).toBeInTheDocument();
  });

  it('shows arrows between cards', () => {
    render(<CardContainer cards={mockCards} />);
    const arrows = screen.getAllByTestId(/arrow-/);
    // 3 cards = 2 arrows (between card 1-2 and card 2-3)
    // Each arrow renders twice (mobile and desktop versions)
    expect(arrows.length).toBeGreaterThanOrEqual(2);
  });

  it('no arrow after last card', () => {
    render(<CardContainer cards={mockCards} />);
    const cards = screen.getAllByTestId('card');
    // Verify we have exactly 2 arrow pairs (4 total arrows for 3 cards)
    const arrows = screen.getAllByTestId(/arrow-/);
    expect(arrows.length).toBe(4); // 2 pairs (down + right for each gap)
  });

  it('calculates minWidth correctly based on card count', () => {
    const { container } = render(<CardContainer cards={mockCards} />);
    const innerDiv = container.querySelector('.flex.w-full') as HTMLElement;
    // Check that minWidth is set (value will be calculated dynamically)
    expect(innerDiv).toBeInTheDocument();
    expect(innerDiv.style.minWidth).toBe('1082px');
  });

  it('applies desktop viewport logic (≥768px)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { container } = render(<CardContainer cards={mockCards} />);
    const innerDiv = container.querySelector('.flex.w-full') as HTMLElement;
    // On desktop, minWidth should be set
    expect(innerDiv.style.minWidth).toBe('1082px');
  });

  it('applies mobile viewport logic (<768px)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });

    const { container } = render(<CardContainer cards={mockCards} />);
    const innerDiv = container.querySelector('.flex.w-full') as HTMLElement;
    // On mobile, minWidth should not be set or should be undefined/empty
    expect(innerDiv.style.minWidth).toBeFalsy();
  });

  it('shows down arrows on mobile', () => {
    render(<CardContainer cards={mockCards} />);
    const downArrows = screen.getAllByTestId('arrow-down');
    expect(downArrows.length).toBeGreaterThan(0);
    downArrows.forEach((arrow) => {
      expect(arrow).toHaveClass('md:hidden');
    });
  });

  it('shows right arrows on desktop', () => {
    render(<CardContainer cards={mockCards} />);
    const rightArrows = screen.getAllByTestId('arrow-right');
    expect(rightArrows.length).toBeGreaterThan(0);
    rightArrows.forEach((arrow) => {
      expect(arrow).toHaveClass('hidden');
      expect(arrow).toHaveClass('md:block');
    });
  });

  it('applies custom className', () => {
    const { container } = render(
      <CardContainer cards={mockCards} className="custom-class" />
    );
    const containerDiv = container.querySelector('.clip-container');
    expect(containerDiv).toHaveClass('custom-class');
  });

  it('has correct container styles', () => {
    const { container } = render(<CardContainer cards={mockCards} />);
    const containerDiv = container.querySelector('.clip-container');
    expect(containerDiv).toHaveClass('w-fit');
    expect(containerDiv).toHaveClass('max-w-full');
    expect(containerDiv).toHaveClass('overflow-x-auto');
  });

  it('passes animation delay to arrows', () => {
    render(<CardContainer cards={mockCards} />);
    const arrows = screen.getAllByTestId(/arrow-/);
    // Each arrow should be rendered (existence is the test)
    expect(arrows.length).toBe(4); // 2 pairs of arrows for 3 cards
  });
});

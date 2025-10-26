import { render, screen } from '@testing-library/react';
import Card from '../card';

// Mock the font imports
jest.mock('@/app/layout', () => ({
  machina: { className: 'mock-machina' },
  montreal: { className: 'mock-montreal' },
}));

describe('Card Component', () => {
  const defaultProps = {
    overviewGeneral: 'Test General',
    overviewKeywords: 'Test Keywords',
    description: 'Test description text',
  };

  it('renders with required props', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText('Test General')).toBeInTheDocument();
    expect(screen.getByText('Test Keywords')).toBeInTheDocument();
    expect(screen.getByText('Test description text')).toBeInTheDocument();
  });

  it('displays overviewGeneral text', () => {
    render(<Card {...defaultProps} overviewGeneral="Custom General" />);
    expect(screen.getByText('Custom General')).toBeInTheDocument();
  });

  it('displays overviewKeywords text', () => {
    render(<Card {...defaultProps} overviewKeywords="Custom Keywords" />);
    expect(screen.getByText('Custom Keywords')).toBeInTheDocument();
  });

  it('displays description text', () => {
    render(<Card {...defaultProps} description="Custom description" />);
    expect(screen.getByText('Custom description')).toBeInTheDocument();
  });

  it('shows index badge when index provided', () => {
    render(<Card {...defaultProps} index={5} />);
    expect(screen.getByText('05')).toBeInTheDocument();
  });

  it('formats single-digit index with leading zero', () => {
    render(<Card {...defaultProps} index={3} />);
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('formats double-digit index without leading zero', () => {
    render(<Card {...defaultProps} index={15} />);
    expect(screen.getByText('15')).toBeInTheDocument();
  });

  it('hides badge when index undefined', () => {
    render(<Card {...defaultProps} />);
    expect(screen.queryByText(/\d{2}/)).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Card {...defaultProps} className="custom-class" />
    );
    const cardDiv = container.firstChild;
    expect(cardDiv).toHaveClass('custom-class');
  });

  it('uses machina font for overview text', () => {
    render(<Card {...defaultProps} />);
    const generalText = screen.getByText('Test General');
    const keywordsText = screen.getByText('Test Keywords');
    expect(generalText).toHaveClass('mock-machina');
    expect(keywordsText).toHaveClass('mock-machina');
  });

  it('uses montreal font for description', () => {
    render(<Card {...defaultProps} />);
    const description = screen.getByText('Test description text');
    expect(description).toHaveClass('mock-montreal');
  });

  it('has correct dimensions', () => {
    const { container } = render(<Card {...defaultProps} />);
    const cardDiv = container.firstChild as HTMLElement;
    expect(cardDiv).toHaveClass('h-[500px]');
    expect(cardDiv).toHaveClass('w-[294px]');
  });
});

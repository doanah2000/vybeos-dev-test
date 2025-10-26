import { render, screen } from '@testing-library/react';
import PageOverview from '../page-overview';

// Mock the font imports
jest.mock('@/app/layout', () => ({
  machina: { className: 'mock-machina' },
  montreal: { className: 'mock-montreal' },
}));

describe('PageOverview Component', () => {
  const defaultProps = {
    title: 'Test Title',
    description: 'Test description text',
  };

  it('renders with required props', () => {
    render(<PageOverview {...defaultProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description text')).toBeInTheDocument();
  });

  it('displays title text', () => {
    render(<PageOverview {...defaultProps} title="Custom Title" />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('displays description text', () => {
    render(<PageOverview {...defaultProps} description="Custom description" />);
    expect(screen.getByText('Custom description')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <PageOverview {...defaultProps} className="custom-class" />
    );
    const overviewDiv = container.firstChild;
    expect(overviewDiv).toHaveClass('custom-class');
  });

  it('uses machina font for title', () => {
    render(<PageOverview {...defaultProps} />);
    const title = screen.getByText('Test Title');
    expect(title).toHaveClass('mock-machina');
  });

  it('uses montreal font for description', () => {
    render(<PageOverview {...defaultProps} />);
    const description = screen.getByText('Test description text');
    expect(description).toHaveClass('mock-montreal');
  });

  it('has responsive width classes', () => {
    const { container } = render(<PageOverview {...defaultProps} />);
    const overviewDiv = container.firstChild as HTMLElement;
    expect(overviewDiv).toHaveClass('w-full');
    expect(overviewDiv).toHaveClass('max-w-[480px]');
  });

  it('centers text properly', () => {
    render(<PageOverview {...defaultProps} />);
    const title = screen.getByText('Test Title');
    const description = screen.getByText('Test description text');
    expect(title).toHaveClass('text-center');
    expect(description).toHaveClass('text-center');
  });

  it('applies break-words for text wrapping', () => {
    render(<PageOverview {...defaultProps} />);
    const description = screen.getByText('Test description text');
    expect(description).toHaveClass('break-words');
  });

  it('has proper spacing classes', () => {
    const { container } = render(<PageOverview {...defaultProps} />);
    const overviewDiv = container.firstChild as HTMLElement;
    expect(overviewDiv).toHaveClass('mb-16');
    expect(overviewDiv).toHaveClass('gap-2');
    expect(overviewDiv).toHaveClass('px-4');
  });
});

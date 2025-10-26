import { render, screen } from '@testing-library/react';
import Arrow from '../arrow';

describe('Arrow Component', () => {
  it('renders with default direction (right)', () => {
    const { container } = render(<Arrow />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '52');
    expect(svg).toHaveAttribute('height', '46');
  });

  it('renders with down direction', () => {
    const { container } = render(<Arrow direction="down" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '46');
    expect(svg).toHaveAttribute('height', '52');
  });

  it('applies custom className', () => {
    const { container } = render(<Arrow className="custom-class" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });

  it('has correct viewBox for right direction', () => {
    const { container } = render(<Arrow direction="right" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 52 46');
  });

  it('has correct viewBox for down direction', () => {
    const { container } = render(<Arrow direction="down" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 46 52');
  });

  it('renders correct path data for right direction', () => {
    const { container } = render(<Arrow direction="right" />);
    const path = container.querySelector('path');
    expect(path).toHaveAttribute('d', 'M26 2L48 23L26 44M48 23H4');
  });

  it('renders correct path data for down direction', () => {
    const { container } = render(<Arrow direction="down" />);
    const path = container.querySelector('path');
    expect(path).toHaveAttribute('d', 'M2 26L23 48L44 26M23 48V4');
  });

  it('has flex-shrink-0 class', () => {
    const { container } = render(<Arrow />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('flex-shrink-0');
  });
});

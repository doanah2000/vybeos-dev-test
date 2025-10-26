interface ArrowProps {
  className?: string;
  direction?: 'right' | 'down';
}

export default function Arrow({
  className = '',
  direction = 'right',
}: ArrowProps) {
  // Right arrow path: horizontal arrow pointing right
  const rightArrowPath = 'M26 2L48 23L26 44M48 23H4';

  // Down arrow path: vertical arrow pointing down
  const downArrowPath = 'M2 26L23 48L44 26M23 48V4';

  return (
    <svg
      width={direction === 'right' ? '52' : '46'}
      height={direction === 'right' ? '46' : '52'}
      viewBox={direction === 'right' ? '0 0 52 46' : '0 0 46 52'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary-lightGray flex-shrink-0 ${className}`.trim()}
    >
      <path
        d={direction === 'right' ? rightArrowPath : downArrowPath}
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

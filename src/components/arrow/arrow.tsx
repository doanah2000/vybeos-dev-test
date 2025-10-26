interface ArrowProps {
  className?: string;
}

export default function Arrow({ className = '' }: ArrowProps) {
  return (
    <svg
      width="52"
      height="46"
      viewBox="0 0 52 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary-lightGray flex-shrink-0 ${className}`.trim()}
    >
      <path
        d="M26 2L48 23L26 44M48 23H4"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

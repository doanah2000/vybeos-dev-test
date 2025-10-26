import { machina, montreal } from '@/app/layout';

interface PageOverviewProps {
  title: string;
  description: string;
  className?: string;
}

export default function PageOverview({
  title,
  description,
  className = '',
}: PageOverviewProps) {
  return (
    <div
      className={`flex-col-center mb-16 w-[480px] gap-2 ${className}`.trim()}
    >
      <h3
        className={`${machina.className} text-heading-secondary mb-4 text-white`}
      >
        {title}
      </h3>
      <p
        className={`${montreal.className} text-body-base text-center font-normal text-white`}
      >
        {description}
      </p>
    </div>
  );
}

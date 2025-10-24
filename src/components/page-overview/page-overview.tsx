import { machina, montreal } from '@/app/layout';

interface PageOverviewProps {
  title: string;
  description: string;
}

export default function PageOverview({
  title,
  description,
}: PageOverviewProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h3
        className={`${machina.className} text-primary-lightGreen text-4xl font-semibold`}
      >
        {title}
      </h3>
      <p className={`${montreal.className} text-white`}>{description}</p>
    </div>
  );
}

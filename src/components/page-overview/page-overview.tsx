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
    <div className="flex w-[480px] flex-col items-center gap-2">
      <h3 className={`${machina.className} text-4xl font-semibold text-white`}>
        {title}
      </h3>
      <p className={`${montreal.className} text-[16px] text-center text-white`}>
        {description}
      </p>
    </div>
  );
}

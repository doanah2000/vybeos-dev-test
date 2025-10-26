import { machina, montreal } from '@/app/layout';

interface CardProps {
  overviewGeneral: string;
  overviewKeywords: string;
  description: string;
}

export default function Card({
  overviewGeneral,
  overviewKeywords,
  description,
}: CardProps) {
  return (
    <div className="bg-primary-frost mx-4 flex h-[472px] w-[270px] flex-col items-center gap-2">
      <div className="bg-primary-smoke clip-card m-1 flex h-[254px] w-[254px] items-center justify-center p-4">
        <div className="flex h-[160px] w-[160px] flex-col items-center justify-center">
          <p
            className={`${machina.className} text-center text-[38px] font-bold text-white`}
          >
            {overviewGeneral}
          </p>
          <span
            className={`${machina.className} text-primary-lightGreen text-center text-[38px] font-bold`}
          >
            {overviewKeywords}
          </span>
        </div>
      </div>
      <p
        className={`${montreal.className} text-primary-smoke mt-2 px-4 text-[15px] font-medium`}
      >
        {description}
      </p>
    </div>
  );
}

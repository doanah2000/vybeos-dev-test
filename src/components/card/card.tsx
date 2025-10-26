import { machina, montreal } from '@/app/layout';

interface CardProps {
  overviewGeneral: string;
  overviewKeywords: string;
  description: string;
  index?: number;
  totalCount?: number;
  className?: string;
}

export default function Card({
  overviewGeneral,
  overviewKeywords,
  description,
  index,
  className = '',
}: CardProps) {
  return (
    <div
      className={`flex-center border-primary-lightGray relative mx-8 h-[500px] w-[294px] border ${className}`.trim()}
    >
      <div className="triangle-inset absolute-top-left"></div>
      <div className="bg-primary-frost flex-col-center relative mx-4 h-[472px] w-[270px] gap-2">
        <div className="bg-primary-smoke clip-card flex-center m-1 h-[254px] w-[254px] p-4">
          <div className="flex-col-center h-[160px] w-[160px] justify-center">
            <p
              className={`${machina.className} text-heading-primary text-center leading-[40px] text-white`}
            >
              {overviewGeneral}
            </p>
            <span
              className={`${machina.className} text-primary-lightGreen text-heading-primary text-center leading-[40px]`}
            >
              {overviewKeywords}
            </span>
          </div>
        </div>
        <p
          className={`${montreal.className} text-primary-smoke text-body-sm mt-2 justify-center px-4 leading-[24px]`}
        >
          {description}
        </p>
        {index !== undefined && (
          <div className="bg-primary-lightGreen text-primary-smoke absolute-bottom-right flex-center size-badge rounded-lg border">
            <span className={`${machina.className} text-badge`}>
              {index < 10 ? `0${index}` : index}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

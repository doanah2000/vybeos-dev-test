import React from 'react';
import Arrow from '@/components/arrow/arrow';

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardContainer({
  children,
  className = '',
}: CardContainerProps) {
  const childrenArray = React.Children.toArray(children);
  const totalCount = childrenArray.length;

  return (
    <div
      className={`clip-container border-primary-lightGray flex flex-wrap items-center gap-6 border bg-[radial-gradient(ellipse_150%_100%_at_bottom_center,var(--color-primary-green)_0%,var(--color-primary-gray)_70%)] px-24 py-8 ${className}`.trim()}
    >
      <div className="flex-center">
        {childrenArray.map((child, index) => (
          <React.Fragment key={index}>
            {React.isValidElement(child)
              ? React.cloneElement(
                  child as React.ReactElement<{
                    index?: number;
                    totalCount?: number;
                  }>,
                  {
                    index: index + 1,
                    totalCount,
                  }
                )
              : child}
            {index < childrenArray.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import Arrow from '@/components/arrow/arrow';

interface CardContainerProps {
  children: React.ReactNode;
}

export default function CardContainer({ children }: CardContainerProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="from-primary-gray to-primary-green clip-container flex flex-wrap items-center gap-6 bg-gradient-to-b px-16 py-8">
      <div className="flex items-center justify-center">
        {childrenArray.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {index < childrenArray.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

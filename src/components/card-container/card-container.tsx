'use client';

import React from 'react';
import Arrow from '@/components/arrow/arrow';
import Card from '@/components/card/card';

interface CardData {
  overviewGeneral: string;
  overviewKeywords: string;
  description: string;
}

interface CardContainerProps {
  cards: CardData[];
  className?: string;
}

export default function CardContainer({
  cards,
  className = '',
}: CardContainerProps) {
  const totalCount = cards.length;
  const [isDesktop, setIsDesktop] = React.useState(false);

  // Calculate minimum width based on content
  // Card width: 294px, Arrow width: 52px
  const cardWidth = 294;
  const arrowWidth = 52;
  const arrowGap = 24; // Fixed gap between cards and arrows

  const totalCardsWidth = totalCount * cardWidth;
  const totalArrowsWidth = (totalCount - 1) * arrowWidth;
  const totalGapsWidth = (totalCount - 1) * arrowGap * 2; // gap on each side of arrow
  const minWidth = totalCardsWidth + totalArrowsWidth + totalGapsWidth;

  React.useEffect(() => {
    // Check if we're on desktop viewport
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);

    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <div
      className={`clip-container border-primary-lightGray flex w-fit max-w-full flex-wrap gap-6 overflow-x-auto border bg-[radial-gradient(ellipse_150%_100%_at_bottom_center,var(--color-primary-green)_0%,var(--color-primary-gray)_70%)] px-24 py-12 ${className}`.trim()}
    >
      <div
        className="flex w-full flex-col items-center gap-6 md:flex-row md:justify-start md:gap-6"
        style={{
          minWidth: isDesktop ? `${minWidth}px` : undefined,
        }}
      >
        {cards.map((cardData, index) => (
          <React.Fragment key={index}>
            <Card
              overviewGeneral={cardData.overviewGeneral}
              overviewKeywords={cardData.overviewKeywords}
              description={cardData.description}
              index={index + 1}
            />
            {index < cards.length - 1 && (
              <>
                <Arrow
                  direction="down"
                  className="card-fade-in md:hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                />
                <Arrow
                  direction="right"
                  className="card-fade-in hidden md:block"
                  style={{ animationDelay: `${index * 0.15}s` }}
                />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

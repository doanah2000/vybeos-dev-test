import CardContainer from '@/components/card-container/card-container';
import PageOverview from '@/components/page-overview/page-overview';
import { displayTexts } from '@/utilities/display-texts';

export default function HomePage() {
  const cardData = [
    {
      overviewGeneral: displayTexts.brandMemory.general,
      overviewKeywords: displayTexts.brandMemory.keywords,
      description:
        displayTexts.brandMemory.description,
    },
    {
      overviewGeneral: displayTexts.generateWithPrecision.general,
      overviewKeywords: displayTexts.generateWithPrecision.keywords,
      description:
        displayTexts.generateWithPrecision.description,
    },
    {
      overviewGeneral: displayTexts.learnRefineSafely.general,
      overviewKeywords: displayTexts.learnRefineSafely.keywords,
      description:
        displayTexts.learnRefineSafely.description,
    },
  ];

  return (
    <main className="bg-primary-smoke flex min-h-screen flex-col items-center p-8">
      <PageOverview
        title={displayTexts.howItWorks.title}
        description={displayTexts.howItWorks.description}
        className="mt-16"
      />
      <CardContainer cards={cardData} />
    </main>
  );
}

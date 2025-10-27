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
      overviewGeneral: displayTexts.generateWith.general,
      overviewKeywords: displayTexts.generateWith.keywords,
      description:
        displayTexts.generateWith.description,
    },
    {
      overviewGeneral: displayTexts.learnRefine.general,
      overviewKeywords: displayTexts.learnRefine.keywords,
      description:
        displayTexts.learnRefine.description,
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

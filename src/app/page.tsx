import CardContainer from '@/components/card-container/card-container';
import Card from '@/components/card/card';
import PageOverview from '@/components/page-overview/page-overview';

export default function HomePage() {
  return (
    <main className="bg-primary-smoke flex min-h-screen flex-col items-center justify-center p-8">
      <PageOverview
        title="How It Works"
        description="VybeOS keeps your brand safe and precise, every step of the loop is built to protect your tone, your visuals, and your standards."
      />
      <CardContainer>
        <Card
          overviewGeneral="Train Your"
          overviewKeywords="Brand Memory"
          description="Upload your site, assets, and product data. VybeOS builds a private brand memory that captures your tone and design DNA. No shared models, no data leaks."
        />
        <Card
          overviewGeneral="Generate With"
          overviewKeywords="Precision"
          description="Create complete campaigns in one click. Every line and layout stays true to your brand’s identity, handcrafted quality, automated delivery."
        />
        <Card
          overviewGeneral="Learn + Refine"
          overviewKeywords="Safely"
          description="Approve, adjust, and publish inside VybeOS. The system learns only from your edits, closing the loop between performance and creative consistency."
        />
      </CardContainer>
    </main>
  );
}

import PageOverview from '@/components/page-overview/page-overview';

export default function HomePage() {
  return (
    <main className="bg-primary-smoke flex min-h-screen flex-col items-center justify-center p-8">
      <PageOverview
        title="How It Works"
        description="Single page application test"
      />
    </main>
  );
}

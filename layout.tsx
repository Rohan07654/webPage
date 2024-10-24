import PricingCard from '@/components/pricing/PricingCard';
import TechnologyTags from '@/components/pricing/TechnologyTags';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          Simple, traffic-based pricing
        </h1>
        <PricingCard />
        <TechnologyTags />
      </div>
    </main>
  );
}

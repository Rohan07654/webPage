 "use client";

import { useState } from 'react';
import { PricingTier } from '@/types/pricing';
import { PRICING_CONSTANTS } from '@/constants/pricing';
import { calculatePrice } from '@/utils/price-calculator';
import TrafficSlider from './TrafficSlider';
import FeaturesList from './FeaturesList';
import { Button } from '../ui/Button';

export default function PricingCard() {
  const [selectedTraffic, setSelectedTraffic] = useState<number>(100000);
  const [pricing, setPricing] = useState<PricingTier>({
    price: 16.00,
    features: PRICING_CONSTANTS.FEATURES,
    isSelected: false
  });

  const handleTrafficChange = (value: number) => {
    setSelectedTraffic(value);
    setPricing(prev => ({
      ...prev,
      price: calculatePrice(value)
    }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <p className="text-gray-600">Your selected plan</p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">${pricing.price}</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
          </div>
          
          <TrafficSlider
            value={selectedTraffic}
            onChange={handleTrafficChange}
            range={PRICING_CONSTANTS.TRAFFIC}
          />
        </div>

        <div className="mb-8">
          <FeaturesList features={pricing.features} />
        </div>

        <Button onClick={() => console.log('Start trial clicked')}>
          Start your trial
        </Button>
      </div>
    </div>
  );
}

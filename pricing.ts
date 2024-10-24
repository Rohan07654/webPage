export interface PricingTier {
    price: number;
    features: string[];
    isSelected: boolean;
  }
  
  export interface TrafficRange {
    min: number;
    max: number;
    step: number;
  }
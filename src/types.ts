export interface FeatureType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface IntegrationType {
  id: number;
  name: string;
  icon: string;
}

export interface PricingTier {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}
import { LucideIcon } from 'lucide-react';

export interface SpecItem {
    icon: LucideIcon;
    label: string;
    value: string;
    highlight?: boolean;
}

export interface ProductFeature {
    icon: LucideIcon;
    text: string;
}

export interface ProductData {
    id: string;
    name: string;
    tagline: string;
    price: string;
    image: string;
    specs: SpecItem[];
    features: ProductFeature[];
    featureTitle: string;
    colorTheme: string; // Tailwind color class prefix (e.g., 'blue', 'purple')
}

export interface ComparisonRow {
    parameter: string;
    terra: string;
    zspace: string;
    ugreen: string;
    fn: string;
}

export interface RecommendationItem {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    colorClass: string;
}